<template >
    <div class="container-fluid p-10">
        <spiner />
        <div class="user-profile">
            <div class="row">
                <div class="row product-page-main p-0" v-if="this.$store.state.group.editHandler">
                    <div class="col-xxl-4 col-md-6 box-col-12">
                        <div class="card">
                            <div class="card-body">
                                <img src="../../assets/images/avtar/16.jpg" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-5 box-col-6 order-xxl-0 order-1">
                        <div class="card">
                            <div class="card-body">
                                <div class="product-page-details">
                                    <h3>{{ students.firstname }} {{ students.lastname }}</h3>
                                </div>
                                <div class="product-price">
                                </div>
                                <ul class="product-color">
                                    <li class="bg-primary"></li>
                                    <li class="bg-secondary"></li>
                                    <li class="bg-success"></li>
                                    <li class="bg-warning"></li>
                                    <li class="bg-danger"></li>
                                </ul>
                                Id: {{ students.id }}
                                <hr />
                                <p>
                                    Email: {{ students.email }}
                                </p>
                                <hr />
                                Contact number: {{ students.contact_no }}
                                <hr />
                            </div>
                        </div>
                        <div class="d-flex  ">
                            <button type="button" class="btn btn-success" @click="chenger">Go To Edit</button>
                            <button type="button" class="btn btn-danger" @click="deleteStudent">Delete</button>
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
                            <input type="password" class="form-control" id="password" required
                                v-model="password_confirmation">
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
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import spiner from '@/components/ui/spiner.vue'

export default {
    components: {
        spiner
    },
    data() {
        return {
            id: this.$route.params.id,
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            password_confirmation: '',
            contact_no: "",
            status: Boolean
        }
    },
    computed: {
        ...mapState('student', ['students'])
    },
    watch: {
        students: {
            immediate: true,
            handler(newStudents) {
                if (newStudents) {
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
                password_confirmation: this.password_confirmation,
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