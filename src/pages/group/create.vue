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
                                    <input class="form-control" type="text" placeholder="Group Name *">
                                </div>
                            </div>
                        </div>
                        <div class="mb-2">
                            <label class="col-form-label">Choose Teacher</label>
                            <!-- selectedId for catching id of teachers  -->
                            <select class="form-select" aria-label="Default select example" v-model="selectedTeacher">
                                <option :value="item.id" v-for="item in teachers" :key="item">{{ item.firstname }} {{ item.lastname }}</option>
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
                                    <input class="form-control" type="text" placeholder="Student Name *">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button type="button" class="btn btn-success">Create Group</button>
    </div>
</template>
<script>
import { mapState } from "vuex"
export default {
    data() {
        return {
            selectedTeacher: "",
            selectedCourse: ""
        }
    },
    computed: {
        ...mapState('teacher', ['teachers']),
        ...mapState('course', ['courseData'])

    },
    mounted() {
        this.getTeachers()
        this.getCourse()
    },
    methods: {
        getTeachers() {
            this.$store.dispatch('teacher/getTeachers');

        },
        getCourse() {
            this.$store.dispatch('course/getCourseData');
        }
    }
}
</script>
<style></style>