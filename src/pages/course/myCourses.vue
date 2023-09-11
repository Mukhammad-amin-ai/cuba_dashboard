<template>
    <Breadcrumbs title="Blog Detail" main="My Courses" />
    <div class="container-fluid p-20">
        <spiner />
        <div class="row " style="gap: 40px;" v-if="this.$store.state.student.moData">
            <div class="col-md-6 col-xl-3 box-col-6 " v-for="item in mycourses " :key="item">
                <RouterLink :to="{ path: 'courseInfo/' + item.id }">
                    <div class="card " style="width: 18rem;">
                        <img src="@/assets/images/it-course.jpg" class="card-img-top" alt="#">
                        <div class="card-body">
                            <h5 class="card-title">{{ item.course.name }}</h5>
                            <p class="card-text">Payed in : {{ item.pay_time }} </p>
                            <a href="#" class="btn btn-primary">About course</a>
                        </div>
                    </div>
                </RouterLink>
            </div>
        </div>
        <div v-else>
            <center>
                no data 
            </center>
        </div>
    </div>
</template>
<script>
import spiner from '@/components/ui/spiner.vue'
import { mapState } from 'vuex';
export default {
    components: {
        spiner,
    },
    computed: {
        ...mapState('student', ['mycourses'])
    },
    mounted() {
        this.getMycourses()
    },
    methods: {
        getMycourses() {
            this.$store.dispatch('student/getMycourses')
        }
    },
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
</style>