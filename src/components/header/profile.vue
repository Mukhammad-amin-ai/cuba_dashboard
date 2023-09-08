<template>
  <li class="profile-nav onhover-dropdown pe-0 py-0">
    <div class="media profile-media">
      <img class="b-r-10" src="@/assets/images/dashboard/profile.png" alt="" />
      <div class="media-body">
        <span v-if="checker">{{ myProfile.firstname }} {{ myProfile.lastname }}</span>
        <span v-else>Loading...</span>
        <p class="mb-0 font-roboto">
          {{ role }} <i class="middle fa fa-angle-down"></i>
        </p>
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
import { mapState } from 'vuex';
let roleObj = JSON.parse(localStorage.getItem("role"))


export default {
  name: 'Profile',
  data() {
    return {
      role: roleObj.name,
      checker: false
    }
  },
  computed: {
    ...mapState('role', ['myProfile'])
  },
  mounted() {
    this.getMyInfo()
    this.check()
  },
  methods: {
    // logout: function () {
    //   // firebase
    //   //   .auth()
    //   //   .signOut()
    //   //   .then(() => {
    //   //     UserAuth.Logout();
    //   this.$router.replace('/auth/login');
    //   localStorage.removeItem('User')
    // }
    // },
    getMyInfo() {
      this.$store.dispatch("role/getMyProfile")
    },
    check() {
      if (this.myProfile.firstname && this.myProfile.lastname) {
        this.checker = !this.checker
      }
    },
    logout() {
      this.$store.dispatch('logout');
    },
  },
  components: { Button }
};
</script>
