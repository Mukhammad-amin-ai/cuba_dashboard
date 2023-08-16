import axios from "axios";
import Api from './Base_Url'

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
  async getCourseData({ commit }) {
    commit("setLoading", true, { root: true });
    try {
      let responce = await axios.get(`${Api}/api/course`, {
        headers: { Authorization: "Bearer " + token },
      });
      // console.log(responce.data.data);
      commit("setCourseData", responce.data.data);
      commit("setLoading", false, { root:true });
    } catch (error) {
      commit("setLoading", false, { root: true });

      console.error("error find there", error);
    }
  },
  async getCourseDataById({ commit },option) {
    commit("setLoading", true, { root: true });
    try {
      let responce = await axios.get(`http://tulibayev.uz/api/course/${option}`, {
        headers: { Authorization: "Bearer " + token },
      });
      // console.log(responce.data);
      commit("setCourseData", responce.data.data);
      commit("setLoading", false, { root:true });
    } catch (error) {
      commit("setLoading", false, { root: true });

      console.error("error find there", error);
    }
  },
  async createCourse({ commit }, option) {
    try {
      let response = await axios.post(
        "http://tulibayev.uz/api/course",
        option,
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      console.log(response.data);
      if (response.data.message === "Course created successfully") {
        window.location.href = "/courses";
      }
    } catch (error) {
      console.error("error createCourse", error);
    }
  },
  async editCourse({ commit }, { id, option }) {
    try {
      const response = await axios.put(
        `http://tulibayev.uz/api/course/${id}`,
        option,
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      console.log(response.data);
      if (response.data.message === "Course updated successfully") {
        window.location.href = "/courses";
      }
    } catch (error) {
      console.error("error find", error);
    }
  },
  async delete({commit},option){
    if(window.confirm('O\'chiraymi')){
      try {
        const response = await axios.delete(`http://tulibayev.uz/api/course/${option}`,{
          headers: { Authorization: "Bearer " + token },
        });
        console.log(response.data);
        if (response.data.message ==='Course deleted successfully'){
          window.location.href='/courses'
        }
      } catch (error) {
        console.error("error find", error);
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
