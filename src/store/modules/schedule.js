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
      console.log(responce.data.data);
      commit("setSchedule", responce.data);
      commit("setLoading", false, { root: true });
    } catch (error) {
      console.error("there is problem ", error);
      if(error.request.status=== 401){
        window.location.href='/login'
        }
    }
  },
  async getScheduleById({ commit },option) {
    const token = localStorage.getItem("token");
    try {
      const responce = await axios.get(`http://tulibayev.uz/api/schedule/${option}`, {
        headers: { Authorization: "Bearer" + token },
      });
      commit("setSchedule", responce.data);
    } catch (error) {
      console.error("there is problem ", error);
      if(error.request.status=== 401){
        window.location.href='/login'
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
