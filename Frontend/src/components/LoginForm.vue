<template>
  <form @submit.prevent="rLogin">
    <div>
      <label for="user">Digite seu usuário: </label>
      <input type="text" placeholder="Digite seu usuário" v-model="username" required/>
      <label for="password">Digite sua senha: </label>
      <input type="password" placeholder="Digite sua senha" v-model="password" required/>
      <button type="submit">Entrar</button>
    </div>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  name: "LoginForm",
  data(){
      return{
            username: null,
            password: null
      }
  },
  methods: {
    async rLogin() {
    const data = {
        username: this.username,
        password: this.password
    }

      let url = "http://localhost:3333/auth";
      let username = "skinaxv";
      let password = "fevereiro98";

      try {
        const res = await axios.post(url, data, {
          auth: {
            username: username,
            password: password,
          },
          withCredentials: true
        });
        console.log(res)
      } catch (error) {
        console.log(error.message);
      }
      }
  }
}
</script>