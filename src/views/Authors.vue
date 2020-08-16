<template>
  <div>
     <div v-for="author in authors" :key="author.id">
         <author :author="author">
        
         </author>
     </div>
  </div>
</template>

<script>
import Author from '@/components/Author'
import API from '@/api/api'
export default {
    components:{
        'author' : Author
    },
    data(){
        return{
            authors : []
        }
    },
    async mounted(){
       this.authors = await API.fetchAuthors();
    }
}
</script>

<style>

</style>