<template>
  <div>
    <div>
      <h2>Formulario adicionar carro</h2>
    </div>
    <form @submit="cadastrarCarro">
      <div>
        <p>Titulo</p>
        <input type="text" placeholder="Titulo" v-model="titulo" />
      </div>
      <div>
        <p>Informações</p>
        <input type="text" placeholder="Informações" v-model="informacoes" />
      </div>
      <div>
        <p>Ano</p>
        <input type="text" placeholder="Ano" v-model="ano" />
      </div>
      <div>
        <p>Km</p>
        <input type="text" placeholder="Km" v-model="km" />
      </div>
      <div>
        <p>Cor</p>
        <input type="text" placeholder="Cor" v-model="cor" />
      </div>
      <div>
        <p>Tipo</p>
        <input type="text" placeholder="Tipo" v-model="tipo" />
      </div>
      <div>
        <p>Valor</p>
        <input type="text" placeholder="Valor" v-model="valor" />
      </div>
      <div>
        <p>Local</p>
        <input type="text" placeholder="Local" v-model="local" />
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      titulo: "",
      informacoes: "",
      ano: "",
      km: "",
      cor: "",
      tipo: "",
      preco: "",
      local: "",
    };
  },
  methods: {
    async cadastrarCarro(e) {
      e.preventDefault();

      const data = {
        titulo: this.titulo,
        informacoes: this.informacoes,
        ano: this.ano,
        km: this.km,
        cor: this.cor,
        tipo: this.tipo,
        preco: this.preco,
        local: this.local,
      }
      //transformando objeto em texto
        const dataJson = JSON.stringify(data);
        console.log(dataJson)
    },
  },
};
</script>