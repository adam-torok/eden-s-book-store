<template>
  <div @click="scrollToTop" class="scroller">
    <i class="fas text-orange-500 fa-2x fa-arrow-circle-up"></i>
  </div>
</template>

<script>
export default {
  methods:{
    scrollToTop(){
      window.scrollTo({top:0,behavior:'smooth'});
    }
  }
}
</script>

<style scoped>
.scroller{
  position: fixed; 
  bottom: 20px;
  cursor: pointer;
  right: 30px;
  transition: 0.5s all cubic-bezier(0.075, 0.82, 0.165, 1);
}
.scroller:hover{
  transform:scale(1.1);
}
</style>