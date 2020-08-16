<template>
  <div class="container m-auto leading-loose">
  <form @submit.prevent="onUpdateBook" class=" m-4 p-10 bg-white rounded shadow-xl">
    <p class="text-gray-800 font-medium">Book's information</p>
    <div class="mt-2">
      <label class="block text-sm text-gray-00" for="cus_name">Title</label>
      <input v-model="newBook.title" class="w-full px-5 py-1 text-gray-700 bg-orange-200 rounded"  type="text" required="" placeholder="Title">
    </div>
    <div class="mt-2">
      <label class="block text-sm text-gray-600" for="cus_email">Author</label>
      <input v-model="newBook.author" class="w-full px-5 py-1 text-gray-700 bg-orange-200 rounded"  type="text" required="" placeholder="Author">
    </div>
    <div class="mt-2">
      <label class=" block text-sm text-gray-600" for="cus_email">Genre</label>
      <input v-model="newBook.genre" class="w-full px-2 py-2 text-gray-700 bg-orange-200 rounded" type="text" required="" placeholder="Genre">
    </div>
    <div class="mt-2">
      <label class="text-sm block text-gray-600" for="cus_email">Description</label>
      <input v-model="newBook.desc" class="w-full px-2 py-2 text-gray-700 bg-orange-200 rounded" type="text" required="" placeholder="Description">
    </div>
    <div class="inline-block mt-2 w-1/2 pr-1">
      <label class="block text-sm text-gray-600" for="cus_email">Review Count</label>
      <input v-model="newBook.rating" class="w-full px-2 py-2 text-gray-700 bg-orange-200 rounded" type="text" required="" placeholder="Review">
    </div>
    <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
      <label class="block text-sm text-gray-600" for="cus_email">Cover</label>
      <input v-model="newBook.cover" class="w-full px-2 py-2 text-gray-700 bg-orange-200 rounded" type="text" required="" placeholder="Cover URL">
    </div>
    <div class="mt-4">
      <button class="px-4 py-1 text-white font-light tracking-wider bg-orange-500 rounded" type="submit">Update book!</button>
    </div>
  </form>
</div>
</template>

<script>
import API from '@/api/api'
export default {	
	props:['updateBook','showAlert'],
	methods:{
		onUpdateBook(){
        this.showAlert();
        this.updateBook(this.newBook);        
        }
    },
     async mounted(){
       this.newBook = await API.fetchBook(this.$route.params.id);
    },
	data(){
		return{
			newBook:{}
		}
	}
}
</script>