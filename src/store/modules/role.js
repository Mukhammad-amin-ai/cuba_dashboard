import axios from "axios";
import Api from "./Base_Url";

let token = localStorage.getItem("token");

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
};
const actions = {
  async getRole({ commit }) {
    try {
      let responce = await axios.get(`${Api}/api/manage/role`, {
        headers: { Authorization: "Bearer" + token },
      });
      // console.log(responce.data.data);
      if (responce.data.data) {
        commit("setRolArray", responce.data.data);
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
  async updateMyProfile({ commit }, option) {
    try {
      let response = await axios.put(`${Api}/api/auth/update`, option, {
        headers: { Authorization: "Bearer " + token },
      });
      console.log(response.data);
    } catch (e) {
      console.error("error in updatingf profile", e);
    }
  },
  async getUserBranch({ commit }) {
    try {
      let response = await axios.get(`${Api}/api/auth/branches`, {
        headers: { Authorization: "Bearer " + token },
      });
      console.log(response.data);
    } catch (e) {
      console.error("error in geting user branches", e);
    }
  },
  async getRoleId({ commit }, id) {
    try {
      let response = await axios.get(`${Api}/api/manage/role/${id}`, {
        headers: { Authorization: "Bearer " + token },
      });
      console.log(response.data);
    } catch (e) {
      console.error("error in geting role by id", e);
    }
  },
  async updateRole({ commit }, id) {
    try {
      let response = await axios.put(`${Api}/api/manage/role/${id}`, {
        headers: { Authorization: "Bearer " + token },
      });
      console.log(response.data);
    } catch (e) {
      console.error("error in geting role by id", e);
    }
  },
  async deleteRole({ commit }, id) {
    try {
      let response = await axios.delete(`${Api}/api/manage/role/${id}`, {
        headers: { Authorization: "Bearer " + token },
      });
      console.log(response.data);
    } catch (e) {
      console.error("error in geting role by id", e);
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
