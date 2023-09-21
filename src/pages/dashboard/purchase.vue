<template>
    <div class="col-xxl-auto col-xl-10 col-sm-6 box-col-6 ">
        <div class="row ">
            <div class="col-xl-10">
                <div class="card widget-1">
                    <div class="card-body">
                        <div class="widget-content">
                            <!-- :class="puechaseSales.widgetClass" -->
                            <div class="widget-round primary">
                                <div class="bg-round">
                                    <!-- <svg class="svg-fill">
                                        <use
                                            :xlink:href="require('@/assets/svg/icon-sprite.svg') + `#${puechaseSales.svgIcon1}`">
                                        </use>
                                    </svg> -->
                                </div>
                            </div>
                            <div>
                                <h5 v-if="statisticsOfBranch">{{ statisticsOfBranch.payments }} UZS</h5>
                                <h5 v-else>Loading...</h5>
                                <span class="f-light">
                                    <!-- {{ puechaseSales.title }} -->
                                    Earned
                                </span>
                            </div>
                        </div>
                        <!-- <div :class="puechaseSales.growthClass">
                            <i :class="puechaseSales.iconClass"></i><span>{{ puechaseSales.growthNumber }}</span>
                        </div> -->
                    </div>
                </div>
            </div>
            <div class="col-xl-10">
                <div class="card widget-1">
                    <div class="card-body">
                        <div class="widget-content">
                            <!-- :class="puechaseSales.widgetClass" -->
                            <div class="widget-round primary">
                                <div class="bg-round">
                                    <!-- <svg class="svg-fill">
                                        <use
                                            :xlink:href="require('@/assets/svg/icon-sprite.svg') + `#${puechaseSales.svgIcon1}`">
                                        </use>
                                    </svg> -->
                                </div>
                            </div>
                            <div>
                                <h4 v-if="statisticsOfBranch">{{ statisticsOfBranch.students }}</h4>
                                <h4 v-else>Loading</h4>
                                <span class="f-light">
                                    <!-- {{ puechaseSales.title }} -->
                                    Students
                                </span>
                            </div>
                        </div>
                        <!-- <div :class="puechaseSales.growthClass">
                            <i :class="puechaseSales.iconClass"></i><span>{{ puechaseSales.growthNumber }}</span>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>
import { mapState } from 'vuex';
export default {
    props: {
        statisticsOfBranch: String,
        nameOFstat: String,
        // stat:String
    },
    data() {
        return {

        }
    },
    computed: {
        ...mapState("user", ['statistics'])
    },
    mounted() {
        // this.getStat()
    },
    methods: {
        // getStat(){
        //     this.$store.dispatch("user/getStatistics")
        // }
    },
}
</script>
<style scoped>
.he {
    height: 10%;
}
</style>