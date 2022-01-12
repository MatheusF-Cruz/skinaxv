<template>
  <div>
    <div class="marcas">
      <div>
        <h2>FILTRE POR MARCA</h2>
      </div>
      <div class="imagens">
        <img src="/img/chevrolet.png" alt="Chevrolet" />
        <img src="/img/fiat.png" alt="Fiat" height="40px" />
        <img src="/img/ford.png" alt="Ford" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Marcas",
};
</script>

<style scopped>
.marcas {
  align-items: center;
  margin: 25px;
}
.imagens {
  display: flex;
  justify-content: center;
  align-items: center;
}
.imagens img {
  max-width: 100px;
  margin-left: 35px;
  cursor: pointer;
}
h2 {
  font-size: 25px;
  text-align: center;
  font-weight: 500;
}
</style>

