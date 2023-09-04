import axios from "axios";
import Api from "./Base_Url";

let token = localStorage.getItem("token");
let roleObj = JSON.parse(localStorage.getItem("role"));
// console.log(roleObj);

// rmarvin@example.org student

const state = {
  roleArray: [],
  branches:true,
  courses:true,
  schedule:true,
  group:true,
  teachers:true,
  students:true
  // access: true,
  // read: false,
  // update: false,
  // create: false,
  // deletee: false,
};

const mutations = {
  setRolArray(state, array) {
    state.roleArray = array;
  },
  setBrancheShow(state,branche){
    state.branches = branche
  },
  setCourseShow(state,course){
    state.courses = course
  },
  setGroupShow(state,group){
    state.group = group
  },
  setTeacherShow(state,teacher){
    state.teachers = teacher
  },
  setStudentShow(state,student){
    state.students = student
  }


  // setRoleChacker(state, access) {
  //   state.access = access;
  // },
  // setRead(state, read) {
  //   state.read = read;
  // },
  // setUpdate(state, update) {
  //   state.update = update;
  // },
  // setCreate(state, create) {
  //   state.create = create;
  // },
  // setDelete(state, deletee) {
  //   state.deletee = deletee;
  // },
};
const actions = {
  async getRole({ commit }) {
    try {
      let responce = await axios.get(`${Api}/api/role`, {
        headers: { Authorization: "Bearer" + token },
      });
      console.log(responce.data);
      if (responce.data) {
        commit("setRolArray", responce.data);
      }
    } catch (e) {
      console.error("error in getting role ", e);
    }
  },
  // roleCheck({ commit }, option) {
  //   // console.log(roleObj[option]);
  //   if (roleObj[option] === "1") {
  //     commit("setRead", true);
  //   } else if (roleObj[option] === "2") {
  //     commit("setRead", true);
  //     commit("setUpdate", true);
  //   } else if (roleObj[option] === "3") {
  //     commit("setRead", true);
  //     commit("setUpdate", true);
  //     commit("setCreate", true);
  //   } else if (roleObj[option] === "4") {
  //     commit("setRead", true);
  //     commit("setUpdate", true);
  //     commit("setCreate", true);
  //     commit("setDelete", true);
  //   } else {
  //     commit("setRoleChacker", false);
  //   }
  // },
  


};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
