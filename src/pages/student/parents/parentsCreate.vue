<template >
    <div class="container-fluid p-10">
        <div class="card p-20">
            <div class="container">
                <h1>Create Parent</h1>
                <!-- <form> -->
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
                        <label for="status" class="form-label">Role</label>
                        <select class="form-select" id="status" v-model="status">
                            <option>Active</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="group_id" class="form-label">Student</label>
                        <input class="form-control" type="text" placeholder="Search Student"
                            aria-label="default input example" v-model="searchStudent" @keypress.enter="studentSearch">
                    </div>
                    <div class="input-group mb-3" v-if="this.$store.state.resultOfStudentRerch" v-for="student in students"
                        :key="student">
                        <input type="text" class="form-control" :placeholder="student.fullname"
                            aria-describedby="basic-addon1" disabled readonly>
                        <span class="input-group-text check" id="basic-addon1" @click="addStudentArr(student.id)">
                            <i class="icofont icofont-ui-check"></i>
                        </span>
                    </div>
                    <button type="submit" class="btn btn-primary" @click.prevent="createParent">Create Parent</button>
                <!-- </form> -->
            </div>
        </div>

    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {
            firstname: '',
            lastname: "",
            email: "",
            contact: "",
            role_id: "",
            studentsArr: [],
            searchStudent: ''
        }
    },
    computed: {
        ...mapState('role', ['roleArray']),
        ...mapState('student', ['students'])
    },
    mounted() {
        // this.getAllrole()
    },
    methods: {
        createParent() {
            let option = {
                firstname: this.firstname,
                lastname: this.lastname,
                email: this.email,
                contact: this.contact,
                role_id: this.role_id,
                students: this.studentsArr
            }
            this.$store.dispatch("parent/createParents", option)
        },
        getAllrole() {
            this.$store.dispatch("role/getRole")
        },
        studentSearch() {
            let option = {
                "data": this.searchStudent
            }
            this.$store.dispatch("student/searchStudent", option)
        },
        addStudentArr(studentId){
            this.studentsArr.push(studentId)
        }
    }

}
</script>
<style scoped>
.check{
    cursor: pointer;
}

</style>