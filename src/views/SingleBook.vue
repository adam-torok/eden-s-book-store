<template>
<section class="book__container container m-auto my-10 py-5 text-gray-700 body-font overflow-hidden bg-white">
  <side-note></side-note>
  <div class="container px-5 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="Book cover" class="lg:w-1/3 w-full object-cover object-center rounded border border-gray-200" :src="this.book.cover">
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 class="text-sm title-font text-gray-500 tracking-widest">{{this.book.author}}</h2>
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{{this.book.title}}</h1>
        <h2 class="text-xs title-font text-gray-500 tracking-widest">{{this.book.time}}</h2>
        <div class="flex mb-4">
          <span class="flex items-center">
            <span v-for="rating in parseInt(this.book.rating)" :key="rating.id">
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-orange-500" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
           </span>     
            <span v-for="rating in 5 - parseInt(this.book.rating)" :key="rating.id">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
           </span>          
            <span class="text-gray-600 ml-3">{{this.book.rating}} Rating</span>
          </span>
          <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
            <a class="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="ml-2 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
          </span>
        </div>
        <p class="leading-relaxed">{{this.book.desc}}</p>
      </div>
    </div>
  </div>
  <button @click="showComments = !showComments" class="book__comment-button text-white bg-orange-500 border-0 py-2 px-3 focus:outline-none hover:bg-orange-600 rounded">Show reviews</button>
  <div class="book__comment-container">
    <transition  name="custom-classes-transition"
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut">
    <div v-show="showComments">
      <comment-writer :bookId="this.book.id" :addComment="addComment"></comment-writer>
      <div v-if="hasComments">
        <comment :commentData="comment" v-for="comment in comments" v-bind:key="comment.id"></comment>
      </div>
      <div class="book_comment-no" v-else>
        <img class="book_comment-image" src="../storage/notfound.png" alt="">
        <p class="text-center text-gray-900  title-font font-medium mb-1">Noone commented on this book yet 😕</p>
      </div>
    </div>
    </transition>
  </div>
</section>

</template>

<script>
import API from '@/api/api'
import SideNote from '@/components/SideNote'
import CommentWriter from '@/components/CommentWriter'
import Comment from '@/components/Comment'
export default {
    components:{
      'side-note' : SideNote,
      'comment-writer' : CommentWriter,
      'comment' : Comment
    },
    data(){
        return{
            hasComments : false,
            showComments : false,
            book:{},
            comments: []
        }
    },
    methods:{
      async addComment(comment){
        await API.addComment(comment);
      }
    },
    beforeMount(){
    window.scrollTo(0,0);
    },
    async mounted(){
      this.comments = await API.fetchComments(this.$route.params.id)
      this.book = await API.fetchBook(this.$route.params.id);
      if(this.comments.length > 0){
        this.hasComments = true;
      }
    }
}
</script>

<style>
  .book__container{
    display:flex;
    flex-direction: column;
  }
  .book__comment-container{
    display:grid;
    padding: 20px;
    justify-content:center;
  }
  .book__comment-button{
    margin: auto;
  }
  .book_comment-image{
    width:350px;
  }
  .book_comment-no{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
  }
</style>