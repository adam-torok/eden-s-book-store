<template>
<div class="p-4 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
            <div class="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center" v-bind:style="{ 'background-image': 'url(' + this.article.urlToImage + ')' }"></div>
            <div class=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
              <div class="header-content inline-flex ">
                <div class="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-orange-100">
                  <div class="h-2 w-2 rounded-full m-1 bg-orange-500"></div>
                </div>
                <div class="text-sm title-font text-orange-500 tracking-widest">{{this.article.source.name}}</div>
              </div>
              <div class="title-post text-xl">{{this.article.title}}</div>
              <div class="summary-post text-sm text-gray-600  font-small text-justify">{{this.article.description}}
                <button class="bg-blue-100 text-orange-500 mt-4 block rounded p-2 text-sm "><span class="">{{this.article.author}}</span></button>
              </div>
             
            </div>
          </div>
</template>

<script>
export default {
    props:['article']
}
</script>

<style>

</style>