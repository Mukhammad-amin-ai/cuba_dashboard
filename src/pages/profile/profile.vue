<template>
    <div class="container-fluid p-10">
        <div class="user-profile">
            <div class="row">
                <div class="col-sm-12" v-if="this.$store.state.auth.changeProfile">
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
                            <div class="icon-wrapper" @click="changeToEdit">
                                <i id="update-profile-tour" class="icofont icofont-pencil-alt-5"
                                    data-intro="Change Profile image here"></i>
                            </div>
                        </div>
                        <div class="info">
                            <div class="row" data-intro="This is the your details" id="info-bar-tour">
                                <div class="col-sm-6 col-lg-4 order-sm-1 order-xl-0">
                                    <div class="row content">
                                        <div class="col-md-6 p-10">
                                            <div class="ttl-info text-start ttl-xs-mt">
                                                <h6><i class="fa fa-tasks"></i> Contact Number</h6>
                                                <span v-if="profil && profil.contact">
                                                    {{ profil.contact }}
                                                </span>
                                                <span v-else>Loading...</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-12 col-lg-4 order-sm-0 order-xl-1">
                                    <div class="user-designation">
                                        <div class="title">
                                            <a target="_blank" href="">{{ profil.firstname }} {{ profil.lastname
                                            }}</a>
                                        </div>
                                        <div class="desc mt-2">{{ role }}</div>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-lg-4 order-sm-2 order-xl-2">
                                    <div class="row  content">
                                        <div class="col-md-6 p-10">
                                            <div class="ttl-info text-start ttl-sm-mb-0">
                                                <h6><i class="fa fa-users"></i> E-mail </h6>
                                                <span v-if="profil && profil.email">
                                                    {{ profil.email }}
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
                <div v-else>
                    <div class="container">
                        <h1>Edit Profile</h1>
                        <form @submit.prevent="updateUser">
                            <div class="mb-3">
                                <label for="firstname" class="form-label">First Name</label>
                                <input type="text" class="form-control" id="firstname" v-model="firstname">
                            </div>
                            <div class="mb-3">
                                <label for="lastname" class="form-label">Last Name</label>
                                <input type="text" class="form-control" id="lastname" v-model="lastname">
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control" id="email" v-model="email">
                            </div>
                            <div class="mb-3">
                                <label for="contact" class="form-label">Contact</label>
                                <input type="text" class="form-control" id="contact" v-model="contact">
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" id="password" v-model="password">
                            </div>
                            <div class="mb-3">
                                <label for="password_confirmation" class="form-label">Confirm Password</label>
                                <input type="password" class="form-control" id="password_confirmation"
                                    v-model="password_confirmation">
                            </div>
                            <div class="container-fluid d-flex justify-content-between">
                                <button type="submit" class="btn btn-primary" @click="editProfile">Save</button>
                                <button type="submit" class="btn btn-danger" @click="changeToEdit">Go to profile</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';

let roleObj = JSON.parse(localStorage.getItem("name"))
let profileObj = JSON.parse(localStorage.getItem("profile"))


export default {
    data() {
        return {
            role: roleObj,
            profil: profileObj,
            firstname: '',
            lastname: '',
            email: '',
            contact: '',
            password: '',
            password_confirmation: ''
        }
    },
    watch: {
        profil: {
            immediate: true,
            handler(newProfile) {
                if (newProfile) {
                    this.firstname = newProfile.firstname,
                        this.lastname = newProfile.lastname,
                        this.email = newProfile.email,
                        this.contact = newProfile.contact,
                        this.password = newProfile.password,
                        this.password_confirmation = newProfile.password_confirmation
                }
            }
        }
    },
    methods: {
        changeToEdit() {
            this.$store.dispatch('changer')
        },
        editProfile() {
            let option = {
                firstname: this.firstname,
                lastname: this.lastname,
                email: this.email,
                contact: this.contact,
                password: this.password,
                password_confirmation: this.password_confirmation
            }
            this.$store.dispatch('updateMyProfile', option)
        }
    }
}
</script>
<style scoped>
.content {
    justify-content: center;
}
</style>