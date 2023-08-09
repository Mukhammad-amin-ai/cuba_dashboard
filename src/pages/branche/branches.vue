<template>
    <Breadcrumbs title="Blog Detail" main="Branches" />
    <div class="wrapper">
        <spiner />
        <div class="container-fluid ">
            <div class="row">
                <div class="col-xl-6 set-col-12 box-col-12">
                    <RouterLink v-if="hasBranchData" :to="{ path: 'branchInfo/' + branchData[0].id }">
                        <div class="card" style="height: 93%;">
                            <div class="blog-box blog-shadow" style="height: 100%;">
                                <img class="img-fluid bg-img-cover" style="height: 100%;" src="@/assets/images/it-park.jpg"
                                    alt="">
                                <div class="blog-details">
                                    <p v-if="branchData && branchData.length">{{ branchData[0].name }}</p>
                                    <p v-else>No branch data available.</p>
                                    <h4>Main Office</h4>
                                    <ul class="blog-social">
                                        <li><i class="icofont icofont-user"></i>Mark Jecno</li>
                                        <li><i class="icofont icofont-thumbs-up"></i>02 Hits</li>
                                        <li><i class="icofont icofont-ui-chat"></i>598 Comments</li>
                                    </ul>
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
                                        <p v-if="branchData && branchData.length">{{ branchData[1].name }}</p>
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
                                        <p v-if="branchData && branchData.length">{{ branchData[2].name }}</p>
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
                    <div class="card">
                        <div class="blog-box blog-grid text-center">
                            <div class="blog-wrraper"><a href="blog-single.html">
                                    <img class="img-fluid top-radius-blog" src="@/assets/images/it-park.jpg" alt=""></a>
                            </div>
                            <div class="blog-details-main">
                                <ul class="blog-social">
                                    <li>9 April 2018</li>
                                    <li>by: Admin</li>
                                    <li>Hits</li>
                                </ul>
                                <hr>
                                <h6 class="blog-bottom-details">Perspiciatis unde omnis iste natus error sit.Dummy text</h6>
                            </div>
                        </div>
                    </div>
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
    height: 340px;
    line-height: 340px;
    font-size: 50px;
}

.select:hover {
    transform: scale(1.050);
}
</style>