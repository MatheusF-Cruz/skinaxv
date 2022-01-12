<template>
<div>
    <Navbar  :logo="logo_src"/>
    <router-view />
    <Footer />
</div>    
</template>

<script>

import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  components:{
    Navbar,
    Footer
  },
  data(){
    return{
      logo_src: "/img/logo.png",
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
* {
    font-family: 'Roboto', sans-serif;
    padding: 0;
    margin: 0;
    list-style: none;
    box-sizing: border-box;
    --preto: #000000;
    --cinza: #242424;
    --branco: #FFFFFF;
    --vermelho: #af1313;
  }
</style>
