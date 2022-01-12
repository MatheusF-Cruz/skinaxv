<template>
  <div class="home">
    <Marcas />
    <ListaCarros />
  </div>
</template>

<script>
import ListaCarros from '../components/ListaCarros.vue'
import Marcas from '../components/Marcas.vue'

export default {
  name: 'Home',
  components: {
    ListaCarros,
    Marcas,
  }
}
</script>

