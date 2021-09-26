<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Dashboard />
  </div>
</template>

<script>
import Dashboard from '../components/Dashboard.vue'

export default {
  name: "About",
  components:{
    Dashboard,
  }
}
</script>