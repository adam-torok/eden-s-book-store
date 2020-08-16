<template>
<div>
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
import Alert from '@/components/Alert'
import API from '@/api/api'
export default {
    components:{
        'book-form' : NewBookForm,
        'alert' : Alert
    },
    data(){
      return{
        alert:false
      }
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