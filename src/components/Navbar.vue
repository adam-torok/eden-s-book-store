<template>
   <header>
        <div v-if="isLogged == true" class="container mx-auto px-6 py-3">
            <div class="flex items-center justify-between">
                <div class="hidden w-full text-gray-800 md:flex md:items-center">
                    <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.06298 10.063 6.27212 12.2721 6.27212C14.4813 6.27212 16.2721 8.06298 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16755 11.1676 8.27212 12.2721 8.27212C13.3767 8.27212 14.2721 9.16755 14.2721 10.2721Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.39409 5.48178 3.79417C8.90918 0.194243 14.6059 0.054383 18.2059 3.48178C21.8058 6.90918 21.9457 12.6059 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.97318 6.93028 5.17324C9.59603 2.3733 14.0268 2.26452 16.8268 4.93028C19.6267 7.59603 19.7355 12.0268 17.0698 14.8268Z" fill="currentColor" />
                    </svg>
                    <span class="mx-1 text-sm">Szeged</span>
                <i class="text-orange-500 fas mx-1 cursor-pointer fa-sun fa-md"></i>
                   | {{this.weather.weather[0].description}} | 
                    {{this.weather.main.temp}} °C
                </div>
                <div class="w-full text-gray-800 md:text-center text-m font-semibold">
                    Eden's Book Store 
                </div>
                <div class="flex items-center justify-end w-full">
                <i @click="logOut()"  class="fas fa-1x text-orange-500 fa-sign-out-alt"></i>
                    <div class="flex sm:hidden">
                        <button @click="isOpen = !isOpen" type="button" class="text-gray-800-600 hover:text-gray-800-500 focus:outline-none focus:text-gray-800-500" aria-label="toggle menu">
                            <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                                <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <nav :class="isOpen ? '' : 'hidden'" class="sm:flex sm:justify-center sm:items-center mt-4">
                <div class="flex flex-col sm:flex-row">
                    <router-link @click.native="isOpen = !isOpen" class="mt-3 text-gray-800 hover:underline sm:mx-3 sm:mt-0" to="/Home">Home</router-link>
                    <router-link @click.native="isOpen = !isOpen" class="mt-3 text-gray-800 hover:underline sm:mx-3 sm:mt-0" to="/Authors">Authors</router-link>
                    <router-link @click.native="isOpen = !isOpen" class="mt-3 text-gray-800 hover:underline sm:mx-3 sm:mt-0" to="/Insert/">Add New Book!</router-link>
                    <router-link @click.native="isOpen = !isOpen" class="mt-3 text-gray-800 hover:underline sm:mx-3 sm:mt-0" to="/News">News About Books!</router-link>
                    <router-link @click.native="isOpen = !isOpen" class="mt-3 text-gray-800 hover:underline sm:mx-3 sm:mt-0" to="/Insert/">Profile</router-link>
                </div>
            </nav>
        </div>
         <div v-else class="container mx-auto px-6 py-3">
            <div class="flex items-center">                  
                <div class="w-full text-gray-800 md:text-center text-m font-semibold">
                    Eden's Book Store
                </div>
                    <div class="flex sm:hidden">
                        <button @click="isOpen = !isOpen" type="button" class="text-gray-800-600 hover:text-gray-800-500 focus:outline-none focus:text-gray-800-500" aria-label="toggle menu">
                            <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                                <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                            </svg>
                        </button>
                </div>
            </div>
            <nav :class="isOpen ? '' : 'hidden'" class="sm:flex sm:justify-center sm:items-center mt-4">
                <div class="flex flex-col sm:flex-row">
                    <router-link @click.native="isOpen = !isOpen" class="mt-3 text-gray-800 hover:underline sm:mx-3 sm:mt-0" to="/Login">Login</router-link>
                    <router-link @click.native="isOpen = !isOpen" class="mt-3 text-gray-800 hover:underline sm:mx-3 sm:mt-0" to="/Login">About</router-link>
                    <router-link @click.native="isOpen = !isOpen" class="mt-3 text-gray-800 hover:underline sm:mx-3 sm:mt-0" to="/Login">Support</router-link>

                </div>
            </nav>
        </div>
    </header>
</template>

<script>
import firebase from 'firebase'
export default {
  props:['weather','isLogged','userEmail'],
  data(){
    return{
        isOpen : false,
        isClicked : false,
    }
  },
  methods:{
    logOut(){
      firebase.auth().signOut().then(()=>{
        this.$router.replace({ name: "Login" });
      })
    },
  }
}
</script>

<style>
.asd{
    color:#EB7E44
}
.logo__holder{
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    cursor: pointer;
}
</style>