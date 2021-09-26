<template>
  <div class="container">
    <div class="cards" v-for="dados in data" :key="dados.id">
      <div class="veiculos">
        <img src="/img/carro.jpeg" alt="" />
        <div class="descricao">
          <h2 class="titulo">{{ dados.modelo }} {{dados.versao}}</h2>
          <p class="info">{{ dados.versao }}</p>
          <div class="anoKm">
            <p>
              <i class="far fa-calendar"> {{ dados.ano }}</i>
            </p>
            <p><i class="fas fa-tachometer-alt"></i> {{ km }}</p>
            <p><i class="fas fa-tint"></i> {{ cor }}</p>
            <p><i class="fas fa-gas-pump"></i> {{ tipo }}</p>
          </div>
          <p class="preco">{{ dados.valor }}</p>
          <p class="local">{{ local }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  data() {
    return {
      data: null,
      titulo: "",
      info: "",
      ano: "",
      km: "",
      cor: "",
      tipo: "",
      preco: "",
      local: "",
    };
  },
  methods: {
    async getCarros() {
      let url = "http://localhost:3333/carros";
      let username = "skinaxv";
      let password = "fevereiro98";

      let headers = new Headers();

      //headers.append('Content-Type', 'text/json') btoa criptografa em base 64;
      headers.set("Authorization", "Basic " + btoa(username + ":" + password));

      let res = await fetch(url, {
        method: "GET",
        headers: headers,
      })

      return await res.json();
    },
    insertData(data){
      this.data = data;
    }
  },

  async mounted() {
    const data  = await this.getCarros();
    this.insertData(data)
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

.cards {
  margin: 10px;
}

.cards .veiculos img {
  width: 300px;
  max-height: 220px;
}

.descricao {
  padding: 5px 0 5px 15px;
}

.veiculos {
  box-shadow: 5px 10px 8px 10px #00000020;
  border-radius: 8px;
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
}
</style>

