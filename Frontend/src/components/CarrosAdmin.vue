<template>
  <div class="container">
    <div
      class="cards-front"
      v-for="carro in inventario"
      :key="carro.id"
      @mouseover="mostrarBotoes"
      @mouseleave="ocultarBotoes"
    >
      <div class="veiculos">
        <img src="/img/carro.jpeg" alt="" />
        <div class="descricao">
          <h2 class="titulo">{{ carro.marca_id }} {{ carro.modelo }}</h2>
          <p class="info">{{ carro.versao }}</p>
          <div class="anoKm">
            <div class="icones">
              <p>
                <i class="far fa-calendar">{{ " " + carro.ano }}</i>
              </p>
              <p><i class="fas fa-tachometer-alt"></i> {{ " " + carro.km }}</p>
              <p><i class="fas fa-tint"></i> {{ " " + carro.cor }}</p>
              <p>
                <i class="fas fa-gas-pump"></i> {{ " " + carro.combustivel }}
              </p>
            </div>
          </div>
          <p class="preco"><i class="fas fa-tag"></i>{{ " " + carro.valor }}</p>
          <p class="local">
            <i class="fas fa-map-marker-alt"></i>{{ " " + carro.local }}
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
import ListarCarros from "../service/listarCarros";
import DeletarCarro from "../service/deletarCarro";
import ListarMarcas from "../service/listarMarcas";

export default {
  name: "Banner",

  data() {
    return {
      login: 1,
      inventario: null,
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

    async mounted() {
    await this.listarInventario()
    },

    methods: {
    async getCarros() {
      const res = await ListarCarros.listarCarros();
      return res;
    },
    async insertData(inventario) {
      this.inventario = inventario;
      console.log(this.inventario)
    },
    async listarInventario(){
      const inventario = await this.getCarros();
      const gmarcas = await this.getMarcas(inventario);
      await this.insertData(gmarcas)
    },
    async deleteCar(id) {
      await DeletarCarro.deletarCarro(id);
      await this.listarInventario();
    },
    async getMarcas(inventario) {
      for (let carro of inventario) {
        const res = await ListarMarcas.listarMarcas(carro.marca_id);
        let nome = res.data;
        nome = nome[0].nome;
        carro.marca_id = nome;
      }
      return inventario;
    },
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
  width: 100%;
  max-height: 220px;
}

.descricao {
  padding: 5px 0 5px 15px;
}

.veiculos {
  max-width: 300px;
  box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.25);
  border-radius: 8px;
  overflow: hidden;
  transition: 0.5s;
}

.veiculos:hover {
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.466);
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
  text-align: center;
}

.botoes button {
  padding: 10px;
  margin: 15px 20px 10px 0;
  border: 1px solid var(--preto);
  color: var(--branco);
  font-size: 15px;
  background-color: var(--cinza);
  cursor: pointer;
}
.botoes button:hover {
  background-color: transparent;
  color: var(--vermelho);
}
</style>
