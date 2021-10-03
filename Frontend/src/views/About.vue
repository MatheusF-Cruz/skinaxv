<template>
  <div class="about">
    <BotoesAdmin @emitButtonForm="mostrarFormulario" @emitButtonCar="mostrarVeiculos"/>
    <Dashboard v-if="exibirForm === true" @emitFechar="mostrarFormulario"/> 
    <CarrosAdmin v-if="exibirCar === true"/>
  </div>
</template>

<script>
import Dashboard from "../components/Dashboard.vue";
import CarrosAdmin from "../components/CarrosAdmin.vue";
import BotoesAdmin from "../components/BotoesAdmin.vue";

export default {
  name: "About",

  data(){
    return{
      exibirForm: false,
      exibirCar: false,
      buttonForm: "Cadastrar Veiculos",
      buttonCar: "Visualizar Veiculos",
    }
  },
 
  components: {
    Dashboard,
    CarrosAdmin,
    BotoesAdmin,
  },

  methods: {
    async mostrarFormulario() {
    console.log(this.exibirForm)
      this.exibirForm = !this.exibirForm;
      console.log(this.exibirForm)
      if (this.exibirForm === false) {
        this.buttonForm = "Cadastrar Veiculo";
      } else {
        this.buttonForm = "Ocultar Formulario";
      }
    },
    async mostrarVeiculos() {
        console.log('ok')
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

