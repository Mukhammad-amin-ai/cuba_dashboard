import axios from "axios";
const token = localStorage.getItem("token");

let state = {
  scheduleData: [],
  idDay: "",
  day: "",
  handler: true,
};
const mutations = {
  setSchedule(state, scheduleData) {
    state.scheduleData = scheduleData;
  },
  setId(state, idDay) {
    state.idDay = idDay;
  },
  setDay(state, day) {
    state.day = day;
  },
  setHandler(state, handler) {
    state.handler = handler;
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
    commit("setSmallLoading", true, { root: true });
    try {
      let response = await axios.post(
        "http://tulibayev.uz/api/branch/schedule",
        option,
        { headers: { Authorization: "Bearer " + token } }
      );
      console.log(response.data);
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
    commit("setDay", info.dateStr);
    const selectedDate = new Date(info.date);
    const setId = selectedDate.getDay();
    commit("setId", setId);
    let dayOfWeekString;
    switch (setId) {
      case 0:
        dayOfWeekString = "Sunday";
        break;
      case 1:
        dayOfWeekString = "Monday";
        break;
      case 2:
        dayOfWeekString = "Tuesday";
        break;
      case 3:
        dayOfWeekString = "Wensday";
        break;
      case 4:
        dayOfWeekString = "Thursday";
        break;
      case 5:
        dayOfWeekString = "Friday";
        break;
      case 6:
        dayOfWeekString = "Saturday";
        break;
      default:
        dayOfWeekString = "unknown";
        break;
    }
    // console.log(setId);
    console.log("Выбран день недели:", dayOfWeekString);
  },
  async createSchedul({ commit }, option) {
    try {
      let response = await axios.post(
        "http://tulibayev.uz/api/branch/schedule",
        option,
        { headers: { Authorization: "Bearer" + token } }
      );
      console.log(response.data);
      if (response.data.message === "Schedule created successfully") {
        window.location.href = "/schedul";
      }
    } catch (e) {
      console.error("error find in creation of schedul", e);
    }
  },
  async editSchedul({ commit }, { id, option }) {
    try {
      let response = await axios.post(
        `http://tulibayev.uz/api/branch/schedule/${{ id }}`,
        option,
        { headers: { Authorization: "Bearer" + token } }
      );
      console.log(response.data);
      if (response.data.message === "Schedule updated successfully") {
        window.location.href = "/schedul";
      }
    } catch (e) {
      console.error("error find in creation of schedul", e);
    }
  },
  async deleteSchedul({ commit }, id) {
    try {
      let response = await axios.delete(
        `http://tulibayev.uz/api/branch/schedule/${{ id }}`,
        option,
        { headers: { Authorization: "Bearer" + token } }
      );
      console.log(response.data);
      if (response.data.message === "Schedul deleted successfully") {
        window.location.href = "/schedul";
      }
    } catch (e) {
      console.error("error find in deleting schedul", e);
    }
  },
  change({ commit }) {
    commit("setHandler", !state.handler);
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
