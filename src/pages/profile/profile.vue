<template>
    <div class="container-fluid p-10">
        <div class="user-profile">
            <div class="row">
                <div class="col-sm-12" v-if="this.$store.state.group.editHandler">
                    <div class="card hovercard text-center">
                        <div class="cardheader" style="background-size: cover;
                                background-position: 10%;
                                 height: 470px;"
                            :style="{ backgroundImage: 'url(' + require('@/assets/images/avtar/16.jpg') + ')' }">
                        </div>
                        <div class="user-image">
                            <div class="avatar">
                                <img id="profile-tour" alt="" src="../../assets/images/avtar/7.jpg"
                                    data-intro="This is Profile image">
                            </div>
                            <div class="icon-wrapper">
                                <i id="update-profile-tour" class="icofont icofont-pencil-alt-5"
                                    data-intro="Change Profile image here"></i>
                            </div>
                        </div>
                        <div class="info">
                            <div class="row" data-intro="This is the your details" id="info-bar-tour">
                                <div class="col-sm-6 col-lg-4 order-sm-1 order-xl-0">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="ttl-info text-start">
                                                <h6><i class="fa fa-user"></i> Role id</h6>
                                                <span v-if="myProfile && myProfile.role_id">
                                                    {{ myProfile.role_id }}
                                                </span>
                                                <span v-else>Loading...</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="ttl-info text-start ttl-sm-mb-0">
                                                <h6><i class="fa fa-book"></i> Status</h6>
                                                <span v-if="myProfile.status === '1'">
                                                    Active
                                                </span>
                                                <span v-else>Inactive</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-12 col-lg-4 order-sm-0 order-xl-1">
                                    <div class="user-designation">
                                        <div class="title">
                                            <a target="_blank" href="">{{ myProfile.firstname }} {{ myProfile.lastname
                                            }}</a>
                                        </div>
                                        <div class="desc mt-2">{{ role }}</div>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-lg-4 order-sm-2 order-xl-2">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="ttl-info text-start ttl-xs-mt">
                                                <h6><i class="fa fa-tasks"></i> Contact Number</h6>
                                                <span v-if="myProfile && myProfile.contact_no">
                                                    {{ myProfile.contact_no }}
                                                </span>
                                                <span v-else>Loading...</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="ttl-info text-start ttl-sm-mb-0">
                                                <h6><i class="fa fa-users"></i> E-mail </h6>
                                                <span v-if="myProfile && myProfile.email">
                                                    {{ myProfile.email }}
                                                </span>
                                                <span v-else>Loading...</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';

let roleObj = JSON.parse(localStorage.getItem("role"))


export default {
    data() {
        return {
            role: roleObj.name
        }
    },
    computed: {
        ...mapState('role', ['myProfile'])
    },
    mounted() {
        this.getProfile()
    },
    methods: {
        getProfile() {
            this.$store.dispatch("role/getMyProfile")
        }
    }
}
</script>
<style scoped></style>