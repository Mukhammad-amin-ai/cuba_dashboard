<template>
    <div class="container-fluid p-10">
        <div class="card p-20">
            <div class="container">
                <h1>Create Inactive-User</h1>
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
                            <option :value=true>Active</option>
                            <option :value=false>Inactive</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-primary" @click.prevent="createUser">Create User</button>
                </form>
            </div>
        </div>

    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {
            firstname: "",
            lastname: "",
            email: "",
            contact: "",
            role_id: "",
            status: "",
            branches: []
        }
    },
    computed: {
        ...mapState('role', ['roleArray']),
        ...mapState("branche", ['branchData'])
    },
    mounted() {
        this.getAllRole()
        this.getCurrentBranch()
    },
    methods: {
        getAllRole() {
            this.$store.dispatch('role/getRole')
        },
        getCurrentBranch() {
            this.$store.dispatch("branche/getBranches")
        },
        createUser() {
            this.getBranchAsArray()
            let option = {
                firstname: this.firstname,
                lastname: this.lastname,
                email: this.email,
                contact: this.contact,
                role_id: this.role_id,
                status: this.status,
                branches: this.branches
            }
            this.$store.dispatch('inactiveUser/createInactiveUser', option)
        },
        getBranchAsArray() {
            if (this.branchData) {
                this.branches = [];
                this.branches.push(...this.branchData.map(branch => branch.id));
            };
        }


    }
}
</script>
<style scoped></style>