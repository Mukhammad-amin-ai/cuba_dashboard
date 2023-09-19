<template>
    <div>
        <Breadcrumbs main="Dashboard" title="default" />
        <spiner />
        <div class="container-fluid">
            <div class="row widget-grid">
                <WelcomeCard />
                <thisBranch :nameOfBranch="branch" />
                <PurchaseSaleCard :statisticsOfBranch="statictics" />
                <div class="col">
                    <button type="button" class="btn btn-success">Day</button>
                    <button type="button" class="btn btn-success">Week</button>
                    <button type="button" class="btn btn-success">Month</button>
                </div>
            </div>
            <div class="container-fluid d-flex justify-content-between">
                <statisticsVue :statisticsOfBranch="statictics" />
                <statisticsVue :statisticsOfBranch="statictics" />
                <statisticsVue :statisticsOfBranch="statictics" />
                <statisticsVue :statisticsOfBranch="statictics" />
                <statisticsVue :statisticsOfBranch="statictics" />
                <statisticsVue :statisticsOfBranch="statictics" />
                <statisticsVue :statisticsOfBranch="statictics" />
                <statisticsVue :statisticsOfBranch="statictics" />

            </div>
        </div>
    </div>
</template>
<script>
import WelcomeCard from "./defaultPage.vue";
import PurchaseSaleCard from "./purchase.vue";
import thisBranch from "./thisBranch.vue";
import spiner from "@/components/ui/spiner.vue";
import statisticsVue from "./statistics.vue";
import { mapState } from "vuex";
export default {
    components: {
        WelcomeCard,
        PurchaseSaleCard,
        thisBranch,
        spiner,
        statisticsVue
    },
    data() {
        return {
            branch: '',
            statictics: ""
        }
    },
    computed: {
        ...mapState('user', ['statistics']),
    },
    watch: {
        statistics: {
            immediate: true,
            handler(newstatistics) {
                if (newstatistics) {
                    this.branch = newstatistics.branch,
                        this.statictics = newstatistics.statistics
                }
            }
        }
    },
    mounted() {
        this.getStat()
    },
    methods: {
        getStat() {
            this.$store.dispatch("user/getStatistics")
        },

    },


};
</script>
<style scoped>
.d-flex {
    flex-wrap: wrap;
}
.col{
    width: 100px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.btn{
    padding: 10px;
}
</style>
