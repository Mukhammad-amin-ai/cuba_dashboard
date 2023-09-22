<template>
    <!-- <div>
        <div class="wrapper">
            <select class="form-select" aria-label="Default select example" v-model="selectedGroup">
                <option :value="item.id" v-for="item in myGroups" :key="item">
                    {{ item.name }}
                </option>
            </select>
            <button type="button" class="btn btn-primary" @click="getStudents"> Primary</button>
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
                        <tr v-for="student in myGroupStudetns" :key="student" >
                            <td >
                                {{ student.firstname }} {{ student.lastname }}
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


    </div> -->
    <div class="wrapper">
        <select class="form-select" aria-label="Default select example" v-model="selectedGroup">
            <option :value="item.id" v-for="item in myGroups" :key="item">
                {{ item.name }}
            </option>
        </select>
        <button type="button" class="btn btn-primary" @click="getStudents"> Primary</button>
    </div>
    <div class="container-fluid">

        <div class="listOf">
            <div class="head">
                Name
            </div>
            <div class="studet" v-for="student in myGroupStudetns" :key="student"> {{ student.firstname }} </div>
            <!-- <div class="studet"> muhammad</div>
            <div class="studet"> muhammad</div>
            <div class="studet"> muhammad</div>
            <div class="studet"> muhammad</div>
            <div class="studet"> muhammad</div>
            <div class="studet"> muhammad</div>
            <div class="studet"> muhammad</div>
            <div class="studet"> muhammad</div>
            <div class="studet"> muhammad</div>
            <div class="studet"> muhammad</div>
            <div class="studet"> muhammad</div>
            <div class="studet"> muhammad</div>
            <div class="studet"> muhammad</div>
            <div class="studet"> muhammad</div> -->
        </div>
        <div class="box-mark">
            <div class="lessons">
                <div class="boxLesson">
                    <p>lesson</p>
                </div>
                <div class="boxLesson">
                    <p>lesson</p>
                </div>
                <div class="boxLesson">
                    <p>lesson</p>
                </div>
                <div class="boxLesson">
                    <p>lesson</p>
                </div>
                <div class="boxLesson">
                    <p>lesson</p>
                </div>
                <div class="boxLesson">
                    <p>lesson</p>
                </div>
                <div class="boxLesson">
                    <p>lesson</p>
                </div>
                <div class="boxLesson">
                    <p>lesson</p>
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
        ...mapState('teacher', ['myGroups']),
        ...mapState('teacher', ['myGroupStudetns'])
    },
    mounted() {
        this.getGroups()
    },
    methods: {
        getStudents() {
            this.$store.dispatch("teacher/getMyGroupStudents", this.selectedGroup)
        },
        getGroups() {
            this.$store.dispatch("teacher/getMyGroups")
        }
    }
}
</script>
<style scoped>

.boxLesson{
    width: 100px;
    height: 100%;
    background-color: yellow;
    border: 3px solid #000;
}
.lessons{
    width: 100%;
    height: 70px;
    background-color: red;
    display: flex;
    gap: 3px;
    /* align-items: center; */
}
.box-mark{
    width: 75%;
    height: 100%;
    background-color: aqua;
    
    /* overflow-x: scroll; */
}


.studet {
    width: 100%;
    height: 70px;
    text-align: center;
    background-color: red;
    border: 3px solid aqua;

}

.head {
    width: 100%;
    height: 70px;
    /* background-color: green; */
    position: sticky;
    top: 0
}

.listOf {
    width: 25%;
    height: 100%;
    /* background-color: aqua; */
    overflow-y: scroll;
    position: relative;
}

.listOf::-webkit-scrollbar {
    width: 0.1em;
    background-color: transparent;
}

.container-fluid {
    height: 100vh;
    display: flex;
    /* background-color: aqua; */
}

.card {
    width: 30%;
    height: 100%;
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
    height: 70px;
    /* border: 1px solid; */


}

td,
th {
    width: 100%;
    /* height: 70px !important; */
    padding: 5px;
    border: 1px solid;
}

/* tr {
    border: 1px solid;
} */

.wrapper {
    width: 95%;
    height: 100px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 2%;
}

.wrapper select {
    width: 250px;
}
</style>