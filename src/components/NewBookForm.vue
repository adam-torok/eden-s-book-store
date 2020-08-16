<template>
  <div class="container m-auto leading-loose">
  <form @submit.prevent="onInsertNewBook" class=" m-4 p-10 bg-white rounded shadow-xl">
    <p class="text-gray-800 font-medium">Book's information</p>
    <div class="mt-2">
      <label class="block text-sm text-gray-00">Title</label>
      <input v-model="newBook.title" class="w-full px-5 py-1 text-gray-700 bg-orange-200 rounded"  type="text" required="" placeholder="Title">
    </div>
    <div class="mt-2">
      <label class="block text-sm text-gray-600">Author</label>
      <input v-model="newBook.author" class="w-full px-5 py-1 text-gray-700 bg-orange-200 rounded"  type="text" required="" placeholder="Author">
    </div>
    <div class="mt-2">
      <label class=" block text-sm text-gray-600">Genre</label>
      <input v-model="newBook.genre" class="w-full px-2 py-2 text-gray-700 bg-orange-200 rounded" type="text" required="" placeholder="Genre">
    </div>
    <div class="mt-2">
      <label class="text-sm block text-gray-600">Description</label>
      <input v-model="newBook.desc" class="w-full px-2 py-2 text-gray-700 bg-orange-200 rounded" type="text" required="" placeholder="Description">
    </div>
    <div class="inline-block mt-2 w-1/2 pr-1">
      <label class="block text-sm text-gray-600">Review Count</label>
      <input v-model="newBook.rating" class="w-full px-2 py-2 text-gray-700 bg-orange-200 rounded" type="number" max=5 min=0 required="" placeholder="Review">
    </div>
    <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
      <label class="block text-sm text-gray-600" >Cover</label>
      <input v-model="newBook.cover" class="w-full px-2 py-2 text-gray-700 bg-orange-200 rounded" type="text" required="" placeholder="Cover URL">
    </div>
    <div class="mt-4">
      <button class="px-4 py-1 text-white font-light tracking-wider bg-orange-500 rounded" type="submit">Add it to collection!</button>
    </div>
  </form>
</div>
</template>

<script>
export default {	
	props:['insertNewBook','showAlert'],
	methods:{
		onInsertNewBook(){
			this.showAlert();
      this.insertNewBook(this.newBook);
      this.newBook = {
        title : '',
				author: '',
				genre: '',
				desc : '',
				rating : '',
				cover : ''
      };
			}
	},
	data(){
		return{
			newBook:{
				title : '',
				author: '',
				genre: '',
				desc : '',
				rating : '',
				cover : ''
			}
		}
	}
}
</script>