import axios from "axios";
import Api from "./Base_Url";

let token = localStorage.getItem("token");
// let roleObj = JSON.parse(localStorage.getItem("role"));
// console.log(roleObj);

// rmarvin@example.org student

const state = {
  roleArray: [],
  myProfile: [],
  branches: true,
  courses: true,
  schedule: true,
  group: true,
  teachers: true,
  students: true,
  addRoleForm: false,
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
  setMyProfile(state, myProfile) {
    state.myProfile = myProfile;
  },
  setBrancheShow(state, branche) {
    state.branches = branche;
  },
  setCourseShow(state, course) {
    state.courses = course;
  },
  setGroupShow(state, group) {
    state.group = group;
  },
  setTeacherShow(state, teacher) {
    state.teachers = teacher;
  },
  setStudentShow(state, student) {
    state.students = student;
  },
  setForm(state, addRoleForm) {
    state.addRoleForm = addRoleForm;
  },
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
      let responce = await axios.get(`${Api}/api/manage/role`, {
        headers: { Authorization: "Bearer" + token },
      });
      console.log(responce.data.data.data);
      if (responce.data.data) {
        commit("setRolArray", responce.data.data.data);
      }
    } catch (e) {
      console.error("error in getting role ", e);
    }
  },
  async createRole({ commit }, option) {
    try {
      let response = await axios.post(`${Api}/api/manage/role`, option, {
        headers: { Authorization: "Bearer " + token },
      });
      console.log(response.data);
      if (response.data.message === "new role created successfuly") {
        commit("setForm", false);
      }
    } catch (e) {
      console.error("error in creating Role", e);
    }
  },
  async getMyProfile({ commit }) {
    try {
      let responese = await axios.get(`${Api}/api/auth/me`, {
        headers: { Authorization: "Bearer " + token },
      });
      // console.log(responese.data.data);
      if (responese.data.data) {
        commit("setMyProfile", responese.data.data);
      }
    } catch (e) {
      console.error("problem with getting user profile ", e);
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
