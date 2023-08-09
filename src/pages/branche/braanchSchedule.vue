<template >
    <Breadcrumbs title="Blog Single" main="Branches" />
    <div class="container-fluid  p-20">
        <div>
            <div class="container-fluid ">
                <h1>{{ branchData.name }}</h1>
            </div>
            <div class="card p-10">
                <div class="flex">
                    <div class="container-fluid custom p-10">
                        <img src="@/assets/images/it-park.jpg" class="img-fluid bg-img-cover" style="width: 100%;" alt="#">
                    </div>
                    <div class="text-box">
                        hello
                    </div>
                </div>

            </div>
        </div>

        <!-- <button type="button" class="btn btn-success">Edit</button>

        <button type="button" class="btn btn-danger" @click="deleteBranch">Delete</button> -->
    </div>
</template>
<script >
import calendar from "@/pages/branche/calendar.vue"
import { mapState } from "vuex"
export default {
    components: {
        calendar
    },
    data() {
        return {
            id: this.$route.params.id
        }
    },
    computed: {
        ...mapState('branche', ['branchData'])
    },
    mounted() {
        this.getbranch()
    },
    methods: {
        deleteBranch() {
            // console.log(this.id);
            this.$store.dispatch('branche/delete', this.id)
        },
        getbranch() {
            this.$store.dispatch('branche/getBranche', this.id)
        }
    }

}
</script>
<style scoped>


.flex{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
}
.custom{
    width: 50%;
    height: auto;
    /* background-color: aqua; */
}

.list {
    width: 100%;
    height: auto;
}

.text-box{
    width: 50%;
    height: auto;
    /* background-color: red; */
}
</style>
 