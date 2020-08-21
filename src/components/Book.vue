<template>
<section class="py-5 text-gray-700 body-font overflow-hidden bg-white rounded">
  <div class="container px-5 mx-auto">
    <div class="mx-auto flex flex-wrap">
      <img alt="ecommerce" class="lg:w-1/3 w-full object-cover object-center rounded border border-gray-200" :src="this.book.cover">
      <div class="lg:w-1/2 w-full lg:pl-5 lg:py-6 mt-6 lg:mt-0">
        <h2 class="text-sm title-font text-gray-500 tracking-widest">{{this.book.author}}</h2>
        <h1 class="text-gray-900 title-font font-medium mb-1">{{this.book.title}}</h1>
          <h2 class="text-xs title-font text-gray-500 tracking-widest">{{this.book.genre}}</h2>
        <h2 class="text-xs title-font text-gray-500 tracking-widest">{{this.book.time | dateCutter('-','.')}}</h2>
        <div class="flex">
          <span class="flex items-center">
            <span v-for="rating in rating" :key="rating.id">
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-orange-500" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
           </span>       
            <span v-for="rating in 5-rating" :key="rating.id">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
           </span>          
            <span class="book__review text-gray-600 text-xs ml-2">{{this.book.rating}} Rating</span>
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
        <p class="text-xs">{{this.book.desc | substringify}}</p>
        <div class="flex  mt-5">
          <router-link class="flex text-white bg-orange-500 border-0 py-2 px-3 focus:outline-none hover:bg-orange-600 rounded" :to="{ name: 'bookid', params: { id: this.book.id }}">More</router-link>
          <button @click="deleteBook(id)" class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <i class="fas fa-trash"></i>
          </button>
          <router-link :to="{ name: 'updateBook', params: { id: this.book.id }}"  @click="deleteBook(id)" class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <i class="fas fa-edit"></i>
           </router-link>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  props:['book', 'deleteBook'],
  filters: {
    substringify: function (value) {
      return value.
            substring(0,100)+'...';
    },
    dateCutter: function (value,search,replace) {
        return value.split(search)
                    .join(replace)
                    .substring(0,10);
    }
  },
  data(){
    return{
      rating: parseInt(this.book.rating),
      id: this.book.id
    }
  }
}
</script>

<style scoped>
.book__review {
  width:70px;
}
</style>