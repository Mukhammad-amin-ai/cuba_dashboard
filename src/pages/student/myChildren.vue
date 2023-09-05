<template >
  <Breadcrumbs title="Blog Detail" main="My Children" />
    <div class="container-fluid p-20">
        <div class="card p-20 ">
            <RouterLink to="teachers/create" class="select" >
                <div class="card social-profile  ">
                    <div class="card-body">
                        <i style="font-size: 50px;" class='bx bx-plus-circle'></i>
                    </div>
                </div>
            </RouterLink>
            <div class="row ">
                <div class="col-12 col-sm-6 col-lg-3" v-for="item in myChildren" :key="item.id">
                    <RouterLink :to="{ path: 'teachers/' + item.id }">
                        <div class="single_advisor_profile wow fadeInUp" data-wow-delay="0.2s"
                            style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;">
                            <div class="advisor_thumb">
                                <img src="../../assets/images/avtar/16.jpg" alt="">
                                <div class="social-info"><a href="#"><i class="fa fa-facebook"></i></a><a href="#">
                                        <i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a>
                                </div>
                            </div>
                            <div class="single_advisor_details_info">
                                <h6>{{ item.firstname }} {{ item.lastname }}</h6>
                                <p class="designation">{{ item.email }}</p>
                                <p class="designation">{{ item.contact_no }}</p>
                            </div>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState('student', ['myChildren']),
    },
    mounted() {
        this.getMychild()
    },
    methods: {
        getMychild() {
            this.$store.dispatch('student/getMyChildren')
        },
      
    }
}
</script>
<style scoped>
    
</style>