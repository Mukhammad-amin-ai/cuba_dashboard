<template>
    <div class="wrapper ">
        <select class="form-select" aria-label="Default select example" v-model="selectedGroup">
            <option :value="item.id" v-for="item in myGroups" :key="item">
                {{ item.name }}
            </option>
        </select>
        <button type="button" class="btn btn-primary" @click="getStudents"> Choose</button>
    </div>
    <div class="container-fluid">
        <div class="box-mark">
            <div class="lessons">
                <div class="boxLesson">
                    <p>name</p>
                </div>
                <div class="boxLesson" v-for="lesson in myGroupLesson" :key="lesson">
                    <p>{{ lesson.name }}</p>
                </div>
            </div>
            <div class="marklist">
                <div class="list">
                    <div class="marks" v-for="student in myGroupStudetns" :key="student">
                        {{ student.firstname }}
                    </div>
                </div>
                <div class="marking">
                    <div v-for="lesson in myGroupLesson" :key="lesson.id">
                        <div v-for="student in myGroupStudetns" :key="student.id">
                            <div class="markBox" @click="toggleInput(lesson.id, student.id)">
                                <!-- <button type="button" class="btn btn-success"
                                    @click="">Success</button> -->
                                <input type="text"
                                    :style="{ display: isInputVisible(lesson.id, student.id) ? 'block' : 'none' }">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import { ref, computed } from 'vue';
export default {
    data() {
        return {
            selectedGroup: '',
            inputVisibility: {},

        }
    },
    computed: {
        ...mapState('teacher', ['myGroups']),
        ...mapState('teacher', ['myGroupStudetns']),
        ...mapState('teacher', ['myGroupLesson'])
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
        },
    },
    setup() {
        // Create a ref to track input visibility
        const inputVisibility = ref({});

        // Method to toggle the input visibility
        const toggleInput = (lessonId, studentId) => {
            const key = `${lessonId}-${studentId}`;
            inputVisibility.value[key] = !inputVisibility.value[key];
        };

        // Computed property to check if the input should be visible
        const isInputVisible = (lessonId, studentId) => {
            const key = `${lessonId}-${studentId}`;
            return inputVisibility.value[key];
        };

        return {
            toggleInput,
            isInputVisible,
        };
    }

}
</script>
<style scoped>
input[type='text'] {
    width: 70px;
}


.markBox {
    width: 100px !important;
    height: 70px !important;
    border: 1px solid #000;
    background-color: aliceblue;
    display: flex;
    justify-content: center;
    align-items: center;
}

.marking {
    width: auto;
    height: 70px;
    display: flex;
    /* flex-wrap: wrap; */
}

.marklist {
    width: auto;
    height: 95%;
    display: flex;
}

.list {
    width: 100px;
    height: 100%;
    display: block;
}

.boxLesson {
    width: 100px !important;
    height: 100%;
    background-color: yellow;
    flex: 0 0 auto;
    margin: 0;
    padding: 0;
    overflow: hidden;
    border: 1px solid #ccc;
}

.marks {
    width: 100px !important;
    height: 70px !important;
    background-color: red;
    border: 1px solid #000;
}

.lessons {
    width: 100%;
    height: 70px !important;
    /* background-color: red; */
    display: inline-flex;
}

.box-mark {
    width: 100%;
    height: 100%;
    background-color: aqua;
    overflow-x: scroll;
    white-space: nowrap;
}



.container-fluid {
    height: 100vh;
    display: flex;
    /* background-color: aqua; */
}


.wrapper {
    width: 95%;
    height: 100px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 2%;
    gap: 10px;
}

.wrapper select {
    width: 250px;
}
</style>