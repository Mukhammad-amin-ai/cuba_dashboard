<template >
    <!-- <div class="btn"> -->
    <li class="profile-nav onhover-dropdown pe-0 py-0" v-if="chack[17].value > 0">
        <div class="media profile-media">
            <div class="media-body">
                <p class="mb-0 font-roboto">
                    Branch <i class="middle fa fa-angle-down"></i>
                </p>
            </div>
        </div>
        <ul class="profile-dropdown onhover-show-div">
            <!-- loading... -->
            <li v-for="branch2 in branchlar" :key="branch2" @click="sendBranch(branch2.branch)">{{ branch2.branch_name }}
            </li>
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

let branches = JSON.parse(localStorage.getItem('branch_token',))
let perm = JSON.parse(localStorage.getItem('permissions'))
// console.log(perm[17].value);
// console.log(branches);
export default {
    data() {
        return {
            branchlar: branches,
            chack: perm
        }
    },
    methods: {
        sendBranch(option) {
            localStorage.setItem('from_token', option)
            window.location.reload()
        }
    }
}
</script>
<style scoped>
.btn {
    padding-left: 20px;
}
</style>