import axios from "axios";
const token = localStorage.getItem("token");

const state = {
  scheduleData: [],
  idDay: "",
  day:''
};
const mutations = {
  setSchedule(state, scheduleData) {
    state.scheduleData = scheduleData;
  },
  setId(state, idDay) {
    state.idDay = idDay;
  },
  setDay(state,day){
    state.day =day
  }
};
const actions = {
  async getSchedule({ commit }) {
    commit("setLoading", true, { root: true });
    try {
      const responce = await axios.get("http://tulibayev.uz/api/schedule", {
        headers: { Authorization: "Bearer" + token },
      });
      // console.log(responce.data.data);
      commit("setSchedule", responce.data);
      commit("setLoading", false, { root: true });
    } catch (error) {
      console.error("there is problem ", error);
      if (error.request.status === 401) {
        window.location.href = "/login";
      }
    }
  },
  async getScheduleById({ commit }, option) {
    try {
      const responce = await axios.get(
        `http://tulibayev.uz/api/schedule/${option}`,
        {
          headers: { Authorization: "Bearer" + token },
        }
      );
      commit("setSchedule", responce.data);
    } catch (error) {
      console.error("there is problem ", error);
      if (error.request.status === 401) {
        window.location.href = "/login";
      }
    }
  },
  async getBranchSchedule({ commit }, option) {
    commit("setSmallLoading", true, { root: true });
    try {
      let response = await axios.post(
        "http://tulibayev.uz/api/branch/schedule",
        option,
        { headers: { Authorization: "Bearer " + token } }
      );
      // console.log(response.data);
      commit("setSchedule", response.data);
      if (response.data.data) {
        commit("setSmallLoading", false, { root: true });
      }
    } catch (e) {
      console.error("error with getingBranchSchedul", e);
    }
  },
  getIdofDay({ commit }, info) {
    commit("setChoose", false, { root: true });
    
    // console.log(info.dateStr);
    commit('setDay',info.dateStr)
    const selectedDate = new Date(info.date);
    const setId = selectedDate.getDay();
    commit("setId", setId);
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
