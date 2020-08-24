<template>
  <div class="p-2">
        <div class="block lg:flex bg-white lg:shadow-lg rounded-lg">
            <div class="w-full lg:w-1/3 flex lg:border-r border-gray-200">
                <div class="m-auto rounded-full">
                    <a href="/" class="flex items-base pt-10 lg:p-2 -mb-10 lg:-mb-0">
                        <img src="../storage/welcome.png" alt="" class="login__image">
                    </a>
                </div>
            </div>
            <div class="w-full lg:w-2/3 px-6 py-16">
                <div class="mb-4 font-light tracking-widest text-2xl">LOGIN</div>
                <form @submit.prevent="logIn()">
                    <div class="mb-4">
                        <label for="email" class="block mb-2 text-sm text-gray-800">Email</label>
                        <input v-model="user.email" type="email" name="email" id="email" class="focus:border-orange-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" autocomplete="email" required>
                    </div>
                    <div class="mb-4">
                        <label for="password" class="block mb-2 text-sm text-gray-800">Your password</label>
                        <input v-model="user.password" type="password" name="password" id="password" class="focus:border-orange-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" autocomplete="current-password" required>
                    </div>
                    <label class="mb-4 flex items-center">
                        <input type="checkbox" class="form-checkbox" name="remeber" id="remeber" checked>
                        <span class="ml-2">I want to remember you ?</span>
                    </label>
                    <div class="block md:flex items-center justify-between">
                        <button type="submit" class="align-middle bg-orange-500 hover:bg-orange-600 text-center px-4 py-2 text-white text-sm font-semibold rounded-lg inline-block shadow-lg">LOGIN</button>

                        <a class="text-gray-600 hover:text-gray-700 no-underline block mt-3" href="/password/reset">
                            Forgot Your Password?
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from "firebase";

export default {
  data(){
      return{
          user:{
              email : '',
              password : '',
          }
      }
  },
  methods:{
    logIn(){
        firebase.auth().signInWithEmailAndPassword(this.user.email,this.user.password)
        .then(()=>{
          this.$router.replace({ name: "Home" });
        })  
        .catch(err => {
        this.error = err.message;
        });
      }
    }
  }
</script>

<style>
.login__image{
    width: 450px;
}
</style>