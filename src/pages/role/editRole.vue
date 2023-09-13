<template>
    <form style="width: 50%;" v-if="this.$store.state.role.edit">
        <div class="mb-3">
            <label for="firstname" class="form-label">Name of role</label>
            <input type="text" class="form-control" id="firstname" required v-model="name">
        </div>
        <div class="mb-3">
            <label for="status" class="form-label">Role</label>
            <select class="form-select" id="status" v-model="roles">
                <option :value=0>Nothing</option>
                <option :value=1>Read</option>
                <option :value=2>Read+Update</option>
                <option :value=3>Read+Update+Create</option>
                <option :value=4>Read+Update+Create+Delete</option>
            </select>
        </div>
        <div class="mb-3">
            <label for="status" class="form-label">Lessons</label>
            <select class="form-select" id="status" v-model="lessons">
                <option :value=0>Nothing</option>
                <option :value=1>Read</option>
                <option :value=2>Read+Update</option>
                <option :value=3>Read+Update+Create</option>
                <option :value=4>Read+Update+Create+Delete</option>
            </select>
        </div>
        <div class="mb-3">
            <label for="status" class="form-label">Groups</label>
            <select class="form-select" id="status" v-model="groups">
                <option :value=0>Nothing</option>
                <option :value=1>Read</option>
                <option :value=2>Read+Update</option>
                <option :value=3>Read+Update+Create</option>
                <option :value=4>Read+Update+Create+Delete</option>
            </select>
        </div>
        <div class="mb-3">
            <label for="status" class="form-label">Branches</label>
            <select class="form-select" id="status" v-model="branches">
                <option :value=0>Nothing</option>
                <option :value=1>Read</option>
                <option :value=2>Read+Update</option>
                <option :value=3>Read+Update+Create</option>
                <option :value=4>Read+Update+Create+Delete</option>
            </select>
        </div>
        <div class="mb-3">
            <label for="status" class="form-label">Courses</label>
            <select class="form-select" id="status" v-model="courses">
                <option :value=0>Nothing</option>
                <option :value=1>Read</option>
                <option :value=2>Read+Update</option>
                <option :value=3>Read+Update+Create</option>
                <option :value=4>Read+Update+Create+Delete</option>
            </select>
        </div>
        <div class="mb-3">
            <label for="status" class="form-label">Teachers</label>
            <select class="form-select" id="status" v-model="teachers">
                <option :value=0>Nothing</option>
                <option :value=1>Read</option>
                <option :value=2>Read+Update</option>
                <option :value=3>Read+Update+Create</option>
                <option :value=4>Read+Update+Create+Delete</option>
            </select>
        </div>
        <div class="mb-3">
            <label for="status" class="form-label">Students</label>
            <select class="form-select" id="status" v-model="students">
                <option :value=0>Nothing</option>
                <option :value=1>Read</option>
                <option :value=2>Read+Update</option>
                <option :value=3>Read+Update+Create</option>
                <option :value=4>Read+Update+Create+Delete</option>
            </select>
        </div>
        <div class="mb-3">
            <label for="status" class="form-label">Parents</label>
            <select class="form-select" id="status" v-model="stparents">
                <option :value=0>Nothing</option>
                <option :value=1>Read</option>
                <option :value=2>Read+Update</option>
                <option :value=3>Read+Update+Create</option>
                <option :value=4>Read+Update+Create+Delete</option>
            </select>
        </div>
        <div class="mb-3">
            <label for="status" class="form-label">Sessions</label>
            <select class="form-select" id="status" v-model="sessions">
                <option :value=0>Nothing</option>
                <option :value=1>Read</option>
                <option :value=2>Read+Update</option>
                <option :value=3>Read+Update+Create</option>
                <option :value=4>Read+Update+Create+Delete</option>
            </select>
        </div>
        <div class="mb-3">
            <label for="status" class="form-label">Rooms</label>
            <select class="form-select" id="status" v-model="rooms">
                <option :value=0>Nothing</option>
                <option :value=1>Read</option>
                <option :value=2>Read+Update</option>
                <option :value=3>Read+Update+Create</option>
                <option :value=4>Read+Update+Create+Delete</option>
            </select>
        </div>
        <div class="mb-3">
            <label for="status" class="form-label">Schedules</label>
            <select class="form-select" id="status" v-model="schedules">
                <option :value=0>Nothing</option>
                <option :value=1>Read</option>
                <option :value=2>Read+Update</option>
                <option :value=3>Read+Update+Create</option>
                <option :value=4>Read+Update+Create+Delete</option>
            </select>
        </div>
        <div class="mb-3">
            <label for="status" class="form-label">Cashiers</label>
            <select class="form-select" id="status" v-model="cashiers">
                <option :value=0>Nothing</option>
                <option :value=1>Read</option>
                <option :value=2>Read+Update</option>
                <option :value=3>Read+Update+Create</option>
                <option :value=4>Read+Update+Create+Delete</option>
            </select>
        </div>
        <div class="mb-3">
            <label for="status" class="form-label">Access for courses</label>
            <select class="form-select" id="status" v-model="access_for_courses">
                <option :value=0>Nothing</option>
                <option :value=1>Read</option>
                <option :value=2>Read+Update</option>
                <option :value=3>Read+Update+Create</option>
                <option :value=4>Read+Update+Create+Delete</option>
            </select>
        </div>
        <div class="mb-3">
            <label for="status" class="form-label">Student search</label>
            <select class="form-select" id="status" v-model="student_search">
                <option :value=0>False</option>
                <option :value=1>True</option>
            </select>
        </div>
        <div class="mb-3">
            <label for="status" class="form-label">Payment addcard</label>
            <select class="form-select" id="status" v-model="payment_addcard">
                <option :value=0>False</option>
                <option :value=1>True</option>
            </select>
        </div>
        <div class="mb-3">
            <label for="status" class="form-label">Payment Cashier</label>
            <select class="form-select" id="status" v-model="payment_cashier">
                <option :value=0>False</option>
                <option :value=1>True</option>
            </select>
        </div>
        <div class="mb-3">
            <label for="status" class="form-label">Payment pay</label>
            <select class="form-select" id="status" v-model="payment_pay">
                <option :value=0>False</option>
                <option :value=1>True</option>
            </select>
        </div>
        <div class="mb-3">
            <label for="status" class="form-label">Users</label>
            <select class="form-select" id="status" v-model="users">
                <option :value=0>Nothing</option>
                <option :value=1>Read</option>
                <option :value=2>Read+Update</option>
                <option :value=3>Read+Update+Create</option>
                <option :value=4>Read+Update+Create+Delete</option>
            </select>
        </div>
        <button type="submit" class="btn btn-primary" @click.prevent="editeRole">Edit Role</button>
        <button type="submit" class="btn btn-primary" @click.prevent="goToTable">Go to table </button>
    </form>
