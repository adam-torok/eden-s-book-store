<template>
<div class="p-4 md:mb-0  flex flex-col items-center ">
  <div class="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center" v-bind:style="{ 'background-image': 'url(' + this.article.urlToImage + ')' }"></div>
  <div class=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
    <div class="header-content inline-flex">
      <div class="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-orange-100">
        <div class="h-2 w-2 rounded-full m-1 bg-orange-500"></div>
      </div>
      <div class="text-sm title-font text-orange-500 tracking-widest">{{this.article.source.name}}</div>
    </div>
    <div class="title-post text-xl">{{this.article.title}}</div>
    <div class="summary-post text-sm text-gray-600  font-small text-justify">{{this.article.description}}
    </div>
    <a :href="this.article.url"  class="flex text-white my-1 border-0 py-2 px-3 focus:outline-none hover:bg-orange-600 rounded" :class="{'bg-red-500' : isHot, 'bg-orange-500' : !isHot}">Read Article!</a>
  </div>
</div>
</template>

<script>
export default {
    props:['article','isHot']
}
</script>