<template >
    <Breadcrumbs title="Blog Single" main="Information about Branch" />
    <div class="container-fluid" v-if="this.$store.state.branche.handler" >
        <div class="row">
            <div class="col-sm-12">
                <div class="blog-single">
                    <div class="blog-box blog-details"><img class="img-fluid w-100" src="@/assets/images/it-park.jpg"
                            alt="blog-main">
                        <div class="blog-details">
                            <ul class="blog-social">
                                <li>25 July 2018</li>
                                <li><i class="icofont icofont-user"></i>Muhammadamin <span>Ahmadov </span></li>
                                <li><i class="icofont icofont-thumbs-up"></i>02<span>Hits</span></li>
                                <li><i class="icofont icofont-ui-chat"></i>598 Comments</li>
                            </ul>
                            <h4>
                                This branch located at the {{ branchData.name }}
                            </h4>
                            <div class="single-blog-content-top">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia beatae dolorem id illo!
                                    Hic rem omnis id illo eveniet natus reprehenderit maiores aperiam pariatur! Sint soluta
                                    nemo ducimus rem dignissimos!.</p>
                                <p>It is a long established fact that a reader will be distracted by the readable content of
                                    a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                                    more-or-less normal distribution of letters, as opposed to using 'Content here, content
                                    here', making it look like readable English. Many desktop publishing packages and web
                                    page editors now use Lorem Ipsum as their default model text, and a search for 'lorem
                                    ipsum' will uncover many web sites still in their infancy. Various versions have evolved
                                    over the years, sometimes by accident, sometimes on purpose injected humour and the
                                    like</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="p-20" v-else>
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="form theme-form">
                                <div class="row">
                                    <div class="col">
                                        <div class="mb-3">
                                            <label>Branche Name</label>
                                            <input class="form-control" type="text" :placeholder="branchData.name" v-model="name">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <div class="mb-3">
                                            <label>Location</label>
                                            <input class="form-control" type="text" :placeholder="branchData.location " v-model="location">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="button" class="btn btn-success" @click="editBranch">edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="flex">

        <button type="button" class="btn btn-success" @click="changer">Edit</button>

        <button type="button" class="btn btn-danger" @click="deleteBranch">Delete</button>
    </div>
</template>
<script >
import calendar from "@/pages/branche/calendar.vue"
import { mapState } from "vuex"
export default {
    components: {
        calendar
    },
    data() {
        return {
            id: this.$route.params.id,
            name: "",
            location: "",
        }
    },
    computed: {
        ...mapState('branche', ['branchData']),
    },
    mounted() {
        this.getbranch()
    },
    methods: {
        deleteBranch() {
            // console.log(this.id);
            this.$store.dispatch('branche/delete', this.id)
        },
        getbranch() {
            this.$store.dispatch('branche/getBranche', this.id)
        },
        changer(){
            this.$store.dispatch('branche/handler')
        },
        editBranch(){
            let option = {
                name: this.name,
                location: this.location
            }
            this.$store.dispatch('branche/editBranch',{ id: this.id, option: option })
        }
    }

}
</script>
<style scoped>
.flex {
    width: 100%;
    height: auto;
    padding: 50px;
    display: flex;
    justify-content: space-between;
}

.custom {
    width: 50%;
    height: auto;
    /* background-color: aqua; */
}

.list {
    width: 100%;
    height: auto;
}

.text-box {
    width: 50%;
    height: auto;
    /* background-color: red; */
}
</style>
 