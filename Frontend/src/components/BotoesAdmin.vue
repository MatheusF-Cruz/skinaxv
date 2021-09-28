<template>
    <div>
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
.buttonHS{
  padding: 10px;
  font-size: 25px;
}
</style>