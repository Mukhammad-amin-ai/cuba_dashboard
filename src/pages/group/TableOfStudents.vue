<template>
        <div class="col-sm-12" style="width: 100%;" v-if="scheTeble">
            <div class="card">
                <div class="card-header">
                    <h3>Table of Students</h3>
                </div>
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr class="border-bottom-primary">
                                <th scope="col">Firstname</th>
                                <th scope="col">Lastname</th>
                                <th scope="col">Email</th>
                                <th scope="col">Contact Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in groupStudents " :key="item">
                                <td>{{ item.firstname }}</td>
                                <td>{{ item.lastname }}</td>
                                <td>{{ item.email }}</td>
                                <td>{{ item.contact }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
</template>
<script>
import { mapState } from 'vuex';


export default {
    props:{
        scheTeble:Boolean
    },
    data(){
        return {
           id: this.$route.params.id
        }
    },
    computed:{
        ...mapState('group', ['groupStudents'])
    },
    mounted(){
        this.getGroupStudents()
        this.getTeachers()
        this.getCourse()
    },
    
    methods:{
        getGroupStudents(){
            this.$store.dispatch('group/getGroupStudents', this.id)
        },
        getTeachers() {
            this.$store.dispatch('teacher/getTeachers');

        },
        getCourse() {
            this.$store.dispatch('course/getCourseData');
        },
      
    }
}
</script>
<style ></style>