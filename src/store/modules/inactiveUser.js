import axios from "axios";
import Api from "./Base_Url";
const token = localStorage.getItem("token");

const state = {
  inactiveUser: [],
};
const mutations = {
  setInnactive(state, inactive) {
    state.inactiveUser = inactive;
  },
};
const actions = {
  async getInnactiveUsers({ commit }) {
    commit("setLoading", true, { root: true });
    try {
      let response = await axios.get(`${Api}/api/manage/user/inactive`, {
        headers: { Authorization: "Bearer " + token },
      });
      // console.log(response.data);
      if (response.data.data) {
        commit("setLoading", false, { root: true });
        commit("setInnactive", response.data.data);
      }
    } catch (e) {
      console.error("error in getting innactive users data", e);
    }
  },
  async getInnactiveUser({ commit }, id) {
    commit("setLoading", true, { root: true });
    try {
      let response = await axios.get(`${Api}/api/manage/user/inactive/${id}`, {
        headers: { Authorization: "Bearer " + token },
      });
      // console.log(response.data);
      if (response.data.data) {
        commit("setInnactive", response.data.data);
        commit("setLoading", false, { root: true });
      }
    } catch (e) {
      console.error("error in geting inactive user data", e);
    }
  },
  async changeInactiveUser({ commit }, { id, option }) {
    try {
      let response = await axios.put(
        `${Api}/api/manage/user/inactive/${id}`,
        option,
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      console.log(response.data);
      if (response.data.name === "inactive_updated") {
        window.location.href = "/inactive-user";
      }
    } catch (e) {
      console.error("error in changing inactive user", e);
    }
  },
  async createInactiveUser({ commit }, option) {
    try {
      let responce = await axios.post(
        `${Api}/api/manage/user/inactive`,
        option,
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      // console.log(responce.data);
      if ((responce.data.name = "inactive_created")) {
        window.location.href = "/inactive-user";
      }
    } catch (e) {
      console.error("error in creating user", e);
    }
  },
  async deleteInactiveUser({ commit }, id) {
    if (window.confirm("are you sure to delete inactive user ?")) {
      try {
        let response = await axios.delete(
          `${Api}/api/manage/user/inactive/${id}`,
          {
            headers: { Authorization: "Bearer " + token },
          }
        );
        console.log(response.data);
        if (response.data.name === "user_deleted") {
          window.location.href = "/inactive-user";
        }
      } catch (e) {
        console.error("error in deleting inactive user", e);
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
