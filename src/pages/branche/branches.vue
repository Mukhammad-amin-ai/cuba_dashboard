<template>
    <Breadcrumbs title="Blog Detail" main="Branches" />
    <div class="wrapper">
        <spiner />
        <div class="container-fluid ">
            <div class="row">
                <div class="col-xl-6 set-col-12 box-col-12 " style="padding-bottom: 30px;">
                    <RouterLink v-if="hasBranchData" :to="{ path: 'branchInfo/' + branchData[0].id }">
                        <div class="card  "  style="height: 100%; ">
                            <div class="blog-box blog-shadow" style="height: 100%;">
                                <img class="img-fluid bg-img-cover" style="height: 100%;" src="@/assets/images/it-park.jpg"
                                    alt="">
                                <div class="blog-details">
                                    <p v-if="branchData && branchData.length">{{ branchData[branchData.length - branchData.length].name }}</p>
                                    <p v-else>No branch data available.</p>
                                    <h4>Latest opened Branch</h4>
                                </div>
                            </div>
                        </div>

                    </RouterLink>

                </div>
                <div class="col-xl-6 set-col-12 box-col-12">
                    <RouterLink v-if="hasBranchData" :to="{ path: 'branchInfo/' + branchData[1].id }">
                        <div class="card">
                            <div class="blog-box blog-list row">
                                <div class="col-sm-5"><img class="img-fluid sm-100-w" src="@/assets/images/it-park.jpg"
                                        alt="">
                                </div>
                                <div class="col-sm-7">
                                    <div class="blog-details">
                                        <div class="blog-date"><span>02</span> January 2018</div>
                                        <p v-if="branchData && branchData.length">{{ branchData[branchData.length - (branchData.length - 1)].name }}</p>
                                        <p v-else>No branch data available.</p>
                                        <div class="blog-bottom-content">
                                            <ul class="blog-social">
                                                <li>by: Admin</li>
                                                <li>0 Hits</li>
                                            </ul>
                                            <hr>
                                            <p class="mt-0">inventore veritatis et quasi architecto beatae vitae dicta sunt
                                                explicabo. Nemo enim ipsam voluptatem quia voluptas sit.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </RouterLink>
                    <RouterLink v-if="hasBranchData" :to="{ path: 'branchInfo/' + branchData[2].id }">

                        <div class="card">
                            <div class="blog-box blog-list row">
                                <div class="col-sm-5"><img class="img-fluid sm-100-w" src="@/assets/images/it-park.jpg"
                                        alt="">
                                </div>
                                <div class="col-sm-7">
                                    <div class="blog-details">
                                        <div class="blog-date"><span>03</span> January 2018</div>
                                        <p v-if="branchData && branchData.length">{{ branchData[branchData.length - (branchData.length - 2)].name }}</p>
                                        <p v-else>No branch data available.</p>
                                        <div class="blog-bottom-content">
                                            <ul class="blog-social">
                                                <li>by: Admin</li>
                                                <li>02 Hits</li>
                                            </ul>
                                            <hr>
                                            <p class="mt-0">inventore veritatis et quasi architecto beatae vitae dicta sunt
                                                explicabo. Nemo enim ipsam voluptatem quia voluptas sit.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </RouterLink>
                </div>
                <div class="col-md-6 col-xl-3 box-col-6 " v-for='item in branchData' :key="item">
                    <RouterLink :to="{ path: 'branchInfo/' + item.id }">

                        <div class="card">
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
                    </RouterLink>
                </div>
                <div class="col-md-6 col-xl-3 box-col-6  select">
                    <RouterLink to="branch/create">
                        <div class="card">
                            <div class="blog-box blog-grid text-center hover">
                                <i class='bx bx-plus-circle'></i>
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
import spiner from '@/components/ui/spiner.vue';



export default {
    components: {
        spiner,
    },
    computed: {
        ...mapState('branche', ['branchData']),
        hasBranchData() {
            return this.branchData && this.branchData.length > 0;
        }
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
.wrapper {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
}

.hover {
    height: 310px;
    line-height: 340px;
    font-size: 50px;
}

.select:hover {
    transform: scale(1.050);
}
</style>