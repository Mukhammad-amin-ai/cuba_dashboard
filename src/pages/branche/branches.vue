<template>
    <div class="container">
        <!-- <RouterLink :to="{ path: branchData[0].id + '/schedule' }"> -->
        <div class="card">
            <!-- <spiner /> -->
            <div class="blog-box blog-shadow">
                <img src="@/assets/images/it-park.jpg" class="img-fluid bg-img-cover" alt="#">
                <div class="blog-details">
                    <p>25 July 2018</p>
                    <h4>Main office</h4>
                    <ul class="blog-social">
                        <li><i class="icofont icofont-user"></i>Muhammdamin</li>
                        <li><i class="icofont icofont-thumbs-up"></i>02 Hits</li>
                        <li><i class="icofont icofont-ui-chat"></i>598 Comments</li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- </RouterLink> -->
        <div class="flex">
            <RouterLink :to="{ path: '/branchInfo/' + item.id }" v-for='item in branchData' :key="item">
                <div class="card" style="width: 18rem;">
                    <img src="@/assets/images/it-park.jpg" class="card-img-top" alt="#">
                    <div class="card-body">
                        <h5 class="card-title">{{ item.name }}</h5>
                        <p class="card-text">Some quick example description about branch</p>
                        <a href="#" class="btn btn-primary">Find it in Google map</a>
                    </div>
                </div>
            </RouterLink>
            <RouterLink to="branch/create" class="card hover">
            <div class="hover"  style="width: 18rem;">
                    <i class='bx bx-plus-circle'></i>
                </div>
            </RouterLink>

        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import spiner from '@/components/ui/spiner.vue';
export default {
    components: {
        spiner,
    },
    computed: {
        ...mapState('branche', ['branchData'])
    },
    mounted() {
        this.branch()

    },
    methods: {
        branch() {
            this.$store.dispatch('branche/getBranches')
        }
    }
}
</script>
<style scoped>
.container {
    width: 100%;
    height: 100%;
    padding-top: 30px
}

.flex {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 10px
}

.hover:hover {

    transform: scale(1.050);
}

.hover {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
}
</style>