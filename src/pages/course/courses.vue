<template>
    <div class="container">
        <div class="card" style="width: 18rem;" v-for="item in courseData " :key="item">
            <img src="@/assets/images/it-course.jpg" class="card-img-top" alt="#">
            <div class="card-body">
                <h5 class="card-title">{{ item.name }}</h5>
                <p class="card-text">Price : {{ item.price }} SUM</p>
                <a href="#" class="btn btn-primary">About course</a>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
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
    flex-wrap: wrap;
    padding: 50px;
    gap: 10px
}

.card:hover {
    transform: scale(1.050)
}
</style>