import axios from "axios";
const token = localStorage.getItem("token");

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
  async createCourse({commit},option) {
    try {
      let response = await axios.post("http://tulibayev.uz/api/course",option, {
        headers: { Authorization: "Bearer " + token },
      });
      console.log(response.data);
      if (response.data.message ==='Course created successfully'){
        window.location.href='/courses'
      }
    }catch (error) {
      console.error('error createCourse', error);
    }
  },
  async editCourse({commit},{id,option}){
    try {
      const response = await axios.put(`http://tulibayev.uz/api/course/${id}`, option,{
        headers: { Authorization: "Bearer " + token },
      });
      console.log(response.data);
      if (response.data.message ==='Course updated successfully'){
        window.location.href='/courses'
      }
    } catch (error) {
      console.error("error find", error);
    }
  }
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
