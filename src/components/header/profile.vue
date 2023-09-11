<template>
  <li class="profile-nav onhover-dropdown pe-0 py-0">
    <div class="media profile-media">
      <img class="b-r-10" src="@/assets/images/dashboard/profile.png" alt="" />
      <div class="media-body">
        <span >{{ profil.firstname }} {{ profil.lastname }}
          <!-- <i class="middle fa fa-angle-down"></i> -->
        </span>
        <!-- <p class="mb-0 font-roboto"> -->
          <i class="middle fa fa-angle-down"></i>
        <!-- </p> -->
      </div>
    </div>
    <ul class="profile-dropdown onhover-show-div">
      <router-link to="/profile">
        <li>
          <vue-feather type="user"></vue-feather><span>Account </span>
        </li>
      </router-link>
      <li>
        <vue-feather type="mail"></vue-feather><span>Inbox</span>
      </li>
      <li>
        <vue-feather type="file-text"></vue-feather><span>Taskboard</span>
      </li>
      <li>
        <vue-feather type="settings"></vue-feather><span>Settings</span>
      </li>
      <li>
        <button @click="logout" style="background-color: transparent; border: transparent;">
          <vue-feather type="log-in"></vue-feather><span>Log out</span>
        </button>
      </li>
    </ul>
  </li>
</template>

<script>
import { Button } from 'bootstrap/dist/js/bootstrap.bundle';
// let roleObj = JSON.parse(localStorage.getItem("role"))
let profileObj = JSON.parse(localStorage.getItem("profile"))

export default {
  name: 'Profile',
  data() {
    return {
      // role: roleObj.name,
      profil: profileObj
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
    },
  },
  components: { Button }
};
</script>
 