/**
 * 自动轮播echarts图表的tooltip
 * @param chart echarts实例对象
 * @param chartOption 实例对象配置项
 * @param options 轮播选项
 * {
 *   interval 轮播时间间隔，单位毫秒，默认为2000
 *   updateData 自定义更新数据的函数，默认为null;
 *              用于类似于分页的效果，比如总数据有20条，图表一次只显示5条，全部数据分4次显示。
 * }
 * @returns clearLoop 清除当前轮播方法
 */
const loopShowTooltip = function loopShowEchartsTooltip(
    chart: any,
    chartOption: any,
    options: any = {}
) {
    if (!chart || !chartOption) {
        return false;
    }

    const { series = [] } = chartOption;

    if (series.length === 0) {
        return false;
    }

    const defaultOptions: any = {
        interval: 2000,
        updateData: null
    };
    const zRender = chart.getZr();
    const seriesLen = series.length;

    let dataIndex = 0; // 数据索引
    let seriesIndex = 0; // 系列索引
    let dataLen = 0; // 某系列数据项
    let chartType: any; // 系列类型
    let timeTicket: any = 0;
    let isFirst = true;
    let lastShowSeriesIndex = 0;
    let lastShowDataIndex = 0;

    options.interval = options.interval || defaultOptions.interval;
    options.updateData = options.updateData || defaultOptions.updateData;

    /**
     * 取消高亮
     */
    function cancelHighlight() {
        const tempSeriesIndex =
            dataIndex === 0 ? (seriesIndex === 0 ? seriesLen - 1 : seriesIndex - 1) : seriesIndex;
        const tempType = chartOption.series[tempSeriesIndex].type;

        if (tempType === 'pie' || tempType === 'radar') {
            chart.dispatchAction({
                type: 'downplay',
                seriesIndex: lastShowSeriesIndex,
                dataIndex: lastShowDataIndex
            });
        }
    }

    /**
     * 自动轮播tooltip
     */
    function autoShowTip() {
        function showTip() {
            // 是否更新数据
            if (dataIndex === 0 && !isFirst && typeof options.updateData === 'function') {
                options.updateData();
                chart.setOption(chartOption);
            }

            const currSeries = series[seriesIndex];
            const { type = '', data = [] } = currSeries;

            if (type.length === 0 || data.length === 0) {
                return false;
            }

            chartType = type;
            dataLen = data.length;

            if (chartType === 'pie' || chartType === 'radar') {
                if (!isFirst) {
                    cancelHighlight();
                }

                // 高亮当前图形
                chart.dispatchAction({
                    type: 'highlight',
                    seriesIndex,
                    dataIndex
                });
            }

            chart.dispatchAction({
                type: 'showTip',
                seriesIndex,
                dataIndex
            });

            isFirst = false;
            // 记录上一次系列index、数据index
            lastShowSeriesIndex = seriesIndex;
            lastShowDataIndex = dataIndex;
            // 计算下一次系列index、数据index
            dataIndex = (dataIndex + 1) % dataLen;
            seriesIndex = (seriesIndex + 1) % seriesLen;

            return true;
        }

        showTip();
        timeTicket = setInterval(showTip, options.interval);
    }

    // 关闭轮播
    function stopAutoShow() {
        if (timeTicket) {
            clearInterval(timeTicket);
            timeTicket = 0;

            if (chartType === 'pie' || chartType === 'radar') {
                cancelHighlight();
            }
        }
    }

    function zRenderMouseMove(param: any) {
        if (param.event) {
            // 阻止canvas上的鼠标移动事件冒泡
            param.event.cancelBubble = true;
        }
        stopAutoShow();
    }

    // 离开echarts图时恢复自动轮播
    function zRenderGlobalOut() {
        if (!timeTicket) {
            autoShowTip();
        }
    }

    /**
     * 清除定时器
     */
    function clearLoop() {
        if (timeTicket) {
            clearInterval(timeTicket);
            timeTicket = 0;
        }
        chart.off('mousemove', stopAutoShow);
        zRender.off('mousemove', zRenderMouseMove);
        zRender.off('globalout', zRenderGlobalOut);
    }

    // 鼠标在echarts图上时停止轮播
    chart.on('mousemove', stopAutoShow);
    zRender.on('mousemove', zRenderMouseMove);
    zRender.on('globalout', zRenderGlobalOut);

    autoShowTip();

    return {
        clear: clearLoop
    };
};

export default loopShowTooltip;
