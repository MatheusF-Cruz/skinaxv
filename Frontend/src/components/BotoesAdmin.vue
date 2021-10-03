<template>
    <div class="botoes">
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
  border: none;
  color: var(--branco);
  padding: 10px;
  font-size: 25px;
  margin: 25px;
  cursor: pointer;
}
.buttonHS:hover{
  background-color: transparent;
  border: 1px solid var(--cinza);
  color: var(--cinzao);
}
</style>