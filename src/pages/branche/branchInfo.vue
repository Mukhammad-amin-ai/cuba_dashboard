<template >
    <Breadcrumbs title="Blog Single" main="Information about Branch" />
    <spiner />
    <div class="container-fluid" v-if="this.$store.state.branche.handler">
        <div class="row">
            <div class="col-sm-12">
                <div class="blog-single">
                    <div class="blog-box blog-details">
                        <img class="img-fluid w-100 size" src="@/assets/images/it-park.jpg" alt="#">
                        <div class="blog-details p-20">
                            <ul class="blog-social">
                                <li>10 August 2023</li>
                                <li><i class="icofont icofont-user"></i>Muhammadamin <span>Ahmadov </span></li>
                                <li><i class="icofont icofont-home"></i> </li>
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
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <div class="mb-3">
                                            <label>Location</label>
                                            <input class="form-control" type="text" v-model="location">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="button" class="btn btn-success" @click="editBranch"
                                v-if="this.$store.state.update">edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="flex ">
        <button type="button" class="btn btn-success" @click="changer" v-if="this.$store.state.update">
            <h6 v-if="this.$store.state.branche.handler">Go To Edit</h6>
            <h6 v-else>Go From Edit</h6>
        </button>
        <button type="button" class="btn btn-danger" @click="deleteBranch" v-if="this.$store.state.delete">
            <h6>Delete</h6>
        </button>
    </div>
    <div class="container-fluid d-flex" v-if="this.$store.state.schedule.handler">
        <calendar />
        <div class="col-sm-12" style="width: 50%; ">
            <div class="card">
                <smallSpinner />
                <choose />
                <div class="card-header">
                    <h3>Table of Schedule</h3>
                    <p>{{ this.$store.state.schedule.day }}</p>
                </div>
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr class="border-bottom-primary">
                                <th scope="col">Group</th>
                                <th scope="col">Session</th>
                                <th scope="col">Room</th>
                                <th scope="col">Weekday</th>
                                <!-- <th scope="col">Edit</th>
                                <th scope="col">Delete</th> -->
                            </tr>
                        </thead>
                        <!--  -->
                        <tbody>
                            <tr v-for='item in scheduleData' :key="item" v-if="this.$store.state.schedule.checker">
                                <td>{{ item.group.name }}</td>
                                <td>{{ item.session.start }}{{ item.session.end }}</td>
                                <td>{{ item.room.name }}</td>
                                <td>{{ item.weekday.name }}</td>
                                <!-- <td>
                                    <button type="button" class="btn btn-primary" @click="change">
                                        <i class="icofont icofont-pencil-alt-5"></i>
                                    </button>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-danger" @click="deleteSchedule(item.id)">
                                        <i class="icofont icofont-ui-delete"></i>
                                    </button>
                                </td> -->
                            </tr>
                            <!-- -->
                            <tr v-else>
                                <td>No data</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <!-- <button type="button" class="btn btn-success" @click="change">Create
                Schedule</button> -->
        </div>
    </div>
    <div class="container-fluid  height" v-else>
        <createSchedulVue />
        <br>
        <button type="button" class="btn btn-danger" @click="change">Go To Schedule</button>
    </div>
    <branchCousesVue />
</template>
<script >
import calendar from "@/pages/advance/calendar.vue"
import branchCousesVue from "@/pages/branche/branchCouses.vue"
import spiner from "@/components/ui/spiner.vue"
import smallSpinner from "@/components/ui/smallSpinner.vue"
import choose from "@/components/ui/choose.vue"
import createSchedulVue from "../schedul/createSchedul.vue"
import { mapState } from "vuex"

export default {
    components: {
        spiner,
        calendar,
        branchCousesVue,
        smallSpinner,
        choose,
        createSchedulVue
    },
    data() {
        return {
            id: this.$route.params.id,
            name: "",
            location: "",
            checker: true
        }
    },
    computed: {
        ...mapState('branche', ['branchData']),
        // ...mapState('branche', ['total']),
        ...mapState('schedule', ['scheduleData'])
    },
    mounted() {
        this.getbranch()
        this.roleCheck()
    },
    watch: {
        branchData: {
            immediate: true,
            handler(newBranchData) {
                if (newBranchData) {
                    this.name = newBranchData.name,
                        this.location = newBranchData.location
                }
            }
        }
    },
    methods: {
        deleteBranch() {
            this.$store.dispatch('branche/delete', this.id)
        },
        getbranch() {
            this.$store.dispatch('branche/getBranche', this.id)
        },
        changer() {
            this.$store.dispatch('branche/handler')
        },
        editBranch() {
            let option = {
                name: this.name,
                location: this.location
            }
            this.$store.dispatch('branche/editBranch', { id: this.id, option: option })
        },
        // change() {
        //     // console.log(this.scheduleData[0].group.name);
        //     // this.$store.dispatch('schedule/change')
        // },
        deleteSchedule(id) {
            this.$store.dispatch('schedule/deleteSchedul', id)
        },
        roleCheck() {
            this.$store.dispatch('permittionCheck', '17')
        }
    }

}
</script>
<style scoped>
.height {
    height: auto;
    padding: 30px;
}

.flex {
    width: 100%;
    height: auto;
    padding: 25px;
    display: flex;
    justify-content: space-between;
}

.size {
    width: 97% !important;

}

.blog-box {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.custom {
    width: 50%;
    height: auto;
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
}

.icofont {
    font-size: 10px;
}
</style>
 