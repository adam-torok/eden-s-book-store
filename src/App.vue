<template>
<div>
    <app-nav :weather="weather"></app-nav>
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">    
      <router-view ></router-view>
    </transition>
    <app-footer></app-footer>     
</div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import API from '@/api/api'
export default {
 components:{
        'app-nav' : Navbar,
        'app-footer' : Footer
    },
    data(){
      return{
        weather : {},
      }
    },
    async mounted(){
      this.weather = await API.fetchWeather();
    },
}
</script>

<style>


</style>