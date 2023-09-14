<template >
    <Breadcrumbs title="Blog Detail" main="Users" />
    <div class="container-fluid p-20">
        <spiner />
        <div class="row d-flex">
            <RouterLink to="user/create"> 
                <div class="card social-profile p-10">
                    <button type="button" class="btn btn-primary select"> <i style="font-size: 50px;"
                        class='bx bx-plus-circle'></i></button>
                    </div>
                </RouterLink>
            <div class="col-xl-4 col-sm-6 col-xxl-3 col-ed-4 box-col-4" v-for="(item,index) in userData" :key="item.id">
                <RouterLink :to="{ path: 'user/' + item.id }">
                <div class="card social-profile ">
                    <div class="card-body">
                        <div class="social-img-wrap">
                            <div class="social-img">
                                <img src="@/assets/images/avtar/3.jpg" alt="profile">
                            </div>
                            <div class="edit-icon">
                                <svg>
                                    <use href="@/assets/svg/icon-sprite.svg#profile-check"></use>
                                </svg>
                            </div>
                        </div>
                        <div class="social-details">
                            <h5 class="mb-1">
                                {{ item.firstname }} {{ item.lastname }}
                            </h5>
                            <span class="f-light"></span>
                            <ul class="social-follow d-flex" style="justify-content: space-between;">
                                <li class=" d-grid ">
                                    <h5 class="mb-0">Contact</h5>
                                    <span class="f-light">{{ item.contact_no }}</span>
                                </li>
                                <li class=" d-grid">
                                    <h5 class="mb-0">Email</h5>
                                    <span class="f-light">{{ item.email }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                </RouterLink>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
import spiner from '@/components/ui/spiner.vue'
export default {
    components:{
        spiner
    },  
    computed:{
        ...mapState("user",['userData'])
    },
    mounted(){
        this.getAllUser() 
    },
    methods:{
        getAllUser(){
            this.$store.dispatch('user/getUsersData')
        }
    }
}
</script>
<style scoped>
.social-profile {
    background-image: none !important;
}

.select {
    transition: .3s all linear;
    transform: scale(1);
}

.select:hover {
    transform: scale(1.050);
}
</style>