</template>
<script>
import { mapState } from 'vuex';
export default {
    props: {
        propsedId: String
    },
    data() {
        return {
            id:'',
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
    computed: {
        ...mapState('role', ['tableInfromation'])
    },
    watch: {
        tableInfromation: {
            immediate: true,
            handler(newtableInfromation) {
                if (newtableInfromation) {
                    this.name = newtableInfromation.name
                    this.id = newtableInfromation.id

                }
            }
        }
    },
    methods: {
        editeRole() {
            let option = {
                name: this.name,
                roles: this.roles,
                users: this.users,
                teachers: this.teachers,
                courses: this.courses,
                lessons: this.lessons,
                groups: this.groups,
                students: this.students,
                stparents: this.stparents,
                sessions: this.sessions,
                branches: this.branches,
                rooms: this.rooms,
                schedules: this.schedules,
                cashiers: this.cashiers,
                access_for_courses: this.access_for_courses,
                student_search: this.student_search,
                payment_addcard: this.payment_addcard,
                payment_cashier: this.payment_cashier,
                payment_pay: this.payment_pay
            }
            this.$store.dispatch('role/updateRole',{id:this.id,option:option})
        },
        goToTable(){
            this.$store.dispatch("role/goBackFromedit")
        }
    }
}

</script>
<style scoped ></style>