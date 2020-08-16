<template>
 <div class="bg-white rounded-lg p-6">
    <img style="object-fit:cover" class="h-16 w-16 rounded-full mx-auto" :src="this.author.picture">
    <div class="text-center">
      <h2 class="text-lg">{{this.author.name}}</h2>
      <div class="text-orange-500">Description: {{this.author.description}}</div>
     <div class="text-gray-600">Genre : {{this.author.rating}}</div>
    </div>
 </div>
</template>

<script>
export default {
    props:['author']
  
}
</script>

<style scoped>

</style>