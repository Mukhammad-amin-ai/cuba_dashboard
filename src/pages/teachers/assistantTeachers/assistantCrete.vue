<template >
    <div class="container-fluid p-10">
        <div class="card p-20">
            <div class="container">
                <h1>Create Assistant Teacher</h1>
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
                        <label for="contact_no" class="form-label">Contact Number</label>
                        <input type="tel" class="form-control" id="contact_no" placeholder="Enter contact number" required
                            v-model="contact_no">
                    </div>
                    <div class="mb-3">
                        <label for="status" class="form-label">Status</label>
                        <select class="form-select" id="status" v-model="status">
                            <option :value=true>Active</option>
                            <option :value=false>Inactive</option>
                        </select>
                    </div>
                    <div class="container-fluid d-flex justify-content-between">
                        <button type="submit" class="btn btn-primary" @click.prevent="creatingTeacher">Create
                            Teacher</button>
                        <RouterLink to="/assistant-teacher">
                            <button type="submit" class="btn btn-danger">Go back </button>
                        </RouterLink>
                    </div>
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
            contact_no: "",
            branches: [],
            status:""
        }
    },
    computed: {
        ...mapState("branche", ['branchData'])
    },
    mounted() {
        this.getCurrentBranch()
    },
    methods: {
        getCurrentBranch() {
            this.$store.dispatch("branche/getBranches")
        },
        creatingTeacher() {
            this.getBranchAsArray()
            let option = {
                firstname: this.firstname,
                lastname: this.lastname,
                email: this.email,
                contact_no: this.contact_no,
                branches: this.branches,
                status:this.status
            }
            this.$store.dispatch('assistentTeacher/createAssistanTeacher', option)
        },
        getBranchAsArray() {
            if (this.branchData) {
                this.branches = [];
                this.branches.push(...this.branchData.map(branch => branch.id));
            };
        },
    }

}
</script>
<style ></style>