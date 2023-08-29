import axios from "axios";

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
      const response = await axios.post(
        "https://tulibayev.uz/api/user/register",
        option
      );
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
        "https://tulibayev.uz/api/user/emailverification",
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
  async login({ commit }, option) {
    // commit("setLoading", true, { root: true });
    try {
      const response = await axios.post(
        `http://tulibayev.uz/api/auth/login`,
        option
      );
      console.log(response.data);
      // commit("setLoading", false, { root: true });
      let token = response.data.token;
      localStorage.setItem("token", token);
      if (response.data.role) {
        localStorage.setItem("role", JSON.stringify(response.data.role));
      }
      if (token) {
        window.location.href = "/";
      }
    } catch (error) {
      console.error(error);
      if (error.response.data.error === "Unauthorized") {
        // commit("setLoading", false, { root: true });
        commit("setError", true);
        commit(
          "setText",
          "Sorry, wrong email address or password. Please try again"
        );
      }
      if (error.request.status === 422) {
        // commit("setLoading", false, { root: true });
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
    await axios.get("https://tulibayev.uz/api/auth/logout", {
      headers: { Authorization: "Bearer" + token },
    });
    localStorage.removeItem("token");
    localStorage.removeItem('role')
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
