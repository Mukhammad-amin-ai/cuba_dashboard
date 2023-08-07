<template>
    <div class="container">
        <div class="card">
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
        <div class="flex">
            <div class="card" style="width: 18rem;" v-for='item in branchData' :key="item">
                <img src="@/assets/images/it-park.jpg" class="card-img-top" alt="#">
                <div class="card-body">
                    <h5 class="card-title">{{ item.name }}</h5>
                    <p class="card-text">Some quick example description about branch</p>
                    <a href="#" class="btn btn-primary">Find it in Google map</a>
                </div>
            </div>
        </div>
    </div>
    <!-- <div class="container-fluid ">
        <div class="row">
            <div class="col-xl-6 set-col-12 box-col-12">
                <div class="card">
                    <div class="blog-box blog-shadow">
                        <img class="img-fluid bg-img-cover" src="@/assets/images/it-park.jpg" alt="">
                        <div class="blog-details">
                            <p>25 July 2018</p>
                            <h4>Main office {{ branchData[2].name  }}</h4>
                            <ul class="blog-social">
                                <li><i class="icofont icofont-user"></i>Mark Jecno</li>
                                <li><i class="icofont icofont-thumbs-up"></i>02 Hits</li>
                                <li><i class="icofont icofont-ui-chat"></i>598 Comments</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-6 set-col-12 box-col-12">
                <div class="card">
                    <div class="blog-box blog-list row">
                        <div class="col-sm-5"><img class="img-fluid sm-100-w" src="@/assets/images/blog/blog-2.jpg" alt="">
                        </div>
                        <div class="col-sm-7">
                            <div class="blog-details">
                                <div class="blog-date"><span>02</span> January 2018</div>
                                <h6>Perspiciatis unde omnis iste natus</h6>
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
                <div class="card">
                    <div class="blog-box blog-list row">
                        <div class="col-sm-5"><img class="img-fluid sm-100-w" src="@/assets/images/blog/blog-3.jpg" alt="">
                        </div>
                        <div class="col-sm-7">
                            <div class="blog-details">
                                <div class="blog-date"><span>03</span> January 2018</div>
                                <h6>Perspiciatis unde omnis iste natus</h6>
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
            </div>
            <div class="container">
                <div class="col-md-6 col-xxl-3 box-col-6">
                    <div class="card" v-for='item in branchData' :key="item">
                        <div class="blog-box blog-grid text-center">
                            <div class="blog-wrraper">
                                <a href="blog-single.html">
                                    <img class="img-fluid top-radius-blog" src="@/assets/images/it-park.jpg" alt="">
                                </a>
                            </div>
                            <div class="blog-details-main">
                                <ul class="blog-social">
                                    <li>9 April 2018</li>
                                    <li>by: Admin</li>
                                    <li> 0 Hits</li>
                                </ul>
                                <hr>
                                <h6 class="blog-bottom-details">Perspiciatis unde omnis iste natus error sit.Dummy text</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
</template>
<script>
import { mapState } from 'vuex';

export default {
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
    padding-top: 30px
}

.flex {
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 10px
}
</style>