<template>
  <div id="nav">
    <router-link to="/" id="logo-url">
      <img :src="logo" id="logo">
    </router-link>
    <router-link to="/">Inicio</router-link>
    <router-link to="/about">Carros</router-link>
    <router-link to="/contato">Contato</router-link>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: ["logo", "alt"]
};
</script>

<style scoped>
  #nav {
    background-color: var(--preto);
    padding: 15px 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  #nav #logo-url {
    margin: auto;
    margin-left: 0;
  }
  #logo {
    width: 90px;
    height: 60px;
  }
  #nav a {
    color: var(--branco);
    text-decoration: none;
    margin: 12px;
    transition: .9s;
    font-size: 21px;
  }
  #nav a:hover {
    color: var(--vermelho);
  }
</style>