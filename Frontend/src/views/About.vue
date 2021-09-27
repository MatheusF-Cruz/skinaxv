<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Dashboard />
    <CarrosAdmin /> 
  </div>
</template>

<script>
import Dashboard from '../components/Dashboard.vue'
import CarrosAdmin from '../components/CarrosAdmin.vue'

export default {
  name: "About",

  components:{
    Dashboard,
    CarrosAdmin,
  },
}
</script>