<template>
<div>
  <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">   
      <loader v-show="loader"></loader>
  </transition>
  <side-note></side-note>
  <transition 
  name="animated fadeIn"
  enter-active-class="animated fadeIn"
  leave-active-class="animated fadeOut">
  <alert v-show="alert"></alert>
  </transition>
  <book-form :insertNewBook="insertNewBook" :showAlert="showAlert"></book-form>
</div>
</template>

<script>
import NewBookForm from '@/components/NewBookForm'
import Loader from '@/components/Loader'
import Alert from '@/components/Alert'
import SideNote from '@/components/SideNote'
import API from '@/api/api'
export default {
    components:{
        'side-note' : SideNote,
        'book-form' : NewBookForm,
        'alert' : Alert,
        'loader' : Loader,
    },
    data(){
      return{
        loader:true,
        alert:false
      }
    },
    created(){
       setTimeout(() => {
        this.loader = !this.loader;
      }, 2000);
    },
    methods:{
        insertNewBook(book) {
        API.insertBook(book);
      },
      showAlert(){
        this.alert = true;
        setTimeout(() => {
            this.alert = false;
        }, 2000);
      }
    }
}
</script>

<style>

</style>