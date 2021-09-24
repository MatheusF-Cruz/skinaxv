<template>
  <Navbar />
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  <router-view/>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  components:{
    Navbar,
  }
}
</script>

<style>
    
</style>
