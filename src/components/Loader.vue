<template>
  <div class="loader">
    <img src="../storage/asd.gif" alt="">
    <br>
    <h1 class="title-font text-gray-500">{{facts[Math.floor(Math.random() * facts.length)]}}</h1>
  </div>
</template>

<script>
export default {
  data(){
    return{
      facts:[
        'There are over 129 million books in existence.',
        'The most expensive book ever purchased was sold for $30.8 million.',
        'There’s a word for loving the smell of old books.',
        'The longest sentence ever printed is 823 words.',
        'Author’s names didn’t used to be printed on the covers of their books.',
        'Icelandic people read more than anyone.',
        'Alice in Wonderland is based on a real 10-year-old girl.',
        'lliteracy is still a huge problem throughout the world.'
      ]
    }
  }
}
</script>

<style>

.loader{
  position: fixed;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  align-content: center;
  z-index: 999;
  height: 100vh;
  width: auto;
  overflow: show;
  align-items: center;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.loader>img{
  height:450px;
}
.loader>h1{
  color: orange;
  margin-top: -100px;
}
@media only screen and (max-width: 600px) {
  .loader>h1{
  margin-top: -70px;
  max-width: 350px;
  }

.loader>img{
  height:auto;
}

}
</style>