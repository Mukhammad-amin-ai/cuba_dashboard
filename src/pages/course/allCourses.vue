<template >
    <Breadcrumbs title="Blog Detail" main="All Courses" />
    <div class="container-fluid p-20">
        <spiner />
        <div class="row " style="gap: 40px;">
            <div class="col-md-6 col-xl-3 box-col-6 " v-for="item in allCourses " :key="item">
                <div class="card " style="width: 18rem;">
                    <img src="@/assets/images/it-course.jpg" class="card-img-top" alt="#">
                    <div class="card-body">
                        <h5 class="card-title">{{ item.name }}</h5>
                        <p class="card-text">Price : {{ item.price }} SUM</p>
                        <!-- <a href="#" class="btn btn-primary">About course</a> -->
                        <RouterLink :to="{ path: 'payme/' + item.id }">
                            <button type="button" class="btn btn-success" @click="cluck(item)">Buy</button>
                        </RouterLink>
                    </div>
                </div>
            </div>
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
        ...mapState('student', ['allCourses'])
    },
    mounted() {
        this.course()
    },
    methods: {
        course() {
            this.$store.dispatch('student/getAllCourses')
        },
        cluck(item) {
            this.$store.dispatch('payme/changeBuyProduct')
            // console.log(this.$store.state.payme.buyCourse);
            localStorage.setItem('buyedCourse', JSON.stringify(item))
        }
    }

}
</script>
<style scoped>
.btn:hover {
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