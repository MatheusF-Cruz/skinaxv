<template>
  <form @submit.prevent="rLogin">
    <div>
      <div class="container">
        <div class="forms">
          <div class="logo">
            <img src="/img/logo.png" alt="logo">
          </div>
          <div class="inputs">
            <label for="user">Usuário: </label>
            <input
              type="text"
              placeholder="Digite seu usuário"
              v-model="username"
              required
            />
            <label for="password">Senha: </label>
            <input
              type="password"
              placeholder="Digite sua senha"
              v-model="password"
              required
            />
            <button class="entrar" type="submit">Entrar</button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginForm",
  data() {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    async rLogin() {
      const data = {
        username: this.username,
        password: this.password,
      };

      let url = "http://localhost:3333/auth";
      let username = "skinaxv";
      let password = "fevereiro98";

      try {
        const res = await axios.post(url, data, {
          auth: {
            username: username,
            password: password,
          },
          withCredentials: true,
        });
        console.log(res);
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};
</script>

<style scoped>

  .forms {
    max-width: 540px;
    margin: 0 auto;
    padding: 25px;
    border: 1px solid #FFFFFF;
    border-radius: 10px;
    box-shadow: 1px 2px 5px #FFFFFF;
  }

  .logo img{
    max-width: 100%;
  }

  label {
    border-left: 5px solid red;
    color: #FFFFFF;
    margin: 8px 0 8px 0;
  }

  label, input{
    justify-content: center;
    align-items: center;
    display: block;
    width: 100%;
    padding: 5px 5px;
    font-size: 25px;
  }

  .entrar{
    width: 100%;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: var(--preto);
    padding: 15px;
    font-size: 25px;
    margin-top: 15px;
    cursor: pointer;
    transition: 0.8s;
  }
  .entrar:hover{
    border: 1px solid rgb(255, 0, 0);
    color: rgb(255, 0, 0);
    background-color: transparent;
  }

</style>