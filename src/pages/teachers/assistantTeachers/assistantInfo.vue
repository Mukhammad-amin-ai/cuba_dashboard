<template >
    <Breadcrumbs title="Teachers Page" main="Teachers Page" />
    <spiner />
    <div class="container-fluid">
        <div>
            <div class="row product-page-main p-0" v-if="isChanger">
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
                                <h3>{{ assistants.firstname }} {{ assistants.lastname }}</h3>
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
                            Id: {{ assistants.id }}
                            <hr />
                            <p>
                                Email: {{ assistants.email }}
                            </p>
                            <hr />
                            Contact number: {{ assistants.contact }}
                            <hr />
                        </div>
                    </div>
                    <div class="d-flex  justify-content-between ">
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
                        <label for="status" class="form-label">Assistant ?</label>
                        <select class="form-select" id="status" v-model="is_assistant">
                            <option :value=true>Active</option>
                            <option :value=false>Inactive</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="status" class="form-label">Status ?</label>
                        <select class="form-select" id="status" v-model="status">
                            <option :value=true>Active</option>
                            <option :value=false>Inactive</option>
                        </select>
                    </div>
                    <div class="containerBtns-fluid d-flex justify-content-between">
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
import spiner from '@/components/ui/spiner.vue';
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
            status: Boolean,
            is_assistant: Boolean,
            branches: ""
        }
    },
    computed: {
        ...mapState('assistentTeacher', ['assistants']),
        ...mapState('user', ['currentBranch'])
    },
    watch: {
        assistants: {
            immediate: true,
            handler(newassistants) {
                if (newassistants) {
                    this.firstname = newassistants.firstname;
                    this.lastname = newassistants.lastname;
                    this.email = newassistants.email;
                    this.status = newassistants.status
                    this.contact = newassistants.contact;
                }
            }
        },
    },
    mounted() {
        this.getTeacherByid()
        // this.getCurrentBranch()
        this.roleCheck()
    },
    methods: {
        // getCurrentBranch() {
        //     this.$store.dispatch("branche/getBranches")
        // },
        getTeacherByid() {
            this.$store.dispatch('assistentTeacher/getAssistTeachersById', this.id,)
        },
        isChange() {
            this.isChanger = !this.isChanger
        },
        editTeacher() {
            // this.getBranchAsArray()
            let option = {
                firstname: this.firstname,
                lastname: this.lastname,
                email: this.email,
                contact: this.contact,
                status: this.status,
                is_assistant: this.is_assistant,
                branches: [this.currentBranch.id]
            }
            this.$store.dispatch('assistentTeacher/editTeacher', { id: this.id, option: option })
        },
        // getBranchAsArray() {
        //     if (this.branchData) {
        //         this.branches = [];
        //         this.branches.push(...this.branchData.map(branch => branch.id));
        //     };
        // },
        deleteTeacher() {
            this.$store.dispatch("assistentTeacher/deleteTeacher", this.id)
        },
        roleCheck() {
            this.$store.dispatch('permittionCheck', '10')
        },
        getCurrentBranch() {
            this.$store.dispatch("user/getStatistics", '/?filter=day')
        }
    }




}
</script>
<style scoped></style>