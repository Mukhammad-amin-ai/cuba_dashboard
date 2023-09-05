<template >
    <div>
        <Breadcrumbs title="Blog Detail" main="Add New Role" />
        <div class="container-fluid p-20">
            <form style="width: 50%;">
                <div class="mb-3">
                    <label for="firstname" class="form-label">Name of role</label>
                    <input type="text" class="form-control" id="firstname" required v-model="name">
                </div>
                <div class="mb-3">
                    <label for="status" class="form-label">Branches</label>
                    <select class="form-select" id="status" v-model="branches">
                        <option :value=1>Read</option>
                        <option :value=2>Read+Update</option>
                        <option :value=3>Read+Update+Create</option>
                        <option :value=4>Read+Update+Create+Delete</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="status" class="form-label">Courses</label>
                    <select class="form-select" id="status" v-model="courses">
                        <option :value=1>Read</option>
                        <option :value=2>Read+Update</option>
                        <option :value=3>Read+Update+Create</option>
                        <option :value=4>Read+Update+Create+Delete</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="status" class="form-label">Teachers</label>
                    <select class="form-select" id="status" v-model="teachers">
                        <option :value=1>Read</option>
                        <option :value=2>Read+Update</option>
                        <option :value=3>Read+Update+Create</option>
                        <option :value=4>Read+Update+Create+Delete</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="status" class="form-label">Students</label>
                    <select class="form-select" id="status" v-model="students">
                        <option :value=1>Read</option>
                        <option :value=2>Read+Update</option>
                        <option :value=3>Read+Update+Create</option>
                        <option :value=4>Read+Update+Create+Delete</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="status" class="form-label">Parents</label>
                    <select class="form-select" id="status" v-model="parent">
                        <option :value=1>Read</option>
                        <option :value=2>Read+Update</option>
                        <option :value=3>Read+Update+Create</option>
                        <option :value=4>Read+Update+Create+Delete</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="status" class="form-label">Sessions</label>
                    <select class="form-select" id="status" v-model="sessions">
                        <option :value=1>Read</option>
                        <option :value=2>Read+Update</option>
                        <option :value=3>Read+Update+Create</option>
                        <option :value=4>Read+Update+Create+Delete</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="status" class="form-label">Rooms</label>
                    <select class="form-select" id="status" v-model="rooms">
                        <option :value=1>Read</option>
                        <option :value=2>Read+Update</option>
                        <option :value=3>Read+Update+Create</option>
                        <option :value=4>Read+Update+Create+Delete</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="status" class="form-label">Schedules</label>
                    <select class="form-select" id="status" v-model="schedules">
                        <option :value=1>Read</option>
                        <option :value=2>Read+Update</option>
                        <option :value=3>Read+Update+Create</option>
                        <option :value=4>Read+Update+Create+Delete</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="status" class="form-label">Cashiers</label>
                    <select class="form-select" id="status" v-model="cashiers">
                        <option :value=1>Read</option>
                        <option :value=2>Read+Update</option>
                        <option :value=3>Read+Update+Create</option>
                        <option :value=4>Read+Update+Create+Delete</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="status" class="form-label">Access for courses</label>
                    <select class="form-select" id="status" v-model="access_for_courses">
                        <option :value=1>Read</option>
                        <option :value=2>Read+Update</option>
                        <option :value=3>Read+Update+Create</option>
                        <option :value=4>Read+Update+Create+Delete</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="status" class="form-label">Student search</label>
                    <select class="form-select" id="status" v-model="student_search">
                        <option :value=1>Read</option>
                        <option :value=2>Read+Update</option>
                        <option :value=3>Read+Update+Create</option>
                        <option :value=4>Read+Update+Create+Delete</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="status" class="form-label">Payment addcard</label>
                    <select class="form-select" id="status" v-model="payment_addcard">
                        <option :value=1>Read</option>
                        <option :value=2>Read+Update</option>
                        <option :value=3>Read+Update+Create</option>
                        <option :value=4>Read+Update+Create+Delete</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="status" class="form-label">Payment Cashier</label>
                    <select class="form-select" id="status" v-model="payment_cashier">
                        <option :value=1>Read</option>
                        <option :value=2>Read+Update</option>
                        <option :value=3>Read+Update+Create</option>
                        <option :value=4>Read+Update+Create+Delete</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="status" class="form-label">Payment pay</label>
                    <select class="form-select" id="status" v-model="payment_pay">
                        <option :value=1>Read</option>
                        <option :value=2>Read+Update</option>
                        <option :value=3>Read+Update+Create</option>
                        <option :value=4>Read+Update+Create+Delete</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="status" class="form-label">Users</label>
                    <select class="form-select" id="status" v-model="users">
                        <option :value=1>Read</option>
                        <option :value=2>Read+Update</option>
                        <option :value=3>Read+Update+Create</option>
                        <option :value=4>Read+Update+Create+Delete</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary" @click.prevent="createRole">Create Student</button>
            </form>

        </div>
    </div>
</template>
<script>
// import student from '@/store/modules/student';

export default {
    data() {
        return {
            name: "",
            roles: "",
            users: "",
            teachers: "",
            courses: "",
            lessons: "",
            groups: "",
            students: "",
            stparents: "",
            sessions: "",
            branches: "",
            rooms: "",
            schedules: "",
            cashiers: "",
            access_for_courses: "",
            student_search: "",
            payment_addcard: "",
            payment_cashier: "",
            payment_pay: ""
        }
    },
    methods: {
        createRole() {
            let option = {
                name: "",
                roles: 1,
                users: 1,
                teachers: 1,
                courses: 1,
                lessons: 1,
                groups: 1,
                students: 1,
                stparents: 1,
                sessions: 1,
                branches: 1,
                rooms: 1,
                schedules: 1,
                cashiers: 1,
                access_for_courses: 1,
                student_search: 1,
                payment_addcard: 1,
                payment_cashier: 1,
                payment_pay: 1
            }
            this.$store.dispatch('role/createRole')
        }
    }
}
</script>
<style scoped></style>