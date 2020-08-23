<template>
   <div class="cat__tounge">
      <i class="text-orange-500 fab fa-facebook-f"></i>
      <i class="text-orange-500  fab fa-twitter"></i>
      <img src="../storage/logo.png" alt="" srcset="">
    </div>
</template>

<script>
export default {

}
</script>

<style>
.cat__tounge{
  display: flex;
  align-items: center;
  position: fixed;
  background: white;
  border-radius: 10px;
  left: -145px;
  padding-left: 20px;
  width: 190px;
  cursor: pointer;
  height: 95px;
  transition: 0.5s all cubic-bezier(0.075, 0.82, 0.165, 1);
}

.cat__tounge>i{
  margin: 0 5px;
}

.cat__tounge>img{
  width: 150px;
}

.cat__tounge:hover{
  left: -0;
  box-shadow: 0 0 25px 0 rgba(0,0,0,.04);
  transition: 0.5s all cubic-bezier(0.075, 0.82, 0.165, 1);
}
@media only screen and (max-width: 600px) {
    .cat__tounge{
        display:none;
    }
}
</style>