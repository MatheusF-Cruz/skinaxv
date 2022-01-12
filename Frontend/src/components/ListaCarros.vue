<template>
  <div class="container">
      <div class="veiculos"
      v-for="carro in inventario"
      :key="carro.id"   
      >
        <div class="fotos">
          <div class="foto">
            <img src="/img/carro.jpeg" alt="" />
          </div>
          <div class="foto s1">
            <img src="/img/carro.jpeg" alt="" />
          </div>
          <div class="foto">
            <img src="/img/carro.jpeg" alt="" />
          </div>
        </div>
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
        </div>
      </div>
    </div>
</template>

<script>
import ListarCarros from "../service/listarCarros";
import ListarMarcas from "../service/listarMarcas";

export default {
  name: "ListaCarros",

  data() {
    return {
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

.veiculos {
  width: 320px;
  margin: 15px;
  box-shadow: 5px 10px 8px 10px #00000020;
  border-radius: 8px;
  overflow: hidden;
}

.foto img {
  width: 100%;
  height: 280px;
  object-fit: cover;
}

.fotos {
  display: flex;
  overflow-x: auto; 
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
}

.foto {
  width: 320px;
  flex: none;
  scroll-snap-align: start;
}

.titulo {
  font-weight: bold;
  font-size: 20px;
}

.descricao {
  padding: 5px 0 5px 15px;
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
.local {
  margin-bottom: 7px;
}
</style>
