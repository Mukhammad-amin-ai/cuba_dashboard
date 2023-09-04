import axios from "axios";
import Api from "./Base_Url";
let token = localStorage.getItem("token");

const state = {
  groupData: [],
  groupStudents: [],
  editHandler: true,
};
const mutations = {
  setGroup(state, groupData) {
    state.groupData = groupData;
  },
  setGroupStudents(state, groupStudents) {
    state.groupStudents = groupStudents;
  },
  setEditHnadler(state, editHandler) {
    state.editHandler = editHandler;
  },
};
const actions = {
  editHandler({ commit }) {
    commit("setEditHnadler", !state.editHandler);
  },
  async getGroupData({ commit }) {
    try {
      let responce = await axios.get(`${Api}/api/group`, {
        headers: { Authorization: "Bearer" + token },
      });
      // console.log(responce.data);
      commit("setGroup", responce.data.data);
    } catch (error) {
      console.error("there is problem ", error);
      if (error.request.status === 401) {
        window.location.href = "/login";
      }
    }
  },
  async getGroupDataWithId({ commit }, option) {
    try {
      let responce = await axios.get(`${Api}/api/group/${option}`, {
        headers: { Authorization: "Bearer" + token },
      });
      // console.log(responce.data.data);
      commit("setGroup", responce.data.data);
    } catch (error) {
      console.error("there is problem ", error);
      if (error.request.status === 401) {
        window.location.href = "/login";
      }
    }
  },
  async getGroupStudents({ commit }, option) {
    try {
      let responce = await axios.get(`${Api}/api/group/${option}/students`, {
        headers: { Authorization: "Bearer" + token },
      });
      // console.log(responce.data.data);
      commit("setGroupStudents", responce.data.data);
    } catch (error) {
      console.error("problem with getting group students", error);
      if (error.request.status === 401) {
        window.location.href = "/login";
      }
    }
  },
  async createGroup({ commit }, option) {
    try {
      let responce = await axios.post(`${Api}/api/group`, option, {
        headers: { Authorization: "Bearer " + token },
      });
      console.log(responce.data);
      if (responce.data.message === "Group created successfully") {
        window.location.href = "/group";
      }
    } catch (e) {
      console.error("error in creating Group", e);
    }
  },
  async editGroup({ commit }, { id, option }) {
    try {
      let response = await axios.put(
        `${Api}/api/group/${id}`,
        option,
        {
          headers: { Authorization: "Bearer" + token },
        }
      );
      console.log(response.data);
      if (response.data.message === "Group updated successfully") {
        window.location.href = "/group";
      }
    } catch (e) {
      console.error("error in editing group", e);
    }
  },
  async groupDelete({ commit }, option) {
    if (window.confirm("Are you sure you want to delete")) {
      try {
        let responce = await axios.delete(
          `${Api}/api/group/${option}`,
          {
            headers: { Authorization: "Bearer" + token },
          }
        );
        console.log(responce.data);
        if (responce.data.message === "Group deleted successfully") {
          window.location.href = "/group";
        }
      } catch (error) {
        console.error("there is problem with group", error);
      }
    }
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
