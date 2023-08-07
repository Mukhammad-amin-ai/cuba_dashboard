<template>
    <div class="container">
        <div class="card" style="width: 18rem;" v-for='item in branchData.data' :key="item">
            <img src="@/assets/images/it-park.jpg" class="card-img-top" alt="#">
            <div class="card-body">
                <h5 class="card-title">{{ item.name }}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                    content.</p>
                <a href="#" class="btn btn-primary">Find it in Google map</a>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState('branche',['branchData'])
        // setBranch(){
        //     return this.$store.state.branche.branchData
        // }
    },
    mounted() {
        this.branch()
    },
    methods: {
        branch() {
            this.$store.dispatch('branche/getBranches')
            // console.log(this.setBranch);
        }
    }
}
</script>
<style scoped>
.container {
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    padding: 50px;
    gap:10px
}
.card:hover{
    transform:scale(1.050)
}
</style>