<template>
  <div class="flex items-start mb-4 text-sm">
        <img v-bind:src="commentData.picture" class="w-10 h-10 rounded-full  mr-3">
        <div class="flex-1 overflow-hidden">
            <div>
                <span class="text-orange-500 font-bold">{{commentData.name}}</span>
                <span class="text-orange-900 ml-3 text-xs">{{commentData.time}}</span>
            </div>
            <p class="text-black leading-normal">{{commentData.comment}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props:["commentData"]
}
</script>

<style scoped>
img{
    object-fit:cover;
}
</style>