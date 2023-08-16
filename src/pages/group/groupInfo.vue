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
                            <div class="icon-wrapper">
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
                        <!-- <button type="button" class="btn btn-danger">Danger</button> -->
                        <div class="form theme-form p-50">
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
                                <label class="col-form-label">Choose Course</label>
                                <select class="form-select" aria-label="Default select example" v-model="selectedCourse">
                                    <option :value="item.id" v-for="item in courseData" :key="item">{{ item.name }}</option>
                                </select>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <div class="mb-3">
                                        <label>Student Name </label>
                                        <!-- <input class="form-control" type="text" placeholder="Student Name *" v-model="search" @change="getStudents"> -->
                                        <select class="form-select" aria-label="Default select example" v-model="student">
                                            <option :value="item.id" v-for="item in students" :key="item">{{
                                                item.firstname }}{{ item.lastname }}{{ item.fullname }}
                                            </option>
                                        </select>
                                        <br>
                                        <input class="form-control" type="text" placeholder="Student Name *"
                                            @change="searchStudent" v-model="searchText">
                                    </div>
                                </div>
                                <button type="button" class="btn btn-success" @click="choosedStudent">Add student</button>
                            </div>
                        </div>
                        <button type="button" class="btn btn-danger" @click="chenger">Close Edit</button>
                        <button type="button" class="btn btn-success" @click="editGroup">Edit student</button>
                    </div>
                </div>
                <div class="col-sm-12" style="width: 100%;">
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
                                    <tr>
                                        <td>{{ schedule.group }}</td>
                                        <td>{{ schedule.session }}</td>
                                        <td>{{ schedule.room }}</td>
                                        <td>{{ schedule.weekday }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <TableOfStudents />
            </div>
        </div>
        <button type="button" class="btn btn-danger" @click="deleteGroup">Delete Group</button>
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
            searchText: '',
            student: "",
            selectedTeacher: "",
            selectedCourse: "",
            groupname: "",
            studentsList: []
        }
    },
    computed: {
        ...mapState('group', ['groupData']),
        ...mapState('schedule', ['schedule']),
        ...mapState('teacher', ['teachers']),
        ...mapState('course', ['courseData']),
        ...mapState('student', ['students'])
    },
    mounted() {
        this.getGroupById()
        this.getschedule()
    },
    methods: {
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
        choosedStudent() {
            this.studentsList.push(this.student)
            if (this.studentsList.length > 0) {
                this.student = '',
                this.searchText = ''
                
            }
        },
        editGroup() {
            const option = {
                name: this.groupname,
                teacher_id: this.selectedTeacher,
                assistant_teacher_id: this.selectedTeacher,
                course_id: this.selectedCourse,
                students: this.studentsList,
                status:true,
                completed_lessons:5
            }
            this.$store.dispatch('group/editGroup', { id: this.id, option: option })
        }
    }
}
</script>
<style scoped></style>