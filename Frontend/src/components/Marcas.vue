<template>
  <div>
    <div class="marcas">
      <div class="imagens">
          <div>
              <h2 align="center"><strong>Filtre por marcas</strong></h2><hr>
          </div>
        <img src="/img/chevrolet.png" alt="Chevrolet" />
        <img src="/img/fiat.png" alt="Fiat" height="40px"/>
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
  display: flex;
  margin: 25px;
}

.imagens {
  margin: 0 auto;
  max-width: 600px;
}

.imagens img {
  max-width: 100px;
  margin-left: 35px;
  cursor: pointer;
}
</style>

