<template >
    <div class="container-fluid p-10">
        <spiner />
        <div class="user-profile">
            <div class="row">
                <div class="row product-page-main p-0" v-if="this.$store.state.group.editHandler">
                    <div class="col-xxl-4 col-md-6 box-col-12">
                        <div class="card">
                            <div class="card-body">
                                <img src="../../../assets/images/avtar/16.jpg" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-5 box-col-6 order-xxl-0 order-1">
                        <div class="card">
                            <div class="card-body">
                                <div class="product-page-details">
                                    <h3>{{ parents.firstname }} {{ parents.lastname }}</h3>
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
                                Id: {{ parents.id }}
                                <hr />
                                <p>
                                    Email: {{ parents.email }}
                                </p>
                                <hr />
                                Contact number: {{ parents.contact }}
                                <hr />
                            </div>
                        </div>
                        <div class="d-flex justify-content-between ">
                            <button type="button" class="btn btn-success" @click="chenger"
                                v-if="this.$store.state.update">Go To Edit</button>
                            <button type="button" class="btn btn-danger" @click="deleteStudent"
                                v-if="this.$store.state.delete">Delete</button>
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
                            <label for="contact" class="form-label">Contact Number</label>
                            <input type="tel" class="form-control" id="contact" required v-model="contact">
                        </div>
                        <div class="mb-3">
                            <label for="status" class="form-label">Role</label>
                            <select class="form-select" id="status" v-model="users">
                                <option :value=0>Nothing</option>
                            </select>
                        </div>
                        <div class="mb-2">
                            <label class="col-form-label">Search Student</label>
                            <input class="form-control" type="text" placeholder="Search Student"
                                aria-label="default input example" v-model="searchStudent" @keypress.enter="studentSearch">
                        </div>
                        <div class="input-group mb-3" v-if="this.$store.state.resultOfStudentRerch"
                            v-for="student in students" :key="student">
                            <input type="text" class="form-control" :placeholder="student.fullname"
                                aria-describedby="basic-addon1" disabled readonly>
                            <span class="input-group-text check" id="basic-addon1" @click="findCard(student.id)">
                                <i class="icofont icofont-ui-check"></i>
                            </span>
                        </div>

                        <div class="d-flex justify-content-between">
                            <button type="submit" class="btn btn-primary" @click="editStudent"
                                v-if="this.$store.state.update">Update Parent</button>
                            <button type="button" class="btn btn-danger" @click="chenger"
                                v-if="this.$store.state.update">Back to profile </button>
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
            contact: "",
            role_id: '',
            students: []
        }
    },
    computed: {
        ...mapState('parent', ['parents'])
    },
    watch: {
        parents: {
            immediate: true,
            handler(newparents) {
                if (newparents) {
                    this.firstname = newparents.firstname,
                        this.lastname = newparents.lastname,
                        this.email = newparents.email,
                        this.password = newparents.password,
                        this.password_confirmation = newparents.password_confirmation,
                        this.contact = newparents.contact,
                        this.role_id = newparents.role_id,
                        this.students = newparents.students
                }
            }
        }
    },
    mounted() {
        this.getById()
        this.roleCheck()
    },
    methods: {
        getById() {
            this.$store.dispatch('parent/getParentById', this.id)
        },
        editStudent() {
            let option = {
                firstname: this.firstname,
                lastname: this.lastname,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation,
                contact: this.contact,
                role_id: this.role_id,
                students: this.students
            }
            this.$store.dispatch('parent/updateParent', { id: this.id, option: option })
        },
        deleteStudent() {
            this.$store.dispatch('parent/deleteParent', this.id)
        },
        chenger() {
            this.$store.dispatch('group/editHandler')
        },
        roleCheck() {
            this.$store.dispatch('permittionCheck', '15')
        }
    }
}
</script>
<style scoped ></style>