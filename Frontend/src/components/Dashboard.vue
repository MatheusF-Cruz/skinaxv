<template>
  <div>
    <h2>Cadastrar Veiculos: </h2>
    <form @submit.prevent="cadastrarCarro">
      <div class="formulario">
        <div class="inputs">
          <p>Marca</p>
          <select v-model="form.marca">
            <option value="Fiat">Fiat</option>
            <option value="Chevrolet">Chevrolet</option>
            <option value="Ford">Ford</option>
            <option value="Toyota">Toyota</option>
            <option value="Honda">Honda</option>
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
            <select v-model="form.combustivel">
            <option value="Gasolina">Gasolina</option>
            <option value="Alcool">Alcool</option>
            <option value="Flex">Flex</option>
            <option value="Disel">Disel</option>
          </select>
          </div>
          <div>
            <p>Km</p>
            <input type="number" v-model="form.km"/>
          </div>
          <div>
            <p>Cor</p>
            <input type="text" placeholder="Cor" v-model="form.cor" />
          </div>
          <div>
            <p>Valor</p>
            <input type="text" placeholder="Valor" v-model="form.valor" />
          </div>
          <div>
            <p>Imagem</p>
            <input type="text" placeholder="Insira o link da imagem" v-model="imagem"/>
          </div>
          <div class="botoes">
          <button class="cadastrar" type="submit">Cadastrar</button>
          <button class="fechar" @click="$emit('emitFechar')">Fechar</button>
          </div>
        </div>
      </div>
     </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Dashboard",
  
  emits: ['emitFechar'],

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
        imagem: "",
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
  margin-bottom: 35px;
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

.fechar{
  border: none;
  background-color: var(--cinza);
  color: var(--branco);
  font-size: 15px;
  padding: 10px;
  margin-top: 15px;
  width: 25%;
  cursor: pointer;
}
.fechar:hover{
  background-color: transparent;
  color: var(--cinza);
  border: 1px solid var(--cinza);
}


</style>