<template>
    <div class="container-fluid p-20">
        <spiner/>
        <div class="row " style="gap: 40px;">
            <RouterLink to="courses/create">
                <div class="card " style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title"></h5>
                        <p class="card-text"></p>
                        <div class="box">
                            <i class='bx bx-plus-circle'></i>
                        </div>
                    </div>
                </div>
            </RouterLink>
            <div class="col-md-6 col-xl-3 box-col-6 " v-for="item in courseData " :key="item">
                <RouterLink :to="{ path: 'courseInfo/' + item.id }">
                    <div class="card " style="width: 18rem;">
                        <img src="@/assets/images/it-course.jpg" class="card-img-top" alt="#">
                        <div class="card-body">
                            <h5 class="card-title">{{ item.name }}</h5>
                            <p class="card-text">Price : {{ item.price }} SUM</p>
                            <a href="#" class="btn btn-primary">About course</a>
                        </div>
                    </div>
                </RouterLink>
            </div>
        </div>
      
    </div>
</template>
<script>
import spiner from '@/components/ui/spiner.vue'
import { mapState } from 'vuex'
export default {
    components:{
        spiner,
    },
    computed: {
        ...mapState('course', ['courseData'])
    },
    mounted() {
        this.course()
    },
    methods: {
        course() {
            this.$store.dispatch('course/getCourseData')
        }
    }

}
</script>
<style scoped>
.container {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding-top: 20px;
    gap: 10px
}

.card:hover {
    transform: scale(1.050)
}

.box {
    padding: 50px;
    text-align: center;
    font-size: 50px;
}
</style>