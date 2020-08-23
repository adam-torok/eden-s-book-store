<template>
<div>
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">   
    <loader v-show="loader"></loader>
    </transition>
    <app-nav :weather="weather"></app-nav>
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">    
      <router-view ></router-view>
    </transition>
    <app-footer></app-footer>     
</div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Loader from '@/components/Loader'
import Footer from '@/components/Footer'
import API from '@/api/api'
export default {
 components:{
        'loader' : Loader,
        'app-nav' : Navbar,
        'app-footer' : Footer
    },
    data(){
      return{
        weather : {},
        loader : true
      }
    },
    async mounted(){
      this.weather = await API.fetchWeather();
      setTimeout(() => {
        this.loader = false;
      }, 2000);
    }
}
</script>

<style>


</style>