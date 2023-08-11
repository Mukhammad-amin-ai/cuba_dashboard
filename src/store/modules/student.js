import axios from "axios";


const state = {
    students: [],
}
const mutations = {
    setStudent(state, students) {
        state.students = students
    }
}
const actions = {

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}