<template lang="">
  <error/>
 <div>
  <div class="container-fluid">
      <div class="row ">
        <div class="col-12 p-0">
          <div class="login-card">
            <div>
              <div>
              </div>
              <div class="login-main">
                <form class="theme-form">
                  <h4>Sign in to account</h4>
                  <p>Enter your email & password to login</p>
                  <div class="form-group">
                    <label class="col-form-label">Email Address</label>
                    <input class="form-control" type="email" v-model='email'>
                  </div>
                  <div class="form-group">
                    <label class="col-form-label">Password</label>
                    <div class="form-input position-relative">
                      <input class="form-control" type="password" v-model='password' >
                      <div class="show-hide"><span class="show"> </span></div>
                    </div>
                  </div>
                  <!-- <div class="d-flex gap mt-3">
                    <button type="button" class="btn btn-primary student" :style="getStyleObjectf" @click='student'>Student</button>
                    <button type="button" class="btn btn-primary teacher" :style='setBgforTeacher' @click='teacher'>Teacher</button>
                    <button type="button" class="btn btn-primary user" :style='setBgforUser' @click='user'>Admin</button>
                  </div> -->
                  <div class="form-group  mt-3">
                    <div class="checkbox p-0 ms-1">
                      <input id="checkbox1" type="checkbox">
                      <label class="text-muted" for="checkbox1">Remember me</label>
                    </div>
                    <router-link class="link" to="/forgotpassword"> Forgot password?</router-link>
                    <div class="text-end mt-2">
                      <button class="btn btn-primary btn-block w-100"  type="submit" @click.prevent="login">Sign in</button>
                    </div>
                    <div class="mt-3">
                      <p>Don't have accaunt <span>
                        <router-link to="/register" > Register</router-link>
                      </span> </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
</template>
<script>
import error from '@/components/ui/error.vue'
export default {
  components: {
    error
  },
  data() {
    return {
      email: "",
      password: "12345678",
      // role: '',
      // bgColorS: '',
      // bgColorT: '',
      // bgColorU: '',
      // color: "",
      // color1: "",
      // color2: ""
    }
  },
  // computed: {
  //   getStyleObjectf() {
  //     return {
  //       backgroundColor: `${this.bgColorS} !important`,
  //       color: `${this.color}`
  //     };
  //   },
  //   setBgforTeacher() {
  //     return {
  //       backgroundColor: `${this.bgColorT} !important`,
  //       color: `${this.color1}`
  //     }
  //   },
  //   setBgforUser() {
  //     return {
  //       backgroundColor: `${this.bgColorU} !important`,
  //       color: `${this.color2}`
  //     }
  //   }
  // },
  methods: {
    async login() {
      const option = {
        password: this.password,
        email: this.email,
      }
      this.$store.dispatch('login',option)
    },
    // student() {
    //   this.role = 'student',
    //     this.bgColorS = '#f8f9fe',
    //     this.bgColorU = '',
    //     this.bgColorT = '',
    //     this.color = '#000',
    //     this.color1 = '',
    //     this.color2 = ''
    // },
    // user() {
    //   this.role = 'user',
    //     this.bgColorS = '',
    //     this.bgColorU = '#f8f9fe',
    //     this.bgColorT = '',
    //     this.color = '',
    //     this.color1 = '',
    //     this.color2 = '#000'
    // },
    // teacher() {
    //   this.role = 'teacher',
    //     this.bgColorS = '',
    //     this.bgColorU = '',
    //     this.bgColorT = '#f8f9fe',
    //     this.color = '',
    //     this.color1 = '#000',
    //     this.color2 = ''
    // }
  }


}
</script>
<style scoped>
.gap {
  justify-content: space-between;
}
</style>