declare namespace Chart {
    /**
     * 初始化图表
     */
    interface InitParam {
        dom: any;
        theme?: object | string;
        opts?: {
            devicePixelRatio?: number;
            renderer?: string;
            width?: number | string;
            height?: number | string;
        };
    }

    /**
     * 样式基础属性
     */
    interface Style {
        [key: string]: any;
        color?: string;
        fontStyle?: 'normal' | 'italic' | 'oblique';
        fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter' | 100 | 200 | 300 | 400;
        fontFamily?: string;
        fontSize?: number;
        align?: string;
        verticalAlign?: string;
        lineHeight?: number;
        backgroundColor?: string | object;
        borderColor?: string;
        borderWidth?: number;
        borderRadius?: number;
        padding?: number | number[];
        width?: number | string;
        height?: number | string;
    }

    /**
     * 文本格式化
     */
    interface Formatter {
        (
            params: any | any[],
            ticket: string,
            callback: (ticket: string, html: string) => void
        ): string;
    }

    /**
     * 坐标轴指示器的文本标签
     */
    interface PointerLabel {
        show?: boolean;
        margin?: number;
        color?: string;
        fontStyle?: 'normal' | 'italic' | 'oblique';
        fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter' | 100 | 200 | 300 | 400;
        fontFamily?: string;
        fontSize?: number;
        lineHeight?: number;
        backgroundColor?: string;
        borderColor?: string;
        borderWidth?: number;
        borderRadius?: number;
        padding?: number | number[];
        formatter?: string | Formatter;
    }

    /**
     * 坐标轴指示器的线
     */
    interface PointerLine {
        color?: string;
        width?: number;
        type?: 'solid' | 'dashed' | 'dotted';
        opacity?: number;
    }

    /**
     * cartesian坐标轴轴线
     */
    interface AxisLine {
        show?: boolean;
        symbol?: string | string[];
        symbolSize?: number[];
        lineStyle?: {
            color?: string;
            width?: number;
            type?: 'solid' | 'dashed' | 'dotted';
            opacity?: number;
        };
    }

    /**
     * cartesian坐标轴刻度
     */
    interface AxisTick {
        show?: boolean;
        alignWithLabel?: boolean;
        interval?: string | number | Function;
        inside?: boolean;
        length?: number;
        lineStyle?: {
            color?: string;
            width?: number;
            type?: 'solid' | 'dashed' | 'dotted';
            opacity?: number;
        };
    }

    /**
     * cartesian坐标轴刻度标签
     */
    interface AxisLabel extends Style {
        show?: boolean;
        rotate?: number;
        margin?: number;
        formatter?: string | Function;
    }

    /**
     * cartesian坐标轴在grid区域中的分隔线
     */
    interface SplitLine {
        show?: boolean;
        interval?: string | number | Function;
        lineStyle?: {
            color?: string | string[];
            width?: number;
            type?: 'solid' | 'dashed' | 'dotted';
            opacity?: number;
        };
    }

    /**
     * cartesian坐标轴坐标轴在grid区域中的分隔区域
     */
    interface SplitArea {
        show?: boolean;
        interval?: string | number | Function;
        areaStyle?: {
            color?: string[];
            opacity?: number;
        };
    }

    /**
     * cartesian坐标轴data
     */
    interface AxisData {
        value?: string;
    }

    /**
     * Legend图例data
     */
    interface LegendData {
        name?: string;
        icon?: string;
    }

    /**
     * 标题组件
     */
    interface Title {
        show?: boolean;
        text?: string;
        textStyle?: Style;
        padding?: number;
        left?: string | number;
        top?: string | number;
        right?: string | number;
        bottom?: string | number;
        backgroundColor?: string;
        borderColor?: string;
        borderWidth?: number;
        borderRadius?: number | number[];
    }

    /**
     * 直角坐标系绘图网格组件
     */
    interface Grid {
        top?: string | number;
        right?: string | number;
        bottom?: string | number;
        left?: string | number;
    }

    /**
     * 提示框组件
     */
    interface Tooltip {
        $carousel?: boolean;
        $interval?: number;
        show?: boolean;
        trigger?: 'item' | 'axis' | 'none';
        triggerOn?: 'click' | 'mousemove';
        axisPointer?: {
            type?: 'line' | 'shadow' | 'none' | 'cross';
            label?: PointerLabel;
            lineStyle?: PointerLine;
            shadowStyle?: {
                color?: string;
                opacity?: number;
            };
            crossStyle?: PointerLine;
        };
        confine?: boolean;
        position?: (number | string)[];
        $formatter?: string;
        formatter?: string | Formatter;
        backgroundColor?: string;
        borderColor?: string;
        borderWidth?: number;
        padding?: number | number[];
        textStyle?: Style;
    }

