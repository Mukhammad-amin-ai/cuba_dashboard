<template>
    <div>
        <div class="wrapper">
            <select class="form-select" aria-label="Default select example" v-model="selectedGroup">
                <option :value="item.id" v-for="item in myGroups" :key="item">{{ item.name }}</option>
            </select>
        </div>

        <div class="container-fluid p-20">



            <div class="card">
                <table>
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                muhammad
                            </td>
                        </tr>
                        <tr>
                            <td>
                                muhammad
                            </td>
                        </tr>
                        <tr>
                            <td>
                                muhammad
                            </td>
                        </tr>
                        <tr>
                            <td>
                                muhammad
                            </td>
                        </tr>
                        <tr>
                            <td>
                                muhammad
                            </td>
                        </tr>
                        <tr>
                            <td>
                                muhammad
                            </td>
                        </tr>
                        <tr>
                            <td>
                                muhammad
                            </td>
                        </tr>
                        <tr>
                            <td>
                                muhammad
                            </td>
                        </tr>
                        <tr>
                            <td>
                                muhammad
                            </td>
                        </tr>
                        <tr>
                            <td>
                                muhammad
                            </td>
                        </tr>
                        <tr>
                            <td>
                                muhammad
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="box">
                <div class="lesson">

                </div>
                <div class="marki">

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
            selectedGroup: ''
        }
    },
    computed: {
        ...mapState('teacher', ['myGroups'])
    },
    mounted() {

    },
    methods: {
        getStudents() {
            this.$store.dispatch("teacher/getMyGroupStudents", this.$route.params.id)
        },
        getGroups() {
            this.$store.dispatch("teacher/getMyGroups")
        }
    }
}
</script>
<style scoped>
.container-fluid {
    height: 100vh;
    display: flex;
}

.card {
    width: 30%;
    height: 100%;
    /* overflow-y: scroll; */
    /* scrollbar-width: 0; */
    overflow: scroll;
}

.card::-webkit-scrollbar {
    width: 0.1em;
    background-color: transparent;
}

.box {
    width: 70%;
    height: 100%;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    overflow-x: scroll;
    border-radius: 10px;
}

.lesson {
    width: auto;
    height: 71px;
    /* background-color: aqua; */
}

.marki {
    width: 110%;
    height: 90%;
    /* background-color: green; */
}

table {
    width: 100%;
    height: 100%;
    border: 1px solid;

}

thead {
    width: 100%;
    height: 70px;
    /* display: flex; */
    /* justify-content: center; */
    text-align: center;
}

tbody {
    width: 100%;
    /* border: 1px solid; */


}

td,
th {
    width: 100%;
    height: 70px !important;
    border: 1px solid;
}

/* tr {
    border: 1px solid;
} */

.wrapper{
    width: 95%;
    height: 100px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 2%;
}
.wrapper select{
    width: 200px;
}
</style>