import axios from "axios";

import Api from "./Base_Url";
const state = {
  email: "",
  changer: true,
  // loading: false,
  error: false,
  text: "",
};
const mutations = {
  setEmail(state, newemail) {
    state.email = newemail;
  },
  setChanger(state, changer) {
    state.changer = changer;
  },
  setError(state, error) {
    state.error = error;
  },
  setText(state, text) {
    state.text = text;
  },
};
const actions = {
  async register({ commit }, option) {
    // commit("setLoading", true);
    commit("setLoading", true, { root: true });
    try {
      const response = await axios.post(`${Api}/api/user/register`, option);
      console.log(response.data);
      if (response.data.message === "Email sent") {
        commit("setLoading", false, { root: true });
      }
      const a = JSON.parse(response.config.data);
      commit("setEmail", a.email);
      commit("setChanger", false);
    } catch (error) {
      console.error("this is error", error);
      if (
        error.response.data.email &&
        error.response.data.email[0] === "The email has already been taken."
      ) {
        commit("setLoading", false, { root: true });
        commit("setError", true);
        commit("setText", "The email has already been taken");
      } else if (
        error.response.data.password &&
        error.response.data.password[0] ===
          "The password field must be at least 8 characters."
      ) {
        commit("setLoading", false, { root: true });
        commit("setError", true);
        commit("setText", "The password field must be at least 8 characters.");
      } else if (
        error.response.data.password &&
        error.response.data.password[0] ===
          "The password field confirmation does not match."
      ) {
        commit("setLoading", false, { root: true });
        commit("setError", true);
        commit("setText", "The password field confirmation does not match.");
      }
    }
  },
  async verification({ commit }, option) {
    try {
      const response = await axios.post(
        `${Api}/api/user/emailverification`,
        option
      );
      const token = response.data.token;
      localStorage.setItem("token", token);
      if (token) {
        window.location.href = "/";
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  },
  async getMyProfile({ commit }, token) {
    try {
      let response = await axios.get(`${Api}/api/auth/me`, {
        headers: { Authorization: "Bearer " + token },
      });
      console.log(response.data.data);
      localStorage.setItem("profile", JSON.stringify(response.data.data));
    } catch (e) {
      console.error("problem with getting user profile ", e);
    }
  },
  async login({ commit, dispatch }, option) {
    try {
      const response = await axios.post(`${Api}/api/auth/login`, option);
      // console.log(response.data);
      let token = response.data.token;
      await dispatch("getMyProfile", response.data.token);
      localStorage.setItem("token", token);
      if (response.data.role) {
        localStorage.setItem("role", JSON.stringify(response.data.role));
        localStorage.setItem("show", JSON.stringify(response.data.show));
      }
      if (token) {
        window.location.href = "/";
      }
    } catch (error) {
      console.error(error);
      if (error.response.data.error === "Unauthorized") {
        commit("setError", true);
        commit(
          "setText",
          "Sorry, wrong email address or password. Please try again"
        );
      }
      if (error.request.status === 422) {
        commit("setError", true);
        commit(
          "setText",
          "Sorry, wrong email address or password. Please try again"
        );
      }
    }
  },
  async logout() {
    const token = localStorage.getItem("token");
    await axios.get(`${Api}/api/auth/logout`, {
      headers: { Authorization: "Bearer" + token },
    });
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("show");
    localStorage.removeItem("profile");
    if (token) {
      window.location.href = "/login";
    }
  },
};
export default {
  state,
  mutations,
  actions,
};
