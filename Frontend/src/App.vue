<template>
  <Navbar />
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

 * {
    font-family: Arial, Helvetica, sans-serif;
    padding: 0;
    margin: 0;
    list-style: none;
    box-sizing: border-box;
    /* Palheta de cores */
    --pretoClaro: #242424;
    --pretoEscuro: #000000;
    --vermelho: #ff1d1d;
  }
    
</style>
