import axios from "axios";

const state = {
  schedule: [],
};
const mutations = {
  setSchedule(state, schedule) {
    state.schedule = schedule;
  },
};
const actions = {
  async getSchedule({ commit }) {
    commit("setLoading", true, { root: true });
    const token = localStorage.getItem("token");
    try {
      const responce = await axios.get("http://tulibayev.uz/api/schedule", {
        headers: { Authorization: "Bearer" + token },
      });
      // console.log(responce.data);
      commit("setSchedule", responce.data);
      commit("setLoading", false, { root: true });
    } catch (error) {
      console.error("there is problem ", error);
    }
  },
  async getScheduleById({ commit },option) {
    // commit("setLoading", true, { root: true });
    const token = localStorage.getItem("token");
    try {
      const responce = await axios.get(`http://tulibayev.uz/api/schedule/${option}`, {
        headers: { Authorization: "Bearer" + token },
      });
      // console.log(responce.data);
      commit("setSchedule", responce.data);
      // commit("setLoading", false, { root: true });
    } catch (error) {
      console.error("there is problem ", error);
    }
  },

};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
