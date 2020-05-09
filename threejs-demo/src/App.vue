<template>
    <div class="container">

        <div v-for="(row, index1) in dataCube"
             :class="{
               isLasted: isLasted(index1),
               row: true
             }"
             :key="index1">

            <el-tooltip class="item"
                        effect="dark"
                        v-for="(column, index2) in row"
                        :key="index2"
                        :content="column.keys.join(',')"
                        placement="left-end">
                <div class="column">
                    {{column.counts}}
                </div>
            </el-tooltip>

        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import _ from 'lodash';
import Data from './data';

const SIZE = 31;

const LASTED = [2, 5, 8, 9, 10];

export default Vue.extend({
    name: 'introduce',
    data() {
        const cube = this.createCubeArray(SIZE);
        return {
            dataCube: cube
        };
    },
    components: {

    },
    mounted() {
        this.startStatistics(Data);
    },
    methods: {

        isLasted(num) {
            return LASTED.indexOf(num) !== -1;
        },
        /**
         * 开始统计
         */
        startStatistics(data) {
            const Dict = _.cloneDeep(data);
            for (let index = 0; index < Dict.length - 1; index += 1) {
                const prev = Dict[index];
                const next = Dict[index + 1];
                this.compareData({
                    prevKey: prev[0], prevValue: prev[1]
                }, {
                    nextKey: next[0], nextValue: next[1]
                });
            }
        },

        /**
         * 01-04 这次有01，下次有04
         */
        compareData({ prevKey, prevValue }, { nextKey, nextValue }) {
            // 遍历prev拥有的每一个号码
            prevValue.forEach((prev) => {
                for (let index = 1; index <= SIZE; index += 1) {
                    this.dataCube[prev][index].counts = (nextValue.indexOf(index) !== -1)
                        ? this.dataCube[prev][index].counts + 1
                        : this.dataCube[prev][index].counts;

                    this.dataCube[prev][index].keys.push(prevKey);
                }
            });
        },

        /**
         * 创建二维数组 size * size
         */
        createCubeArray(size = 31) {
            const arr = new Array(size + 1);
            for (let i = 0; i < arr.length; i += 1) {
                arr[i] = new Array(size + 1);
                for (let j = 0; j < arr[i].length; j += 1) {
                    if (i === 0) {
                        arr[i][j] = {
                            counts: j, keys: []
                        };
                    } else if (j === 0) {
                        arr[i][j] = {
                            counts: i, keys: []
                        };
                    } else {
                        arr[i][j] = {
                            counts: 0, keys: []
                        };
                    }
                }
            }

            return arr;
        }
    },
});
</script>

<style lang="less">
.isLasted {
    .column {
        background: #cdfeff;
    }
}
.container {
    .row {
        display: flex;
        .column {
            cursor: pointer;
            width: 26px;
            height: 26px;
            line-height: 26px;
            text-align: center;
            border-right: solid 1px #c3c3c3;
            border-bottom: solid 1px #c3c3c3;
        }
        .column:hover {
            background: #ffc3e3;
        }
    }
    .row {
        .column:first-child {
            border-right: solid 1px #333;
            border-bottom: solid 1px #fff;
        }
    }
    .row:first-child {
        .column {
            border-right: solid 1px #fff;
            border-bottom: solid 1px #333;
        }
    }
    .row:first-child {
        .column:first-child {
            border-right: solid 1px #333;
            border-bottom: solid 1px #333;
        }
    }
}
</style>
