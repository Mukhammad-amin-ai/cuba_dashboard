<template >
    <Breadcrumbs title="Blog Single" main="Information about Branch" />
    <spiner/>
    <div class="container-fluid" v-if="this.$store.state.branche.handler">
        <div class="row">
            <div class="col-sm-12">
                <div class="blog-single">
                    <div class="blog-box blog-details">
                        <img class="img-fluid w-100 size" src="@/assets/images/it-park.jpg" alt="#">
                        <div class="blog-details">
                            <ul class="blog-social">
                                <li>10 August 2023</li>
                                <li><i class="icofont icofont-user"></i>Muhammadamin <span>Ahmadov </span></li>
                                <li><i class="icofont icofont-home"></i> Rooms:{{ room }}</li>
                            </ul>
                            <h4>
                                This branch located at the {{ branchData.name }} region
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
                                            <input class="form-control" type="text" v-model="name">
                                            <!-- v-model="name" -->
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <div class="mb-3">
                                            <label>Location</label>
                                            <input class="form-control" type="text" v-model="location">
                                            <!-- v-model="location" -->
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
    <spiner/>
    <div class="flex">
        <button type="button" class="btn btn-success" @click="changer">
            <h6 v-if="this.$store.state.branche.handler">Go To Edit</h6>
            <h6 v-else>Go From Edit</h6>
        </button>
        <button type="button" class="btn btn-danger" @click="deleteBranch">
            <h6>Delete</h6>
        </button>
    </div>
    <spiner/>
    <div class="col-sm-12" style="width: 100%;">
        <div class="card">
            <!-- <spiner/> -->
            <div class="card-header">
                <h3>{{ branchData.name }} Schedule of courses</h3>
            </div>
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr class="border-bottom-primary">
                            <th scope='col'>id</th>
                            <th scope="col">Group</th>
                            <th scope="col">Session</th>
                            <th scope="col">Room</th>
                            <th scope="col">Weekday</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for='item in schedule.data' :key="item">
                            <td>{{ item.id }}</td>
                            <td>Group: {{ item.group_id }}</td>
                            <td>{{ item.session }}</td>
                            <td>{{ item.room }}</td>
                            <td>{{ item.weekday }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <branchCousesVue />
    </div>
</template>
<script >
import calendar from "@/advance/calendar.vue"
import branchCousesVue from "@/pages/branche/branchCouses.vue"
import spiner from "@/components/ui/spiner.vue"
import { mapState } from "vuex"
export default {
    components: {
        spiner,
        calendar,
        branchCousesVue
    },
    data() {
        return {
            id: this.$route.params.id,
            name:"",
            location: "",
            // branchData: {
            //     name: '',
            //     location: ''
            // }
        }
    },
    computed: {
        ...mapState('branche', ['branchData']),
        ...mapState('branche', ['room']),
        ...mapState('schedule', ['schedule'])
    },
    mounted() {
        this.getbranch(),
            this.getRoom(),
            this.getschedule()
    },
    watch:{
        branchData:{
            immediate:true,
            handler(newBranchData){
                if(newBranchData){
                    this.name = newBranchData.name,
                    this.location = newBranchData.location
                }
            }
        }
    },
    methods: {
        getschedule() {
            this.$store.dispatch('schedule/getSchedule')
        },
        deleteBranch() {
            this.$store.dispatch('branche/delete', this.id)
        },
        getbranch() {
            this.$store.dispatch('branche/getBranche', this.id)
        },
        getRoom() {
            this.$store.dispatch('branche/getRoom', this.id)
        },
        changer() {
            this.$store.dispatch('branche/handler')
        },
        editBranch() {
            let option = {
                name: this.name,
                location: this.location
                // name: this.branchData.name,
                // location: this.branchData.location
            }
            this.$store.dispatch('branche/editBranch', { id: this.id, option: option })
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

.size {
    width: 80% !important;

}

.blog-box {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.custom {
    width: 50%;
    height: auto;
    /* background-color: aqua; */
}

h6 {
    margin-top: 10px;
}

.list {
    width: 100%;
    height: auto;
}

.text-box {
    width: 50%;
    height: auto;
    /* background-color: red; */
}</style>
 