<template>
    <div class="container-fluid p-10">
        <div class="row">
            <div class="card">
                <div class="card-body">
                    <div class="form theme-form">
                        <div class="row">
                            <div class="col">
                                <div class="mb-3">
                                    <label>Group Name</label>
                                    <input class="form-control" type="text" placeholder="Group Name *" v-model="groupname">
                                </div>
                            </div>
                        </div>
                        <div class="mb-2">
                            <label class="col-form-label">Choose Teacher</label>
                            <select class="form-select" aria-label="Default select example" v-model="selectedTeacher">
                                <option :value="item.id" v-for="item in teachers" :key="item">{{ item.firstname }} {{
                                    item.lastname }}</option>
                            </select>
                        </div>
                        <div class="mb-2">
                            <label class="col-form-label">Choose Assistant Teacher</label>
                            <select class="form-select" aria-label="Default select example" v-model="selectAssistant">
                                <option :value="item.id" v-for="item in assistants" :key="item">{{ item.firstname }} {{
                                    item.lastname }}</option>
                            </select>
                        </div>
                        <div class="mb-2">
                            <label class="col-form-label">Choose Course</label>
                            <select class="form-select" aria-label="Default select example" v-model="selectedCourse">
                                <option :value="item.id" v-for="item in courseData" :key="item">{{ item.name }}</option>
                            </select>
                        </div>
                        <div class="row">
                            <div class="col">
                                <!-- <addStudent/> -->
                                <!-- <div class="mb-3">
                                    <label>Student Name</label>
                                    <select class="form-select" aria-label="Default select example" v-model="student">
                                        <option :value="item.id" v-for="item in students" :key="item">{{ item.firstname }}{{
                                            item.lastname }}{{ item.fullname }}
                                        </option>
                                    </select>
                                    <div class="mb-2">
                                        <label class="col-form-label">Select2 multi select</label>
                                        <multiselect v-model="student" tag-placeholder="Add this as new tag"
                                            placeholder="Select Your Name" label="name" track-by="code" :options="students" 
                                            :multiple="true" :taggable="true">
                                        </multiselect>
                                        <VueMultiselect v-model="studentsList" :options="formattedStudents"  :multiple="true" :taggable="true"  track-by="id">

                                        </VueMultiselect>
                                    </div>
                                    <br>
                                    <input class="form-control" type="text" placeholder="Student Name *"
                                        @change="searchStudent" v-model="searchText">
                                </div> -->
                            </div>
                            <button type="button" class="btn btn-success" @click="choosedStudent">Add student</button>
                        </div>

                    </div>
                </div>
            </div>
            <div class="row" v-if="showHide">
                <div class="col d-flex justify-content-between">
                    <div class="col-sm-12 " style="width: 40vw;">
                        <div class="card">
                            <div class="card-header">
                                <input class="form-control" type="text" placeholder="Student Name *" @change="searchStudent"
                                    v-model="searchText">
                            </div>
                            <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr class="border-bottom-primary">
                                            <th scope="col">Student Name </th>
                                            <th>Add Student</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(item, index) in students" :key="item">
                                            <td>
                                                {{ item.firstname }} {{ item.lastname }}
                                                {{ item.fullname }}
                                            </td>
                                            <!-- <td class="ps-10">{{ item.lastname }}</td> -->
                                            <td scope="col"><button type="button" class="btn btn-success"
                                                    @click="addStudent(index)"><i class="fa fa-plus-square-o"></i></button>
                                            </td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 ps-3" style="width: 40vw;" v-if="showAddedList">
                        <div class="card">
                            <div class="card-header">
                                <h4>
                                    Added Students
                                </h4>
                            </div>
                            <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr class="border-bottom-primary">
                                            <th scope="col">Student Name</th>
                                            <th>Delete Student</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(item, index) in choosedStudents" :key="item">
                                            <td>
                                                {{ item.firstname }} {{ item.lastname }} {{ item.fullname }}
                                            </td>
                                            <td scope="col"><button type="button" class="btn btn-danger"
                                                    @click="deleteStudent(index)">
                                                    <i class="fa fa-times-circle-o"></i></button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button type="button" class="btn btn-success" @click="createGroup">Create Group</button>
    </div>
</template>
<script>
import VueMultiselect from 'vue-multiselect'
import { mapState } from "vuex"
export default {
    components: { VueMultiselect },
    data() {
        return {
            selectedTeacher: "",
            selectAssistant: "",
            selectedCourse: "",
            searchText: '',
            student: "",
            groupname: "",
            studentsList: [],
            choosedStudents: [],
            showHide: false,
            showAddedList: false
        }
    },
    computed: {
        ...mapState('teacher', ['teachers']),
        ...mapState('course', ['courseData']),
        ...mapState("student", ['students']),
        ...mapState('assistentTeacher', ['assistants'])
    },

    mounted() {
        this.getTeachers()
        this.getCourse()
        this.getStudents()
        this.getAssistants()
    },
    methods: {
        getTeachers() {
            this.$store.dispatch('teacher/getTeachers');
        },
        getCourse() {
            this.$store.dispatch('course/getCourseData');
        },
        getStudents() {
            this.$store.dispatch('student/getStudent')
        },
        searchStudent() {
            let option = {
                data: this.searchText
            }
            this.$store.dispatch('student/searchStudent', option)
        },
        createGroup() {
            let option = {
                name: this.groupname,
                teacher_id: this.selectedTeacher,
                assistant_teacher_id: this.selectAssistant,
                course_id: this.selectedCourse,
                students: this.studentsList
            }
            this.$store.dispatch('group/createGroup', option)
        },
        choosedStudent() {
            // this.studentsList.push(this.student)
            // if (this.studentsList.length > 0) {
            //     this.student = '',
            //         this.searchText = ''
            //     this.getStudents()
            // }
            // console.log(this.students);
            this.showHide = !this.showHide

        },
        getAssistants() {
            this.$store.dispatch('assistentTeacher/getAssistTeachers')
        },
        addStudent(index) {
            if (this.showAddedList === false) {
                this.showAddedList = true
            }
            this.choosedStudents.push(this.students[index])
            this.studentsList.push(this.students[index].id)
            // console.log(this.studentsList);
        },
        deleteStudent(index) {
            this.choosedStudents.splice(index, 1)
            this.studentsList.splice(index,1)
            // console.log(this.studentsList);

        }
    }
}
</script>
<style></style>