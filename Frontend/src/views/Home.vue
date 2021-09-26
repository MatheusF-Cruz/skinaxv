<template>
  <div class="home">
    <Marcas />
    <Banner />
  </div>
</template>

<script>
import Banner from '../components/Banner.vue'
import Marcas from '../components/Marcas.vue'

export default {
  name: 'Home',
  components: {
    Banner,
    Marcas,
  }
}
</script>

<style scopped>

body{
  background-color: #FFFFFF;
}

</style>
