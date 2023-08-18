<template>
    <div class="container-fluid p-10">
        <!-- <p>Selected Teacher: {{ selectedId ? selectedId : 'None selected' }}</p> -->
        <div class="row">
            <div class="card">
                <div class="card-body">
                    <!-- <button type="button" class="btn btn-danger">Danger</button> -->
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
                            <!-- selectedId for catching id of teachers  -->
                            <select class="form-select" aria-label="Default select example" v-model="selectedTeacher">
                                <option :value="item.id" v-for="item in teachers" :key="item">{{ item.firstname }} {{
                                    item.lastname }}</option>
                            </select>
                        </div>
                        <div class="mb-2">
                            <label class="col-form-label">Choose Assistant Teacher</label>
                            <!-- selectedId for catching id of teachers  -->
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
                                <div class="mb-3">
                                    <label>Student Name</label>
                                    <select class="form-select" aria-label="Default select example" v-model="student">
                                        <option :value="item.id" v-for="item in students" :key="item">{{ item.firstname }}{{
                                            item.lastname }}{{ item.fullname }}
                                        </option>
                                    </select>
                                    <!-- <div class="mb-2">
                                        <label class="col-form-label">Select2 multi select</label>
                                        <multiselect v-model="student" tag-placeholder="Add this as new tag"
                                            placeholder="Select Your Name" label="name" track-by="code" :options="students" 
                                            :multiple="true" :taggable="true">
                                        </multiselect>
                                        <VueMultiselect v-model="studentsList" :options="formattedStudents"  :multiple="true" :taggable="true"  track-by="id">

                                        </VueMultiselect>
                                    </div> -->
                                    <br>
                                    <input class="form-control" type="text" placeholder="Student Name *"
                                        @change="searchStudent" v-model="searchText">
                                </div>
                            </div>
                            <button type="button" class="btn btn-success" @click="choosedStudent">Add student</button>
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
            selectAssistant:"",
            selectedCourse: "",
            searchText: '',
            student: "",
            groupname: "",
            studentsList: [],
        }
    },
    computed: {
        ...mapState('teacher', ['teachers']),
        ...mapState('course', ['courseData']),
        ...mapState("student", ['students']),
        ...mapState('teacher',['assistants'])
    //     formattedStudents() {
    //   return this.students.map(student =>`${student.firstname} ${student.lastname}`)
    // },
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
            this.studentsList.push(this.student)
            if (this.studentsList.length > 0) {
                this.student = '',
                    this.searchText = ''
                this.getStudents()
            }
            console.log(this.students);
        },
        getAssistants(){
            this.$store.dispatch('teacher/getAssistants')
        }
    }
}
</script>
<style></style>