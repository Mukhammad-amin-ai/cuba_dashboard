import axios from "axios";
import Api from "./Base_Url";

let token = localStorage.getItem("token");

let state = {
  roleArray: [],
  tableInfromation: [],
  myProfile: [],
  addRoleForm: false,
  choosed: true,
  permission:false,
  edit:false
};

const mutations = {
  setRolArray(state, array) {
    state.roleArray = array;
  },
  setMyProfile(state, myProfile) {
    state.myProfile = myProfile;
  },
  setForm(state, addRoleForm) {
    state.addRoleForm = addRoleForm;
  },
  setChosed(state, choosed) {
    state.choosed = choosed;
  },
  setTableInfo(state, tableInfromation) {
    state.tableInfromation = tableInfromation;
  },
  setPermissionSHow(state,permission){
    state.permission = permission
  },
  setshowEdit(state,showEdit){
    state.edit = showEdit
  }

};
const actions = {
  async getRole({ commit }) {
    commit("setLoading", true, { root: true });
    try {
      let responce = await axios.get(`${Api}/api/manage/role`, {
        headers: { Authorization: "Bearer" + token },
      });
      if (responce.data.data) {
        commit("setLoading", false, { root: true });
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
      if (response.data.name === "role_created") {
        commit("setForm", !state.addRoleForm);
        window.location.href = "/add-role";
        // commit("setChosed", !state.choosed);
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
      console.log(response.data.data);
      commit("setTableInfo", response.data.data);
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
    if (window.confirm("Are you shure you want to delete it ?")) {
      try {
        let response = await axios.delete(`${Api}/api/manage/role/${id}`, {
          headers: { Authorization: "Bearer " + token },
        });
        console.log(response.data);
        if ((response.data.name = "role_deleted")) {
          window.location.href = "/add-role";
        }
      } catch (e) {
        console.error("error in geting role by id", e);
      }
    }
  },
  changetoAdd({ commit }) {
    commit("setChosed", !state.choosed);
    commit("setForm", !state.addRoleForm);
  },
  showPermission({commit}){
    commit("setChosed", !state.choosed);
    // commit("setForm", !state.addRoleForm);
    commit('setPermissionSHow', !state.permission)
  },
  showEdit({commit}){
    commit("setChosed", !state.choosed);
    commit('setshowEdit',!state.edit)
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
