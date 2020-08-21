<template>
  <div  class="news__container">
    <div v-for="article in this.news.articles" :key="article.id">
        <news :article="article"></news>
    </div>
  </div>
</template>

<script>
import API from '@/api/api'
import News from '@/components/SingleNews'
export default {
    components:{
        'news' : News
    },
    async mounted(){
     this.news = await API.fetchNews();
    },
    data(){
        return{
            news:{}
        }
    }

}
</script>

<style>
.news__container{
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
}
@media only screen and (max-width: 600px) {
.news__container{
    display:grid;
    grid-template-columns:1fr;
    }
}
</style>