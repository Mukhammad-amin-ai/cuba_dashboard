<template >
    <div class="container" v-if="this.$store.state.role.permission">
        <spiner/>
        <div class="col-sm-12">
            <div class="card">
                <div class="card-header">
                    <h3>Role name : {{ tableInfromation.name }}</h3>
                </div>
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr class="border-bottom-primary">
                                <th scope="col">Id</th>
                                <th scope="col">Permission</th>
                                <th scope="col">Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Role</td>
                                <td>{{ tableInfromation.name }}</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>User</td>
                                <td>{{ tableInfromation.users }}</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Teacher</td>
                                <td>{{ tableInfromation.teachers }}</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Courses</td>
                                <td>{{ tableInfromation.courses }}</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Lessons</td>
                                <td>{{ tableInfromation.lessons }}</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Groups</td>
                                <td>{{ tableInfromation.groups }}</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Students</td>
                                <td>{{ tableInfromation.students }}</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Parents</td>
                                <td>{{ tableInfromation.stparents }}</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>Session</td>
                                <td>{{ tableInfromation.sessions }}</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Branches </td>
                                <td>{{ tableInfromation.branches }}</td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>Rooms</td>
                                <td>{{ tableInfromation.rooms }}</td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>Schedule</td>
                                <td>{{ tableInfromation.schedules }}</td>
                            </tr>
                            <tr>
                                <td>13</td>
                                <td>Cashier</td>
                                <td>{{ tableInfromation.cashiers }}</td>
                            </tr>
                            <tr>
                                <td>14</td>
                                <td> Access for courses</td>
                                <td>{{ tableInfromation.access_for_courses }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        <button type="submit" class="btn btn-primary" @click.prevent="goToTable">Go to table </button>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import spiner from '@/components/ui/spiner.vue';
export default {
    components:{
        spiner
    },
    props: {
        propsedId: String
    },
    computed: {
        ...mapState('role', ['roleArray']),
        ...mapState('role', ['tableInfromation'])
    },
    mounted() {
        this.getAllRole()
    },
    methods: {
        changePage() {
            this.$store.dispatch('role/changetoAdd')
        },
        getAllRole() {
            this.$store.dispatch("role/getRole")
        },
        async getRoleByid() {
            await this.$store.dispatch("role/getRoleId", this.propsedId)
        },
        goToTable(){
            this.$store.dispatch('role/backtotable')
        }
    },
    watch: {
        propsedId: 'getRoleByid'
    }
}
</script>
<style scoped >
.container {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
}

.select {
    width: 200px;
}
</style>