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
                        v-model="searchStudent">
                </div>
                <div class="input-group mb-3"  v-if="this.$store.state.resultOfStudentRerch">
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username"
                        aria-describedby="basic-addon1" disabled readonly>
                    <span class="input-group-text check" id="basic-addon1" @click="sayHello">
                        <i class="icofont icofont-ui-check"></i>
                        <!-- <button type="button" class="btn btn-success">Success</button> -->
                    </span>
                </div>
            </div>
            <div class="mb">
                <div class="card p-20">
                    Card Result
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
        ...mapState('course', ['courseData'])
    },
    mounted() {
        this.getCourse()
    },
    methods: {
        getCourse() {
            this.$store.dispatch('course/getCourseData')
        },
        sayHello() {
            console.log('hello world');
        }
    }
}
</script>
<style scoped>
.check {
    cursor: pointer;
}
</style>