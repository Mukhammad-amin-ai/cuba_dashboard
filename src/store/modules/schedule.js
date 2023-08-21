import axios from "axios";
const token = localStorage.getItem("token");

const state = {
  schedule: [],
  idDay: "",
};
const mutations = {
  setSchedule(state, schedule) {
    state.schedule = schedule;
  },
  setId(state, idDay) {
    state.idDay = idDay;
  },
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
    try {
      let response = await axios.post(
        "http://tulibayev.uz/api/branch/schedule",
        option,
        { headers: { Authorization: "Bearer " + token } }
      );
      console.log(response.data);
      commit('schedule',response.data.data)
    } catch (e) {
      console.error("error with getingBranchSchedul", e);
    }
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
