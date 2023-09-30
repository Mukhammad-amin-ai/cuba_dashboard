<template >
    <Breadcrumbs title="Teachers Page" main="Teachers Page" />
    <spiner />
    <div class="container-fluid p-20">
        <div>
            <div class="row product-page-main p-0" v-if="isChanger">
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
                                <h3>{{ teachers.firstname }} {{ teachers.lastname }}</h3>
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
                            Id: {{ teachers.id }}
                            <hr />
                            <p>
                                Email: {{ teachers.email }}
                            </p>
                            <hr />
                            Contact number: {{ teachers.contact }}
                            <hr />
                        </div>
                    </div>
                    <div class="d-flex  justify-content-between">
                        <button type="button" class="btn btn-success" @click="isChange" v-if="this.$store.state.update">Go
                            To Edit</button>
                        <button type="button" class="btn btn-danger" @click="deleteTeacher"
                            v-if="this.$store.state.delete">Delete</button>
                    </div>
                </div>
            </div>
            <div class="container" v-else>
                <h1>Create Teacher</h1>
                <form>
                    <div class="mb-3">
                        <label for="firstname" class="form-label">First Name</label>
                        <input type="text" class="form-control" id="firstname" placeholder="Enter first name" required
                            v-model="firstname">
                    </div>
                    <div class="mb-3">
                        <label for="lastname" class="form-label">Last Name</label>
                        <input type="text" class="form-control" id="lastname" placeholder="Enter last name" required
                            v-model="lastname">
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" placeholder="Enter email" required
                            v-model="email">
                    </div>
                    <div class="mb-3">
                        <label for="contact" class="form-label">Contact Number</label>
                        <input type="tel" class="form-control" id="contact" placeholder="Enter contact number" required
                            v-model="contact">
                    </div>
                    <div class="mb-3">
                        <label for="status" class="form-label">Status</label>
                        <select class="form-select" id="status" v-model="is_assistant">
                            <option :value=true>Active</option>
                            <option :value=false>Inactive</option>
                        </select>
                    </div>
                    <div class="containerBtns-fluid d-flex ">
                        <button type="submit" class="btn btn-primary" @click.prevent="editTeacher">Editing Teacher</button>
                        <button type="button" class="btn btn-danger" @click="isChange">Go From Edit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import spiner from '@/components/ui/spiner.vue'
export default {
    components: {
        spiner
    },
    data() {
        return {
            id: this.$route.params.id,
            isChanger: true,
            firstname: "",
            lastname: "",
            email: "",
            contact: "",
            is_assistant: Boolean
        }
    },
    watch: {
        teachers: {
            immediate: true,
            handler(newTeachers) {
                if (newTeachers) {
                    this.firstname = newTeachers.firstname;
                    this.lastname = newTeachers.lastname;
                    this.email = newTeachers.email;
                    this.contact = newTeachers.contact;
                    this.is_assistant = newTeachers.is_assistant;
                }
            }
        },
    },
    computed: {
        ...mapState('teacher', ['teachers'])
    },
    mounted() {
        this.getTeacherByid()
        this.roleCheck()
    },
    methods: {
        getTeacherByid() {
            this.$store.dispatch('teacher/getTeachersById', this.id,)
        },
        isChange() {
            this.isChanger = !this.isChanger
        },
        editTeacher() {
            const option = {
                firstname: this.firstname,
                lastname: this.lastname,
                email: this.email,
                contact: this.contact,
                is_assistant: this.is_assistant
            }
            this.$store.dispatch('teacher/editTeacher', { id: this.id, option: option })
        },
        deleteTeacher() {
            this.$store.dispatch("teacher/deleteTeacher", this.id)
        },
        roleCheck() {
            this.$store.dispatch('permittionCheck', '9')
        }
    }




}
</script>
<style scoped></style>