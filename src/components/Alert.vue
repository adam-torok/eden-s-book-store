<template>
<div class="fixed alert__holder bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center">
  <!--
    Background overlay, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
  -->
  <div class="fixed inset-0 transition-opacity">
    <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
  </div>

  <!--
    Modal panel, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      To: "opacity-100 translate-y-0 sm:scale-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100 translate-y-0 sm:scale-100"
      To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
  -->
  <div class="bg-white overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
    <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
      <div class="sm:flex sm:items-start">
        <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <img style="width:80px" class="rounded-lg my-5 m-auto" src="../storage/ginger-nice.png" alt="Upload image">    
            <img class="w-56 my-5 m-auto rounded-lg " src="../storage/ginger-ok.gif" alt="Upload image">
          <div class="mt-2">
            <p class="text-l text-center leading-5 text-orange-600">
             The new book is sucessfully uploaded to the server, view it on the Home page! 😄
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {

}
</script>

<style>
.alert__holder{
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
</style>