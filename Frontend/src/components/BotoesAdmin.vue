<template>
    <div class="botoes">
      <h3>Dashboard</h3>
      <p>Bem vindo de volta Israel</p>
      <p>Você possui 30 carros cadastrados</p>
      <button class="buttonHS" @click="$emit('emitButtonForm')">{{ buttonForm }}</button>
      <button class="buttonHS" @click="$emit('emitButtonCar')">{{ buttonCar }}</button>
    </div>
</template>

<script>

export default {
  name: "BotoesAdmin",
  emits: ['emitButtonForm', 'emitButtonCar'],
  data() {
    return {
      buttonForm: "Cadastrar Veiculos",
      buttonCar: "Visualizar Veiculos",
    };
  },

};
</script>

<style scoped>

.botoes{
  text-align: center;
}

.buttonHS{
  background-color: var(--cinza);
  border: 1px solid var(--cinza);
  color: var(--branco);
  border-radius: 20px;
  padding: 7px 20px;
  font-size: 25px;
  margin: 25px;
  cursor: pointer;
}
.buttonHS:hover{
  background-color: transparent;
  color: var(--cinzao);
}
</style>