<template >
    <div class="container-fluid p-10">
        <spiner />
        <div class="user-profile">
            <div class="row">
                <div class="col-sm-12" v-if="this.$store.state.user.editHandler">
                    <div class="card hovercard text-center">
                        <div class="cardheader" style="background-size: cover;
                                background-position: 10%;
                                 height: 470px;"
                            :style="{ backgroundImage: 'url(' + require('@/assets/images/Students-Wallpaper.jpg') + ')' }">
                        </div>
                        <div class="user-image">
                            <div class="avatar">
                                <img id="profile-tour" alt="" src="../../../assets/images/avtar/7.jpg"
                                    data-intro="This is Profile image">
                            </div>
                            <div class="icon-wrapper" @click="changeToUpdate" v-if="this.$store.state.update">
                                <i id="update-profile-tour" class="icofont icofont-pencil-alt-5"
                                    data-intro="Change Profile image here"></i>
                            </div>
                        </div>
                        <div class="info">
                            <div class="row" data-intro="This is the your details" id="info-bar-tour">
                                <div class="col-sm-6 col-lg-4 order-sm-1 order-xl-0">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="ttl-info text-start">
                                                <h6><i class="fa fa-user"></i> Role</h6>
                                                <span v-if="inactiveUser && inactiveUser.role_id">
                                                    {{ inactiveUser.role_id }}
                                                </span>
                                                <span v-else>Loading...</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="ttl-info text-start ttl-sm-mb-0">
                                                <h6><i class="fa fa-book"></i> Contact number</h6>
                                                <span v-if="inactiveUser && inactiveUser.contact">
                                                    {{ inactiveUser.contact }}
                                                </span>
                                                <span v-else>Loading...</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-12 col-lg-4 order-sm-0 order-xl-1">
                                    <div class="user-designation">
                                        <div class="title">
                                            <a target="_blank" href="">{{ inactiveUser.firstname }} {{ inactiveUser.lastname
                                            }}</a>
                                        </div>
                                        <div class="desc mt-2">Innactive</div>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-lg-4 order-sm-2 order-xl-2">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="ttl-info text-start ttl-xs-mt">
                                                <h6><i class="fa fa-tasks"></i> Status</h6>
                                                <span v-if="inactiveUser && inactiveUser.status && inactiveUser.status">
                                                    {{ inactiveUser.status }}
                                                </span>
                                                <span v-else>Loading...</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="ttl-info text-start ttl-sm-mb-0">
                                                <h6><i class="fa fa-users"></i> Email</h6>
                                                <span v-if="inactiveUser && inactiveUser.email && inactiveUser.email">
                                                    {{ inactiveUser.email }}
                                                </span>
                                                <span v-else>Loading...</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr>
                        </div>
                    </div>
                </div>
                <div class="card p-20" v-else>
                    <h1>Edit User</h1>
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
                            <label for="contact" class="form-label">Contact Number</label>
                            <input type="tel" class="form-control" id="contact" required v-model="contact">
                        </div>
                        <!-- <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password" required v-model="password">
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password Confirm</label>
                            <input type="password" class="form-control" id="password" required
                                v-model="password_confirmation">
                        </div> -->
                        <div class="mb-3">
                            <label for="status" class="form-label">Role </label>
                            <select class="form-select" id="status" v-model="role_id">
                                <option :value="role.id" v-for="role in roleArray" :key="role">
                                    {{ role.name }}
                                </option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="status" class="form-label">Status</label>
                            <select class="form-select" id="status" v-model="status">
                                <option :value="true">Active</option>
                                <option :value="false">Inactive</option>
                            </select>
                        </div>
                        <div class="d-flex" style="justify-content: space-between;">
                            <button type="submit" class="btn btn-primary" @click="updateUser">Update User</button>
                            <button type="button" class="btn btn-danger" @click="changeToUpdate">Back to profile </button>
                        </div>
                    </form>
                </div>
                <button type="button" class="btn btn-danger" @click="deleteUser" v-if="this.$store.state.delete">Delete
                    User</button>
            </div>
        </div>
    </div>
</template>
<script>
import spiner from '@/components/ui/spiner.vue'
import { mapState } from 'vuex';
export default {
    components: {
        spiner
    },
    data() {
        return {
            firstname: "",
            lastname: "",
            contact: "",
            email: "",
            role_id: "",
            // branch_id: "",
            status: "",
            branches: []
        }
    },
    computed: {
        ...mapState("inactiveUser", ['inactiveUser']),
        ...mapState('role', ['roleArray']),
        ...mapState("branche", ['branchData'])
    },
    mounted() {
        this.getUserById()
        this.getAllRole()
        this.getCurrentBranch()
        this.roleCheck()
    },
    watch: {
        userData: {
            immediate: true,
            handler(newuserData) {
                if (newuserData) {
                    this.firstname = newuserData.firstname,
                        this.lastname = newuserData.lastname,
                        this.contact = newuserData.contact,
                        this.email = newuserData.email,
                        this.role_id = newuserData.role_id,
                        this.status = newuserData.status
                }
            }
        }
    },
    methods: {
        getUserById() {
            this.$store.dispatch("inactiveUser/getInnactiveUser", this.$route.params.id)
        },
        getCurrentBranch() {
            this.$store.dispatch("branche/getBranches")
        },
        getAllRole() {
            this.$store.dispatch('role/getRole')
        },
        deleteUser() {
            this.$store.dispatch("inactiveUser/deleteInactiveUser", this.$route.params.id)
        },
        updateUser() {
            this.getBranchAsArray()
            // console.log(this.branches);
            let option = {
                firstname: this.firstname,
                lastname: this.lastname,
                contact: this.contact,
                email: this.email,
                role_id: this.role_id,
                branches: this.branches,
                status: this.status
            }
            this.$store.dispatch('inactiveUser/changeInactiveUser', { id: this.$route.params.id, option: option })
        },
        changeToUpdate() {
            this.$store.dispatch('user/changeToEdit')
        },
        getBranchAsArray() {
            if (this.branchData) {
                this.branches = [];
                this.branches.push(...this.branchData.map(branch => branch.id));
            };
        },
        roleCheck() {
            this.$store.dispatch('permittionCheck', '8')
        }
    }
}
</script>
<style scoped></style>