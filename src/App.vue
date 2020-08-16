<template>
<div class="">
    <app-nav></app-nav>
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">    
      <router-view ></router-view>
    </transition>
    <app-footer></app-footer>     

</div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export default {
 components:{
        'app-nav' : Navbar,
        'app-footer' : Footer
    }
}
</script>

<style>


</style>