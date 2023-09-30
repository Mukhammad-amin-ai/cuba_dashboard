<template >
    <div>
        <Breadcrumbs title="Blog Detail" main="Pay For Course" />
        <div class="container-fluid ">
            <div class="card p-20 d-flex justify-content-between">
                <div class="mb-2">
                    <label class="col-form-label">Choose Course</label>
                    <select class="form-select" aria-label="Default select example" v-model="selectedCourse">
                        <option :value="item.id" v-for="item in courseData" :key="item">{{ item.name }}</option>
                    </select>
                </div>
                <div class="mb-2">
                    <label class="col-form-label">Search Student</label>
                    <input class="form-control" type="text" placeholder="Search Student" aria-label="default input example"
                        v-model="searchStudent" @keypress.enter="studentSearch">
                </div>
                <div class="input-group mb-3" v-if="this.$store.state.resultOfStudentRerch" v-for="student in students"
                    :key="student">
                    <input type="text" class="form-control" :placeholder="student.fullname" aria-describedby="basic-addon1"
                        disabled readonly>
                    <span class="input-group-text check" id="basic-addon1" @click="findCard(student.id)">
                        <i class="icofont icofont-ui-check"></i>
                    </span>
                </div>
            </div>
            <div class="mb">
                <div class="card p-20">
                    Card Result
                    <table class="mt-3 table table-light table-hover">
                        <thead>
                            <tr class="table-secondary">
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Pay</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>
                                    <button type="button" class="btn btn-success">Success</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    data() {
        return {
            selectedCourse: '',
            selectedStudent: "",
            card_id: "",
            searchStudent: ''
        }
    },
    computed: {
        ...mapState('course', ['courseData']),
        ...mapState('student', ['students'])
    },
    mounted() {
        this.getCourse()
    },
    methods: {
        getCourse() {
            this.$store.dispatch('course/getCourseData')
        },
        studentSearch() {
            let option = {
                "data": this.searchStudent
            }
            this.$store.dispatch("student/searchStudent", option)
        },
        findCard(studentId) {

        }
    }
}
</script>
<style scoped>
.check {
    width: 40px;
    cursor: pointer;
}
</style>