<template >
    <div class="container-fluid p-10">
        <div class="card p-20">
            <div class="container">
                <h1>Create Student</h1>
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
                    <div class="mb-3">
                        <label for="group_id" class="form-label">Group ID</label>
                        <input type="number" class="form-control" id="group_id" placeholder="Enter group ID" required
                            v-model="group_id">
                    </div>
                    <div class="contaner">
                        <div class="d-flex" style="gap: 10px;">
                            <h4>Parents</h4>
                            <button type="button" class="btn btn-success" @click="addparent">Add</button>
                        </div>
                        <div class="mb-3">
                            <label for="parent_firstname" class="form-label">Parent First Name</label>
                            <input type="text" class="form-control" id="parent_firstname"
                                placeholder="Enter parent's first name" required v-model="parents[0].firstname">
                        </div>
                        <div class="mb-3">
                            <label for="parent_lastname" class="form-label">Parent Last Name</label>
                            <input type="text" class="form-control" id="parent_lastname"
                                placeholder="Enter parent's last name" required v-model="parents[0].lastname">
                        </div>
                        <div class="mb-3">
                            <label for="parent_email" class="form-label">Parent Email</label>
                            <input type="email" class="form-control" id="parent_email" placeholder="Enter parent's email"
                                required v-model="parents[0].email">
                        </div>
                        <div class="mb-3">
                            <label for="parent_contact_no" class="form-label">Parent Contact Number</label>
                            <input type="tel" class="form-control" id="parent_contact_no"
                                placeholder="Enter parent's contact number" required v-model="parents[0].contact_no">
                        </div>
                    </div>
                    <div class="contaner" v-if="setShow">
                        <h4>Parent 2</h4>
                        <div class="mb-3">
                            <label for="parent_firstname" class="form-label">Parent First Name</label>
                            <input type="text" class="form-control" id="parent_firstname"
                                placeholder="Enter parent's first name" required>
                        </div>
                        <div class="mb-3">
                            <label for="parent_lastname" class="form-label">Parent Last Name</label>
                            <input type="text" class="form-control" id="parent_lastname"
                                placeholder="Enter parent's last name" required>
                        </div>
                        <div class="mb-3">
                            <label for="parent_email" class="form-label">Parent Email</label>
                            <input type="email" class="form-control" id="parent_email" placeholder="Enter parent's email"
                                required>
                        </div>
                        <div class="mb-3">
                            <label for="parent_contact_no" class="form-label">Parent Contact Number</label>
                            <input type="tel" class="form-control" id="parent_contact_no"
                                placeholder="Enter parent's contact number" required>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary" @click.prevent="createStudent">Create Student</button>
                </form>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            setShow: false,
            firstname: "",
            lastname: "",
            email: "",
            contact_no: "",
            status: Boolean,
            group_id: null,
            parents: [
                {
                    firstname: "",
                    lastname: "",
                    email: "",
                    contact_no: ""
                },
            ],
            exist_parents: [

            ]
        }
    },
    methods: {
        createStudent() {
            let option = {
                firstname: this.firstname,
                lastname: this.lastname,
                email: this.email,
                contact_no: this.contact_no,
                status: this.status,
                group_id: this.group_id,
                parents: [
                    {
                        firstname: this.parents[0].firstname,
                        lastname: this.parents[0].lastname,
                        email: this.parents[0].email,
                        contact_no: this.parents[0].contact_no
                    },
                ],
                exist_parents: this.exist_parents
            }
            this.$store.dispatch('student/createStudent', option)
        },
        addparent() {
            this.setShow = true
            let a = {
                firstname: "",
                lastname: "",
                email: "",
                contact_no: ""
            }
            this.parents.push(a)
        }
    }



}
</script>
<style scoped></style>