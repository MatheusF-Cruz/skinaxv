<template>
  <div class="container">
    <div class="cards-front" v-for="dados in data" :key="dados.id" @mouseover="mostrarBotoes" @mouseleave="ocultarBotoes">
      <div class="veiculos">
        <img src="/img/carro.jpeg" alt="" />
        <div class="descricao">
          <h2 class="titulo">{{ dados.marca_id }} {{ dados.modelo }}</h2>
          <p class="info">{{ dados.versao }}</p>
          <div class="anoKm">
            <div class="icones">
              <p>
                <i class="far fa-calendar">{{ " " + dados.ano }}</i>
              </p>
              <p><i class="fas fa-tachometer-alt"></i> {{ " " + dados.km }}</p>
              <p><i class="fas fa-tint"></i> {{ " " + dados.cor }}</p>
              <p>
                <i class="fas fa-gas-pump"></i> {{ " " + dados.combustivel }}
              </p>
            </div>
          </div>
          <p class="preco"><i class="fas fa-tag"></i>{{ " " + dados.valor }}</p>
          <p class="local">
            <i class="fas fa-map-marker-alt"></i>{{ " " + dados.local }}
          </p>
          <div class="botoes">
            <button>Editar</button>
            <button @click="deleteCar(carro.id)">Remover</button>
          </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Banner",

data() {
    return {
      login: 1,
      data: null,
      marca: "",
      versao: "",
      combustivel: "",
      km: "",
      cor: "",
      valor: "",
      ano: "",
      local: "",
    };
  },
  methods: {
     async getCarros() {
      let url = "http://localhost:3333/carros";
      let username = "skinaxv";
      let password = "fevereiro98";

      try {
        const res = await axios.get(url, {
          auth: {
            username: username,
            password: password,
          },
        });
        return res.data;
      } catch (error) {
        console.log(error.message);
      }
    },
    insertData(data) {
      this.data = data;
    },

    async getMarcas(data) {
      
      for (let carro of data) {
        let url = `http://localhost:3333/marca/${carro.marca_id}`;
        let username = "skinaxv";
        let password = "fevereiro98";

        try {
          const res = await axios.get(url, {
            auth: {
              username: username,
              password: password,
            },
          });

          let nome = res.data;
          nome = nome[0].nome;
          carro.marca_id = nome;
        } catch (error) {
          console.log(error.message);
        }
      }
      return data;
    },
    async deleteCar(id){
      console.log(id)
      let url = `http://localhost:3333/deletecarros/${carro.id}`;
      let username = "skinaxv";
      let password = "fevereiro98";

      const res = await axios.delete(url,{
        auth:{
          username: username,
          password: password,
        },
      })
      

    },
  },

  async mounted() {
    const data = await this.getCarros();
    const gmarcas = await this.getMarcas(data);
    this.insertData(gmarcas);  
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  justify-content: center;
}

.cards-front {
  margin: 10px;
}

.cards-front .veiculos img {
  width: 300px;
  max-height: 220px;
}

.descricao {
  padding: 5px 0 5px 15px;
}

.veiculos {
  max-width: 300px;
  box-shadow: 5px 10px 8px 10px #00000020;
  border-radius: 8px;
}
.veiculos:hover {
  border: 1px solid var(--preto);
}

.titulo {
  font-weight: bold;
  font-size: 20px;
}

.anoKm {
  display: flex;
}

.anoKm p {
  padding-right: 10px;
}

.info,
.anoKm {
  font-size: 13px;
  margin-top: 5px;
}

.preco {
  font-weight: bold;
  font-size: 25px;
  margin: 7px 0 7px 0;
}
.preco i {
  font-size: 22px;
}

.icones {
  display: flex;
  flex-wrap: wrap;
}
.icones i {
  margin-top: 5px;
}

.botoes {
    margin-top: 15px;
    border-top: 1px solid var(--preto);
    text-align: center;
}

.botoes button{
    padding: 10px;
    margin: 15px 20px 10px 0;
    border: 1px solid var(--preto);
    color: var(--branco);
    font-size: 15px;
    background-color: var(--cinza);
    cursor: pointer;
}
.botoes button:hover{
   background-color: transparent;
   color: var(--vermelho);
}

</style>
