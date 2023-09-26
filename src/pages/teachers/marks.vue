<template>
    <div class="alert alert-success d-flex justify-content-between" role="alert" v-if="this.$store.state.teacher.alertMark">
        The student was successfully evaluated.
        <button type="button" class="btn-close" aria-label="Close" @click="hideAlert"></button>
    </div>
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
            {{ inputValue }}
            <div class="marklist">
                <div class="list">
                    <div class="marks" v-for="student in myGroupStudetns" :key="student">
                        {{ student.firstname }}
                    </div>
                </div>
                <div class="marking">
                    <div v-for="lesson in  myGroupLesson " :key="lesson.id">
                        <div v-for="student in  myGroupStudetns " :key="student.id">
                            <div class="markBox" @click="toggleInput(lesson.id, student.id)">
                                <input type="number" :style="{ display: getInputDisplay(lesson.id, student.id) }"
                                    @click.stop @keydown="hideInput(lesson.id, student.id,)" v-model="inputValue"
                                    @input="validateNumber">
                                <p :style="{ display: hidep(lesson.id, student.id) }">-</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script >
import { mapState } from 'vuex';
import { ref } from 'vue';
import store from '@/store';
export default {
    data() {
        return {
            inputValue: "",
            selectedGroup: '',
            inputVisibility: {},
            pvissible: {}
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
        hideAlert() {
            this.$store.dispatch("teacher/hideAlert")
        },
        validateNumber() {
            if (this.inputValue > 100) {
                this.inputValue = +String(this.inputValue).slice(0, -1)
            }
        },
        getInputDisplay(lessonId, studentId) {
            const key = `${lessonId}-${studentId}`;
            return this.inputVisibility[key] || 'none';
        },
        toggleInput(lessonId, studentId) {
            const key = `${lessonId}-${studentId}`;
            if (!this.inputVisibility[key]) {
                this.inputVisibility[key] = 'block';
            }
            this.hidep()
        },
        hideInput(lessonId, studentId) {
            // console.log(this.inputValue);
            if (event.keyCode === 13) {
                const key = `${lessonId}-${studentId}`;
                this.inputVisibility[key] = 'none';
                let option = {
                    value: this.inputValue,
                    student_id: studentId,
                    type: "lesson",
                    id: lessonId,
                    comment: "There is no bugs"
                }
                store.dispatch("teacher/setMark", option)
            }
            if (event.keyCode === 38 || event.keyCode === 40) {
                event.preventDefault();
            }

        },
        hidep(lessonId, studentId) {
            const key = `${lessonId}-${studentId}`
            // if (!this.inputVisibility[key]) {
            //     this.inputVisibility[key] = 'block';
            // }
            this.pvissible[key] || 'none'
        }
    },
}
</script>
<style scoped>
input[type='number'] {
    width: 70px;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
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
    /* background-color: yellow; */
    text-align: center;
    flex: 0 0 auto;
    margin: 0;
    padding: 0;
    overflow: hidden;
    border: 1px solid #ccc;
}

.marks {
    width: 100px !important;
    height: 70px !important;
    /* background-color: red; */
    text-align: center;
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
    /* background-color: aqua; */
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