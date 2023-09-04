<template>
  <spiner/>
  <error/>
    <div>
 <div class="container-fluid" v-if="$store.state.auth.changer"  >
   <div class="row ">
     <div class="col-12 p-0">
       <div class="login-card">
         <div>
           <div>
             <a class="logo">
               <img class="img-fluid for-light" src="../assets/images/logo/logo.png" alt="looginpage" />
               <img class="img-fluid for-dark" src="../assets/images/logo/logo_dark.png" alt="looginpage" />
             </a>
           </div>
           <div class="login-main" >
             <form class="theme-form">
              <h4>Create your account</h4>
                  <p>Enter your personal details to create account</p>
               <div class="form-group">
                    <label class="col-form-label pt-0">Your Name</label>
                    <div class="row g-2">
                      <div class="col-6">
                        <input
                          class="form-control"
                          type="text"
                          required=""
                          placeholder="First name"
                          v-model='firstname'
                        />
                      </div>
                      <div class="col-6">
                        <input
                          class="form-control"
                          type="text"
                          required=""
                          placeholder="Last name"
                          v-model='lastname'
                        />
                      </div>
                    </div>
                  </div>
               <div class="form-group">
                 <label class="col-form-label">Contact Number</label>
                 <input class="form-control" type="text" required=""  v-model='contact_no'>
               </div>
               <div class="form-group">
                 <label class="col-form-label">Email Address</label>
                 <input class="form-control" type="email" required="" v-model='email'>
               </div>
               <div class="form-group">
                 <label class="col-form-label">Password</label>
                 <div class="form-input position-relative">
                   <input class="form-control" type="password"  required="" v-model='password'>
                   <span class="validate-error"></span>
                   <div class="show-hide"><span class="show"> </span></div>
                 </div>
               </div>
               <div class="form-group">
                 <label class="col-form-label">Rewrite Password</label>
                 <div class="form-input position-relative">
                   <input class="form-control" type="password"  required="" v-model='password_confirmation'>
                   <span class="validate-error"></span>
                   <div class="show-hide"><span class="show"> </span></div>
                 </div>
               </div>
               <div class="form-group mt-3">
                 <div class="text-end mt-3">
                   <button class="btn btn-primary btn-block w-100" type="submit" @click.prevent="register">Register</button>
                 </div>
               </div>
               <div class="mt-3">
                 <p>Allready have accaunt ? <span> <router-link to="/login">Log-in</router-link></span></p>
               </div>
              </form>
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>
 <div class="container-fluid" v-else >
  <div class="row ">
    <div class="col-12 p-0">
      <div class="login-card">
        <div>
          <div>
            <a class="logo">
              <img class="img-fluid for-light" src="../assets/images/logo/logo.png" alt="looginpage" />
              <img class="img-fluid for-dark" src="../assets/images/logo/logo_dark.png" alt="looginpage" />
            </a>
          </div>
          <div class="login-main">
            <form class="theme-form">
              <h4>Verify your accaunt</h4>
              <p>password to verify</p>
              <div class="form-group">
                 <label class="col-form-label">Password</label>
                 <div class="form-input position-relative">
                   <input class="form-control" type="password"  required="" v-model='verification_number'>
                   <span class="validate-error"></span>
                   <div class="show-hide"><span class="show"> </span></div>
                 </div>
               </div>
              <div class="form-group mb-0">
                <div class="text-end mt-3">
                  <button class="btn btn-primary btn-block w-100" type="submit" @click.prevent="verify">Sign in</button>
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
import { mapMutations } from 'vuex'
import spiner from '@/components/ui/spiner.vue'
import error from '@/components/ui/error.vue'
export default {
  components: {
    spiner,
    error
  },
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      contact_no: "",
      password: "",
      password_confirmation: ""
    }
  },
  computed: {
    setEmail() {
      return this.$store.state.auth.email
    }
  },
  methods: {
    ...mapMutations([
      'setEmail'
    ]),
    async register() {
      let option = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
        contact_no: this.contact_no
      }
      await this.$store.dispatch('register', option)
    },
    async verify() {
      let option = {
        email: this.setEmail,
        verification_number: this.verification_number
      }
      this.$store.dispatch('verification', option)
    }
  }

}
</script>
<style >
     
 </style>