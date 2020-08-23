<template>
<section class="py-5 text-gray-700 body-font overflow-hidden bg-white rounded">
  <div class="container px-5 mx-auto">
    <div class="mx-auto flex flex-wrap">
      <img alt="Book cover" class="lg:w-1/3 w-full object-cover object-center rounded border border-gray-200" :src="this.book.cover">
      <div class="book__desc lg:w-1/2 w-full lg:pl-5 lg:py-6 mt-6 lg:mt-0">
      <div class="ribbon ribbon-top-right"><span>TOP 10</span></div>
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

.book__desc{
  position: relative;
}

.ribbon {
  width: 150px;
  height: 150px;
  overflow: hidden;
  position: absolute;
}
.ribbon::before,
.ribbon::after {
  position: absolute;
  z-index: 0;
  content: '';
  display: block;
  border: 5px solid orange;
}
.ribbon span {
  position: absolute;
  display: block;
  width: 225px;
  padding: 15px 0;
  background-color: orange;
  box-shadow: 0 5px 10px rgba(0,0,0,.1);
  color: #fff;
  font: 700 18px/1 'Lato', sans-serif;
  text-shadow: 0 1px 1px rgba(0,0,0,.2);
  text-transform: uppercase;
  text-align: center;
}

.ribbon-top-right {
  top: -10px;
  right: -10px;
}
.ribbon-top-right::before,
.ribbon-top-right::after {
  border-top-color: transparent;
  border-right-color: transparent;
}
.ribbon-top-right::before {
  top: 0;
  left: 0;
}
.ribbon-top-right::after {
  bottom: 0;
  right: 0;
}
.ribbon-top-right span {
  left: -25px;
  top: 30px;
  transform: rotate(45deg);
}

.book__review {
  width:70px;
}
</style>