    /**
     * cartesian坐标轴组件
     */
    interface CartesianAxis {
        $type?: string;
        $textSize?: number;
        $textColor?: string;
        $textWeight?: 'normal' | 'bold' | 'bolder' | 'lighter';
        $rotate?: 360 | 90 | 300;
        $dataType?:
            | 'auto'
            | 'integer'
            | 'oneDecimal'
            | 'twoDecimal'
            | 'ymdhms'
            | 'ymdhm'
            | 'ymdh'
            | 'ymd'
            | 'ym'
            | 'y'
            | 'md'
            | 'hms'
            | 'hm'
            | 's';
        $max?: 'max' | 'auto';
        $min?: 'min' | 'auto';
        show?: boolean;
        type?: 'value' | 'category' | 'time' | 'log';
        gridIndex?: number;
        name?: string;
        nameLocation?: 'start' | 'center' | 'end';
        nameGap?: number;
        nameRotate?: number;
        nameTextStyle?: Style;
        inverse?: boolean;
        boundaryGap?: boolean | (string | number)[];
        min?: number | string;
        max?: number | string;
        axisLine?: AxisLine;
        axisTick?: AxisTick;
        axisLabel?: AxisLabel;
        splitLine?: SplitLine;
        splitArea?: SplitArea;
        data?: (string | number | AxisData)[];
    }

    /**
     * 图例组件
     */
    interface Legend {
        $position?:
            | 'top center'
            | 'top left'
            | 'top right'
            | 'bottom center'
            | 'bottom left'
            | 'bottom right';
        show?: boolean;
        type?: 'plain' | 'scroll';
        orient?: 'vertical' | 'horizontal';
        align?: 'auto' | 'left' | 'right';
        left?: string;
        right?: string;
        top?: string;
        bottom?: string | number;
        padding?: number | number[];
        itemGap?: number;
        itemWidth?: number;
        itemHeight?: number;
        icon?: 'circle' | 'rect' | 'roundRect' | 'triangle' | 'diamond';
        formatter?: string | Function;
        selectedMode?: true | false | 'single' | 'multiple';
        inactiveColor?: string;
        textStyle?: Style;
        backgroundColor?: string;
        borderColor?: string;
        borderWidth?: number;
        borderRadius?: number;
        selected?: object;
        data?: (string | LegendData)[];
    }

    /**
     * 系列列表项
     */
    interface SeriesItem {
        $ratio?: {
            target?: number;
            actual?: number;
            text?: string;
        };
        $outerRadius?: string | number;
        $innerRadius?: string | number;
        $point?: number;
        $formatter?: boolean;
        $showFormatterName?: boolean;
        $angle?: number | string;
        $barGap?: number | string;
        $barCategoryGap?: number | string;
        name?: string;
        type?: 'line' | 'bar' | 'pie';
        yAxisIndex?: number;
        stack?: null | 'all';
        step?: boolean | 'start' | 'middle' | 'end';
        radius?: (string | number)[];
        startAngle?: number;
        roseType?: false | 'area';
        barGap?: string;
        barCategoryGap?: string;
        z?: number;

        label?: {
            show?: boolean;
            fontSize?: number;
            color?: string;
            fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter' | 100 | 200 | 300 | 400;
            position?: string | (string | number)[];
            formatter?: string | Function;
        };

        labelLine?: {
            show?: boolean;
            length?: number;
            length2?: number;
        };
        tooltip?: {
            show?: boolean;
        };

        /**
         * 线条样式
         */
        smooth?: boolean;
        lineStyle?: {
            color?: string;
            type?: 'solid' | 'dashed';
            width?: number;
        };

        /**
         * 圆点样式
         */
        symbol?: 'circle';
        symbolSize?: number;
        itemStyle?: {
            color?: string;
        };

        /**
         * 面积样式
         */
        areaStyle?: {
            color?: string;
        };

        /**
         * 标签样式
         */
        markPoint?: {
            data?: any[];
        };
        markLine?: {
            data?: any[];
        };
        data?: any[];
    }

    /**
     * 图表配置项options
     */
    interface Option {
        series?: SeriesItem[];
        title?: Title;
        grid?: Grid;
        tooltip?: Tooltip;
        xAxis?: CartesianAxis;
        yAxis?: CartesianAxis;
        zAxis?: CartesianAxis;
        legend?: Legend;
        textStyle?: object;
    }
}
