<template>
  <div>
    <h2>Cadastrar Veiculos: </h2>
    <form @submit.prevent="cadastrarCarro">
      <div class="formulario">
        <div class="inputs">
          <p>Marca</p>
          <select>
            <option value="fiat">Fiat</option>
            <option value="fiat">Chevrolet</option>
            <option value="fiat">Ford</option>
            <option value="fiat">Toyota</option>
            <option value="fiat">Honda</option>
          </select>
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
            <select>
            <option value="fiat">Gasolina</option>
            <option value="fiat">Alcool</option>
            <option value="fiat">Flex</option>
            <option value="fiat">Disel</option>
          </select>
          </div>
          <div>
            <p>Km</p>
            <input type="number"/>
          </div>
          <div>
            <p>Cor</p>
            <input type="text" placeholder="Cor" v-model="form.cor" />
          </div>
          <div>
            <p>Valor</p>
            <input type="text" placeholder="Valor" v-model="form.valor" />
          </div>
          <button class="cadastrar" type="submit">Cadastrar</button>
        </div>
      </div>
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

<style  scoped>

h2{
  text-align: center;
  margin: 10px 0 5px 0;
}

.formulario {
  display: flex;
}

.inputs{
  border: 1px solid var(--cinza);
  padding: 25px;
  border-radius: 15px;
  box-shadow: 5px 10px 8px 10px #00000035;
}


.inputs, select {
  width: 500px;
  margin: 0 auto;
  font-size: 20px;
}
.inputs p {
  font-weight: bold;
  border-left: 5px solid red;
  padding-left: 5px;
}

.inputs input, select {
  width: 100%;
  height: 35px;
  padding-left: 3px;
  margin: 5px 0 10px 0;
}

.cadastrar {
  border: none;
  background-color: var(--cinza);
  color: var(--branco);
  font-size: 35px;
  padding: 15px;
  width: 100%;
  cursor: pointer;
}

.cadastrar:hover{
  background-color: transparent;
  color: var(--cinza);
  border: 1px solid var(--cinza);
}

</style>