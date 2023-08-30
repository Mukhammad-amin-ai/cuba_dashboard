<template>
    <div class="container-fluid p-20">
        <div class="user-profile">
            <div class="row">
                <div class="col-sm-12" v-if="this.$store.state.group.editHandler">
                    <div class="card hovercard text-center">
                        <div class="cardheader" style="background-size: cover;
                        background-position: 10%;
                         height: 470px;"
                            :style="{ backgroundImage: 'url(' + require('@/assets/images/Students-Wallpaper.jpg') + ')' }">
                        </div>
                        <div class="user-image">
                            <div class="icon-wrapper" v-if="this.$store.state.role.update">
                                <i id="update-profile-tour" class="icofont icofont-pencil-alt-5" @click="chenger"
                                    data-intro="Change Profile image here"></i>
                            </div>
                        </div>
                        <div class="info">
                            <div class="row" data-intro="This is the your details" id="info-bar-tour">
                                <div class="col-sm-6 col-lg-4 order-sm-1 order-xl-0">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="ttl-info text-start">
                                                <h6><i class="fa fa-user"></i> Assistent</h6>
                                                <span>{{ groupData.assistant_teacher }}</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="ttl-info text-start ttl-sm-mb-0">
                                                <h6><i class="fa fa-book"></i> Completed lessons</h6>
                                                <span>{{ groupData.completed_lessons }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-12 col-lg-4 order-sm-0 order-xl-1">
                                    <div class="user-designation">
                                        <div class="title">
                                            <a target="_blank" href="">{{ groupData.teacher }}</a>
                                        </div>
                                        <div class="desc mt-2">Teacher</div>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-lg-4 order-sm-2 order-xl-2">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="ttl-info text-start ttl-xs-mt">
                                                <h6><i class="fa fa-tasks"></i> Goup Number</h6>
                                                <span>{{ groupData.id }}</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="ttl-info text-start ttl-sm-mb-0">
                                                <h6><i class="fa fa-users"></i> Group name</h6>
                                                <span>{{ groupData.name }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr>
                        </div>
                    </div>
                </div>
                <div class="card" v-else>
                    <div class="card-body">
                        <div class="form theme-form p-50">
                            <div class="row">
                                <div class="col">
                                    <div class="mb-3">
                                        <label>Group Name</label>
                                        <input class="form-control" type="text" placeholder="Group Name *"
                                            v-model="groupname">
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
                                </div>
                                <button type="button" class="btn btn-success" @click="choosedStudent">Add student</button>
                            </div>
                        </div>
                        <div class="row" v-if="showHide">
                            <div class="col d-flex justify-content-between">
                                <div class="col-sm-12 " style="width: 35vw;">
                                    <div class="card">
                                        <div class="card-header">
                                            <input class="form-control" type="text" placeholder="Student Name *"
                                                @change="searchStudent" v-model="searchText">
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
                                                        <td scope="col"><button type="button" class="btn btn-success"
                                                                @click="addStudent(index)">
                                                                <i class="fa fa-plus-square-o"></i></button>
                                                        </td>
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-12 ps-3" style="width: 35vw;">
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
                        <button type="button" class="btn btn-danger" @click="chenger">Close Edit</button>
                        <button type="button" class="btn btn-success" @click="editGroup">Edit student</button>
                    </div>
                </div>
                <div class="col-sm-12" style="width: 100%;" v-if="scheTeble">
                    <div class="card">
                        <div class="card-header">
                            <h3>Schedul</h3>
                        </div>
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr class="border-bottom-primary">
                                        <th scope="col">Group</th>
                                        <th scope="col">Session</th>
                                        <th scope="col">Room</th>
                                        <th scope="col">Weekday</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!-- <tr v-for="item in scheduleData.data" :key="item" v-if="this.$store.state.schedule.checker">
                                        <td>{{ item.group.name }}</td>
                                        <td>{{ item.session.duration }}</td>
                                        <td>{{ item.room.name }}</td>
                                        <td>{{ item.weekday.name }}</td>
                                    </tr>
                                    <tr v-else>    
                                        <td>
                                            No data 
                                        </td>
                                    </tr> -->
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <TableOfStudents :scheTeble="scheTeble" />
            </div>
        </div>
        <button type="button" class="btn btn-danger" @click="deleteGroup" v-if="this.$store.state.role.delete">Delete
            Group</button>
    </div>
</template>
<script>
import { mapState } from "vuex"
import TableOfStudents from '@/pages/group/TableOfStudents.vue'
export default {
    components: {
        TableOfStudents
    },
    data() {
        return {
            id: this.$route.params.id,
            selectAssistant: "",
            searchText: '',
            student: "",
            selectedTeacher: "",
            selectedCourse: "",
            groupname: "",
            studentsList: [],
            choosedStudents: [],
            showHide: false,
            scheTeble: true,
            // checker:true
        }
    },
    computed: {
        ...mapState('group', ['groupData']),
        ...mapState('schedule', ['scheduleData']),
        ...mapState('teacher', ['teachers']),
        ...mapState('course', ['courseData']),
        ...mapState('student', ['students']),
        ...mapState('teacher', ['assistants']),
        ...mapState('group', ['groupStudents']),


    },
    watch: {
        groupData: {
            immediate: true,
            handler(newGroupData) {
                if (newGroupData) {
                    this.groupname = newGroupData.name
                }
            }
        },

    },
    mounted() {
        this.getGroupById()
        this.getschedule()
        this.getAssistants()
        this.getStudents()
        this.getGroupStudents()
        this.roleChecker()
    },
    methods: {
        concatination() {
            this.choosedStudents = JSON.parse(JSON.stringify(this.groupStudents));
            this.studentsList = this.choosedStudents.map(student => student.id)
            console.log(this.studentsList);
        },
        getGroupStudents() {
            this.$store.dispatch('group/getGroupStudents', this.id)
        },
        getAssistants() {
            this.$store.dispatch('teacher/getAssistants')
        },
        getGroupById() {
            this.$store.dispatch('group/getGroupDataWithId', this.id)
        },
        getschedule() {
            this.$store.dispatch('schedule/getScheduleById', this.id)
        },
        getStudents() {
            this.$store.dispatch('student/searchStudent', this.search)
        },
        chenger() {
            this.$store.dispatch('group/editHandler')
            this.scheTeble = !this.scheTeble
            this.concatination()
        },
        searchStudent() {
            let option = {
                data: this.searchText
            }
            this.$store.dispatch('student/searchStudent', option)
        },
        deleteGroup() {
            this.$store.dispatch('group/groupDelete', this.id)
        },
        getStudents() {
            this.$store.dispatch('student/getStudent')
        },
        choosedStudent() {
            this.showHide = !this.showHide

        },
        editGroup() {
            const option = {
                name: this.groupname,
                teacher_id: this.selectedTeacher,
                assistant_teacher_id: this.selectAssistant,
                course_id: this.selectedCourse,
                students: this.studentsList,
                status: true,
                completed_lessons: 5
            }
            this.$store.dispatch('group/editGroup', { id: this.id, option: option })
        },
        addStudent(index) {
            if (this.showAddedList === false) {
                this.showAddedList = true
            }
            this.choosedStudents.push(this.students[index])
            this.studentsList.push(this.students[index].id)
        },
        deleteStudent(index) {
            this.choosedStudents.splice(index, 1)
            this.studentsList.splice(index, 1)
        },
        roleChecker() {
            this.$store.dispatch('role/roleCheck', 'groups')
        }
    }
}
</script>
<style scoped></style>