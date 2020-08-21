<template>
<section class="container m-auto my-10 py-5 text-gray-700 body-font overflow-hidden bg-white">
  <div class="container px-5 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" class="lg:w-1/3 w-full object-cover object-center rounded border border-gray-200" :src="this.book.cover">
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 class="text-sm title-font text-gray-500 tracking-widest">{{this.book.author}}</h2>
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{{this.book.title}}</h1>
        <h2 class="text-xs title-font text-gray-500 tracking-widest">{{this.book.time}}</h2>
        <div class="flex mb-4">
          <span class="flex items-center">
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
  {{comments}}
  <comment-writer :addComment="addComment"></comment-writer>
  <comment :commentData="comment" v-for="comment in comments" v-bind:key="comment.id"></comment>
</section>

</template>

<script>
import API from '@/api/api'
import CommentWriter from '@/components/CommentWriter'
import Comment from '@/components/Comment'
export default {
    components:{
      'comment-writer' : CommentWriter,
      'comment' : Comment
    },
    data(){
        return{
            book:{},
            comments: [{
              name:'Adam',
              email : 'asd@asd.hu',
              date : '2020. 05. 10',
              picture: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              comment : 'Jaj nagyon jó volt ez a könyv esküszöm!'
            },
            {
              name:'Péter',
              email : 'asd@asd.hu',
              date : '2020. 05. 10',
              picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTna-cdkVT6Jcx_77l9CVYRwmQEByZOoItU6w&usqp=CAU',
              comment : 'Jaj Beszarsz!'
            }]
        }
    },
    methods:{
      addComment(comment){
        this.comments.push(comment);
      }
    },
    beforeMount(){
    window.scrollTo(0,0);
    },
    async mounted(){
       this.book = await API.fetchBook(this.$route.params.id);
    }
}
</script>

<style>

</style>