<template>
<div>
  <transition 
  name="animated fadeIn"
  enter-active-class="animated fadeIn"
  leave-active-class="animated fadeOut">
  <alert v-show="alert"></alert>
  </transition>
  <book-form :updateBook="UpdateBook" :showAlert="showAlert"></book-form>
</div>
</template>

<script>
import UpdateBookForm from '@/components/UpdateBookForm'
import Alert from '@/components/Alert'
import API from '@/api/api'
export default {
    components:{
        'book-form' : UpdateBookForm,
        'alert' : Alert
    },
    data(){
      return{
        book_id : this.$route.params.id,
        alert:false
      }
    },
    methods:{
        UpdateBook(book) {
        API.updateBook(book);
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