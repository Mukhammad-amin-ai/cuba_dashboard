<template>
    <Breadcrumbs title="Blog Detail" main="Courses" />
    <div class="container-fluid p-20">
        <spiner />
        <div class="row " style="gap: 40px;">
            <div class="card " style="width: 18rem;" v-if="this.$store.state.create">
                <RouterLink to="courses/create">
                    <!-- <div class="card-body center"> -->
                    <!-- <h5 class="card-title"></h5>
                        <p class="card-text"></p> -->
                    <div class="box">
                        <i class='bx bx-plus-circle'></i>
                    </div>
                    <!-- </div> -->
                </RouterLink>
            </div>
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
        <nav aria-label="Page navigation example" v-if="this.$store.state.course.pagination">
            <ul class="pagination">
                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
        </nav>
    </div>
</template>
<script>
import spiner from '@/components/ui/spiner.vue'
import { mapState } from 'vuex'
export default {
    components: {
        spiner,
    },
    computed: {
        ...mapState('course', ['courseData'])
    },
    mounted() {
        this.course()
        this.roleCheck()
    },
    methods: {
        course() {
            this.$store.dispatch('course/getCourseData')
        },
        roleCheck() {
            this.$store.dispatch('permittionCheck', '11')
        }
    }

}
</script>
<style scoped>
.card:hover {
    transform: scale(1.050)
}

.card {
    display: flex;
    justify-content: center;
    align-items: center;
}

.box {
    width: 100%;
    height: 18rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.box i {
    font-size: 40px;
}

/* .center{
   
} */
</style>