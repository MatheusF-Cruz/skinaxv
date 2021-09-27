<template>
  <div class="about">
    <div>
      <button class="buttonHS" @click="mostrarFormulario">{{ buttonForm }}</button>
      <button class="buttonHS" @click="mostrarVeiculos">{{ buttonCar }}</button>
    </div>
    <Dashboard v-if="exibirForm == true" />
    <CarrosAdmin v-if="exibirCar == true"/>
  </div>
</template>

<script>
import Dashboard from "../components/Dashboard.vue";
import CarrosAdmin from "../components/CarrosAdmin.vue";

export default {
  name: "About",
  data() {
    return {
      exibirForm: false,
      exibirCar: false,
      buttonForm: "Cadastrar Veiculos",
      buttonCar: "Visualizar Veiculos",
    };
  },
  components: {
    Dashboard,
    CarrosAdmin,
  },
  methods: {
    async mostrarFormulario() {
      this.exibirForm = !this.exibirForm;
      if (this.exibirForm === false) {
        this.buttonForm = "Cadastrar Veiculo";
      } else {
        this.buttonForm = "Ocultar Formulario";
      }
    },
    async mostrarVeiculos() {
      this.exibirCar = !this.exibirCar;
      if (this.exibirCar === false) {
        this.buttonCar = "Visualizar Veiculos";
      } else {
        this.buttonCar = "Ocultar Veiculos";
      }
    },
  },
};
</script>

<style scoped>

.buttonHS{
  padding: 10px;
  font-size: 25px;
}

</style>