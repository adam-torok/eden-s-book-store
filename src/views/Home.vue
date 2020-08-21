<template>
  <div>
    <alert v-show="alert"></alert>
    <div class="home__search relative max-w-lg mx-auto">
    <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
      <svg class="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none">
          <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </span>
    <input v-model="search" class="w-full border my-5 rounded-md pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline" type="text" placeholder="Search">
    </div>
    <div class="books__container container m-auto">
      <div  v-for="book in books" :key="book.id">
        <book :deleteBook="deleteBook" :book="book"></book>
      </div>
    </div>
  </div>
</template>

<script>
import API from '@/api/api'
import Alert from '@/components/Alert'
import Book from '@/components/Book.vue'
export default {
    components:{
        'book' : Book,
        'alert' : Alert
    },
    data(){
      return{
        'books' : [],
        'news' : [],
        'search' :'', //TODO - Implementing an easy search option
        alert: false
      }
    },
    async mounted(){
     this.books = await API.fetchBooks();     
    },
    methods:{
      deleteBook(id){
        API.deleteBook(id).then(() =>{
            this.alert = true;
            setTimeout(() => {
            this.alert = false;
            }, 2000);
            location.reload();
        });   
      }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Pangolin&display=swap');
html{
  font-family: 'Pangolin', cursive;
}
.books__container{
  margin: 20px auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap:15px;
}
@media only screen and (max-width: 600px) {
  .books__container {
    grid-template-columns: 1fr;
  }
  .home__search {
    max-width: 16rem;
  }
}
</style>