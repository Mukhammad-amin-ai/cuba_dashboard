<template >
    <div class="container-fluid p-10">
        <div class="card p-20">
            <div class="container">
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
                        <select class="form-select" id="status" v-model="status">
                            <option :value=true>Active</option>
                            <option :value=false>Inactive</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="status" class="form-label">Is Assistant</label>
                        <select class="form-select" id="status" v-model="is_assistant">
                            <option :value=true>Yes</option>
                            <option :value=false>No</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-primary" @click.prevent="creatingTeacher">Create Teacher</button>
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
            status: Boolean,
            is_assistant: Boolean,
            stat: '/?filter=day'
        }
    },
    computed: {
        ...mapState("user", ['currentBranch'])
    },
    mounted() {
        this.getCurrentBranch()
    },
    methods: {
        creatingTeacher() {
            // console.log(this.currentBranch);
            const option = {
                firstname: this.firstname,
                lastname: this.lastname,
                email: this.email,
                contact: this.contact,
                status: this.status,
                is_assistant: this.is_assistant,
                branches: [this.currentBranch.id]
            }
            this.$store.dispatch('teacher/createTeacher', option)
        },
        getCurrentBranch() {
            this.$store.dispatch('user/getStatistics', this.stat)
        }
    }

}
</script>
<style ></style>