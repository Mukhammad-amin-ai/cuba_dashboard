<template >
    <!-- <div class="btn"> -->
        <li class="profile-nav onhover-dropdown pe-0 py-0">
            <div class="media profile-media">
                <div class="media-body">
                    <p class="mb-0 font-roboto">
                        Branch <i class="middle fa fa-angle-down"></i>
                    </p>
                </div>
            </div>
            <ul class="profile-dropdown onhover-show-div">
                loading...
                <!-- <router-link to="/profile">
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
                </li> -->
            </ul>
        </li>
    <!-- </div> -->
</template>
<script>
export default {

}
</script>
<style scoped>
.btn {
    padding-left: 20px;
}
</style>