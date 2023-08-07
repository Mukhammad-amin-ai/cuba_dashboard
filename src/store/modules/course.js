import axios from "axios";

let state = {
  courseData: [],
};
const mutations = {
  setCourseData(state, courseData) {
    state.courseData = courseData;
  },
};
const actions = {
  async getCourseData({commit}) {
    const token = localStorage.getItem("token");
    try {
        let responce = await axios.get("http://tulibayev.uz/api/course", {
        headers: { Authorization: "Bearer " + token },
      });
      console.log(responce.data.data);
      commit("setCourseData", responce.data.data);
    } catch (error) {
      console.error("error find there", error);
    }
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
