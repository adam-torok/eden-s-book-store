<template>
  <div>
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">   
      <loader v-show="loader"></loader>
    </transition>
     <div v-for="author in authors" :key="author.id">
         <author :author="author"></author>
     </div>
  </div>
</template>

<script>
import Author from '@/components/Author'
import Loader from '@/components/Loader'
import API from '@/api/api'
export default {
    components:{
        'author' : Author,
        'loader' : Loader,
    },
    data(){
        return{
            loader : true,
            authors : []
        }
    },
    created(){
       setTimeout(() => {
        this.loader = !this.loader;
      }, 2000);
    },
    async mounted(){
       this.authors = await API.fetchAuthors();
    }
}
</script>

<style>

</style>