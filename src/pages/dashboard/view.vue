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
                    <button type="button" class="btn btn-success" @click="getDay">Day</button>
                    <button type="button" class="btn btn-success">Week</button>
                    <button type="button" class="btn btn-success">Month</button>
                </div>
            </div>
            <div class="container-fluid d-flex">
                <statisticsVue :statisticsOfBranch="statictics ? statictics.roles : 'Loading...'" nameOf="Role"
                    link2="https://img.freepik.com/premium-photo/beautiful-cartoon-character-sitting-comfortable-red-chair-with-laptop-bearded-businessman-suit-3d-illustration_578102-3355.jpg?w=740" />
                <statisticsVue :statisticsOfBranch="statictics ? statictics.teachers : 'Loading...'" nameOf="Teachers"
                    link2="https://img.freepik.com/premium-photo/cartoon-male-teacher-isolated-white-background-vector-illustration-ai-generated_894218-552.jpg?w=1060" />
                <statisticsVue :statisticsOfBranch="statictics ? statictics.assistant_teachers : 'Loading...'"
                    nameOf="Assistant Teachers"
                    link2="https://img.freepik.com/premium-photo/photo-business-woman-with-blank-flipchart-3d-illustration-cartoon-style-generative-ai_742418-2951.jpg?w=740" />
                <statisticsVue :statisticsOfBranch="statictics ? statictics.groups : 'Loading...'" nameOf="Groups"
                    link2="https://img.freepik.com/premium-vector/young-woman-jane-holding-book-pencil-3d-vector-people-character-illustration_365941-673.jpg?w=740" />
                <statisticsVue :statisticsOfBranch="statictics ? statictics.courses : 'Loading...'" nameOf="Courses"
                    link2="https://img.freepik.com/free-psd/3d-nft-icon-digital-artist-male_629802-8.jpg?w=740&t=st=1695205406~exp=1695206006~hmac=892ea7a326dd48776efa73bed71bcfb7ed89f42c78ba5cb7b52978acebe39f65" />
                <statisticsVue :statisticsOfBranch="statictics ? statictics.stparents : 'Loading...'" nameOf="Parents"
                    link2="https://img.freepik.com/premium-photo/3d-cartoon-father-son-holding-balloons_567739-6558.jpg?w=900" />
            </div>
            <div class="container-fluid p-20">
                <chart />

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
import chart from '@/pages/dashboard/chart.vue'
import { mapState } from "vuex";
export default {
    components: {
        WelcomeCard,
        PurchaseSaleCard,
        thisBranch,
        spiner,
        chart,
        statisticsVue,
    },
    data() {
        return {
            branch: '',
            statictics: "",
            link: '../../assets/images/dashboard-3/bg.jpg',
            data:""
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
            this.$store.dispatch("user/getStatistics",this.data)
        },
        getDay(){
            this.data = '/?filter=day'
            // window.location.reload()
        },
        getmonth(){
            this.data = '/?filter=moth',
            window.location.reload()

        },
        getYear(){
            this.data='/filter=year',
            window.location.reload()
        }

    },


};
</script>
<style scoped>
.d-flex {
    /* height:; */
    flex-wrap: wrap;
    gap: 30px;
}

.col {
    width: 100px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.btn {
    padding: 10px;
}
</style>
