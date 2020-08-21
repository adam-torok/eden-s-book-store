<template>
<div class="flex mx-auto items-center justify-center shadow-lg mt-5 mx-8 mb-4 max-w-lg">
   <form class="w-full max-w-xl bg-white rounded-lg px-4 pt-2">
      <div class="flex flex-wrap -mx-3 mb-6">
         <h2 class="px-4 pt-3 pb-2 text-gray-800 text-lg">Add a new review 😄</h2>
         <input class="rounded border border-gray-400 leading-normal resize-none w-full h-10 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white w-full md:w-full px-3 mb-2 mt-2" v-model="comment.name" type="text" placeholder="Your name">
         <input class="rounded border border-gray-400 leading-normal resize-none w-full h-10 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white w-full md:w-full px-3 mb-2 mt-2" v-model="comment.email" type="text" placeholder="Your E-mail">
         <input class="rounded border border-gray-400 leading-normal resize-none w-full h-10 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white w-full md:w-full px-3 mb-2 mt-2" v-model="comment.picture" type="text" placeholder="Your pic url">
         <div class="w-full md:w-full px-3 mb-2 mt-2">
            <textarea v-model="comment.comment" class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="body" placeholder='Type Your Comment' required></textarea>
         </div>
         <div class="w-full md:w-full flex items-start md:w-full px-3">
            <div class="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
               <svg fill="none" class="w-5 h-5 text-gray-600 mr-1" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
               </svg>
               <p class="text-xs md:text-sm pt-px">Some HTML is okay.</p>
            </div>
            <div class="-mr-1">
               <input @click.prevent="onAddComment()" type='submit' class="bg-orange-500  text-white font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:text-orange-500 hover:bg-white" value='Post Comment'>
            </div>
         </div>
      </div>
      </form>
   </div>
</template>

<script>
export default {
   props:['bookId','addComment'],
   methods:{
      onAddComment(){
         this.addComment(this.comment);
         this.comment  = {
            id: this.comment.id,
            name : '',
            email:'',
            picture : '',
            comment: ''
         }
         location.reload();
      }
   },
  data(){
     return{
         comment: {
            id: this.$route.params.id,
            name:'',
            email:'',
            picture : '',
            comment: '',
         }
     }
  },
}
</script>

<style>

</style>