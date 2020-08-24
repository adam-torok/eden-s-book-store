<template>
<div>
    <app-nav :userEmail="userEmail" :isLogged="isLogged" :weather="weather"></app-nav>
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">    
      <router-view :isLogged="isLogged"></router-view>
    </transition>
    <app-footer></app-footer>     
</div>
</template>

<script defer>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import API from '@/api/api'
import firebase from 'firebase'

export default {
 components:{
        'app-nav' : Navbar,
        'app-footer' : Footer
    },
    data(){
      return{
        weather : {},
        isLogged : false,
        userEmail : ''
      }
    },
    beforeMount(){
      let that = this;
      firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        that.userEmail = user.email;
        that.isLogged = true;
      } else {        
        that.isLogged = false
      } 
    });
    },
    async mounted(){
      this.weather = await API.fetchWeather();
    },
}
</script>

<style>


</style>