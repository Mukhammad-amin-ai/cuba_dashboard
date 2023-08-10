<template>
    <div class="container-fluid">
        <div class="row">
            <div class="card">
                <div class="card-header">
                    <h3> Available Courses</h3>
                </div>
                <div class="row p-20">

                    <div class="col-md-6 col-xl-3 box-col-6 " v-for="item in courseData " :key="item">
                        <!-- <RouterLink :to="{ path: 'branchInfo/' + item.id }"> -->
        
                        <div class="card" >
                            <div class="blog-box blog-grid text-center">
                                <div class="blog-wrraper">
                                    <img class="img-fluid top-radius-blog" src="@/assets/images/it-park.jpg" alt="">
                                </div>
                                <div class="blog-details-main">
                                    <ul class="blog-social">
                                        <li>9 April 2018</li>
                                        <li>by: Admin</li>
                                        <li>Hits</li>
                                    </ul>
                                    <hr>
                                    <h6 class="blog-bottom-details">{{ item.name }}</h6>
                                </div>
                            </div>
                        </div>
                        <!-- </RouterLink> -->
                    </div>
                </div>
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
    align-items: center;
    flex-wrap: wrap;
    padding-top: 20px;
    gap: 10px
}


</style>