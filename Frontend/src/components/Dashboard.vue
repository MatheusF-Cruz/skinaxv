<template>
  <div>
    <div>
      <h2>Formulario adicionar carro</h2>
    </div>
    <form @submit.prevent="cadastrarCarro">
      <div>
        <p>Marca</p>
        <input type="text" placeholder="Marca" v-model="form.marca" />
      </div>
      <div>
        <p>Modelo</p>
        <input type="text" placeholder="Modelo" v-model="form.modelo" />
      </div>
      <div>
        <p>Ano</p>
        <input type="text" placeholder="Ano" v-model="form.ano" />
      </div>
      <div>
        <p>Versão</p>
        <input type="text" placeholder="Versão" v-model="form.versao" />
      </div>
      <div>
        <p>Combustivel</p>
        <input
          type="text"
          placeholder="Combustivel"
          v-model="form.combustivel"
        />
      </div>
      <div>
        <p>Km</p>
        <input type="text" placeholder="Km" v-model="form.km" />
      </div>
      <div>
        <p>Cor</p>
        <input type="text" placeholder="Cor" v-model="form.cor" />
      </div>
      <div>
        <p>Valor</p>
        <input type="text" placeholder="Valor" v-model="form.valor" />
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Dashboard",
  data() {
    return {
      form: {
        marca: "",
        modelo: "",
        versao: "",
        combustivel: "",
        km: "",
        cor: "",
        valor: "",
        ano: "",
      },
    };
  },
  methods: {
    async cadastrarCarro() {
      const data = this.form;

      let url = "http://localhost:3333/insertcarros";
      let username = "skinaxv";
      let password = "fevereiro98";

      try {
        const res = await axios.post(url, data, {
          auth: {
            username: username,
            password: password,
          },
        });
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};
</script>