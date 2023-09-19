<template>
    <div>
        <Breadcrumbs main="Dashboard" title="default" />
        <div class="container-fluid">
            <div class="row widget-grid">
                <WelcomeCard />
                <thisBranch :nameOfBranch="branch" />
                <PurchaseSaleCard :statisticsOfBranch="statictics"/>
            </div>
        </div>
    </div>
</template>
<script>
import WelcomeCard from "./defaultPage.vue";
import PurchaseSaleCard from "./purchase.vue";
import thisBranch from "./thisBranch.vue";
import { mapState } from "vuex";
export default {
    components: {
        WelcomeCard,
        PurchaseSaleCard,
        thisBranch
    },
    data() {
        return {
            branch: '',
            statictics:""
        }
    },
    computed: {
        ...mapState('user', ['statistics']),
    },
    watch: {
        statistics: {
            immediate: true,
            handler(newstatistics) {
                if(newstatistics){
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
