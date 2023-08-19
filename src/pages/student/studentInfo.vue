<template >
    <div class="container-fluid p-10">
        <div class="user-profile">
            <div class="row">
                <div class="col-sm-12" v-if="this.$store.state.group.editHandler">
                    <div class="card hovercard text-center">
                        <div class="cardheader" style="background-size: cover;
                                background-position: 10%;
                                 height: 470px;"
                            :style="{ backgroundImage: 'url(' + require('@/assets/images/Students-Wallpaper.jpg') + ')' }">
                        </div>
                        <div class="user-image">
                            <div class="avatar">
                                <img id="profile-tour" alt="" src="../../assets/images/avtar/7.jpg"
                                    data-intro="This is Profile image">
                            </div>
                            <div class="icon-wrapper" @click="chenger">
                                <i id="update-profile-tour" class="icofont icofont-pencil-alt-5"
                                    data-intro="Change Profile image here" ></i>
                            </div>
                        </div>
                        <div class="info">
                            <div class="row" data-intro="This is the your details" id="info-bar-tour">
                                <div class="col-sm-6 col-lg-4 order-sm-1 order-xl-0">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="ttl-info text-start">
                                                <h6><i class="fa fa-user"></i> Teacher</h6>
                                                <span v-if="students && students.groups && students.groups[0]">
                                                    {{ students.groups[0].teacher }}
                                                </span>
                                                <span v-else>Loading...</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="ttl-info text-start ttl-sm-mb-0">
                                                <h6><i class="fa fa-book"></i> Completed lessons</h6>
                                                <span v-if="students && students.groups && students.groups[0]">
                                                    {{ students.groups[0].completed_lessons }}
                                                </span>
                                                <span v-else>Loading...</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-12 col-lg-4 order-sm-0 order-xl-1">
                                    <div class="user-designation">
                                        <div class="title">
                                            <a target="_blank" href="">{{ students.firstname }} {{ students.lastname }}</a>
                                        </div>
                                        <div class="desc mt-2">Teacher</div>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-lg-4 order-sm-2 order-xl-2">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="ttl-info text-start ttl-xs-mt">
                                                <h6><i class="fa fa-tasks"></i> Goup Number</h6>
                                                <span v-if="students && students.groups && students.groups[0]">
                                                    {{ students.groups[0].id }}
                                                </span>
                                                <span v-else>Loading...</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="ttl-info text-start ttl-sm-mb-0">
                                                <h6><i class="fa fa-users"></i> Group name</h6>
                                                <span v-if="students && students.groups && students.groups[0]">
                                                    {{ students.groups[0].course }}
                                                </span>
                                                <span v-else>Loading...</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <!-- theere can be created table -->




                        </div>
                    </div>
                </div>
                <div class="card p-20" v-else>
                    <h1>Edit Student</h1>
                    <form @submit.prevent="updateStudent">
                        <div class="mb-3">
                            <label for="firstname" class="form-label">First Name</label>
                            <input type="text" class="form-control" id="firstname" required v-model="firstname">
                        </div>
                        <div class="mb-3">
                            <label for="lastname" class="form-label">Last Name</label>
                            <input type="text" class="form-control" id="lastname" required v-model="lastname">
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" required v-model="email">
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password" required v-model="password">
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password Confirm</label>
                            <input type="password" class="form-control" id="password" required v-model="password_confirmation">
                        </div>
                        <div class="mb-3">
                            <label for="contact_no" class="form-label">Contact Number</label>
                            <input type="tel" class="form-control" id="contact_no" required v-model="contact_no">
                        </div>
                        <div class="mb-3">
                            <label for="status" class="form-label">Status</label> 
                            <select class="form-select" id="status" v-model="status">
                                <option :value="true">Active</option>
                                <option :value="false">Inactive</option>
                            </select>
                        </div>
                        <div class="d-flex" style="justify-content: space-between;">
                            <button type="submit" class="btn btn-primary" @click="editStudent">Update Student</button>
                            <button type="button" class="btn btn-danger" @click="chenger">Back to profile </button>
                        </div>
                    </form>
                </div>
                <button type="button" class="btn btn-danger" @click="deleteStudent">Delete User</button>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'


export default {
    data() {
        return {
            id: this.$route.params.id,
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            password_confirmation:'',
            contact_no: "",
            status: Boolean
        }
    },
    computed: {
        ...mapState('student', ['students'])
    },
    watch:{
        students:{
            immediate:true,
            handler(newStudents){
                if(newStudents){
                    this.firstname = newStudents.firstname,
                    this.lastname = newStudents.lastname,
                    this.email = newStudents.email,
                    this.password = newStudents.password
                    this.password_confirmation = newStudents.password_confirmation,
                    this.contact_no = newStudents.contact_no
                }
            }
        } 
    },
    mounted() {
        this.getById()
    },
    methods: {
        getById() {
            this.$store.dispatch('student/getStudentById', this.id)
        },
        editStudent() {
            let option = {
                firstname: this.firstname,
                lastname: this.lastname,
                email: this.email,
                password: this.password,
                password_confirmation:this.password_confirmation,
                contact_no: this.contact_no,
                status: this.status
            }
            this.$store.dispatch('student/editStudent', { id: this.id, option: option })
        },
        deleteStudent() {
            this.$store.dispatch('student/deleteStudent', this.id)
        },
        chenger() {
            this.$store.dispatch('group/editHandler')
        },
    }
}
</script>
<style scoped ></style>