<template>
<div class="container">
  
  <div class="cards">
    <div class="veiculos">
      <img src="/img/carro.jpeg" alt="" />
      <div class="descricao">
      <h2 class="titulo">Fiat Uno</h2>
      <p class="info"> 1.0 12V SCE FLEX ZEN MANUAL</p>
      <div class="anoKm">
      <p><i class="far fa-calendar"> 2019/2020</i></p>
      <p><i class="fas fa-tachometer-alt"></i> 30.154km</p>
      <p><i class="fas fa-tint"></i> Cinza</p>
      <p><i class="fas fa-gas-pump"></i> Flex</p>
      </div>
      <p class="preco"> R$30.490</p>
      <p class="local"> Belo Horizonte/MG</p>
      </div>
    </div>
  </div>

  <div class="cards">
    <div class="veiculos">
      <img src="/img/carro.jpeg" alt="" />
      <div class="descricao">
      <h2 class="titulo">Fiat Uno</h2>
      <p class="info"> 1.0 12V SCE FLEX ZEN MANUAL</p>
      <div class="anoKm">
      <p><i class="far fa-calendar"> 2019/2020</i></p>
      <p><i class="fas fa-tachometer-alt"></i> 30.154km</p>
      <p><i class="fas fa-tint"></i> Cinza</p>
      <p><i class="fas fa-gas-pump"></i> Flex</p>
      </div>
      <p class="preco"> R$30.490</p>
      <p class="local"> Belo Horizonte/MG</p>
      </div>
    </div>
  </div>

  <div class="cards">
    <div class="veiculos">
      <img src="/img/carro.jpeg" alt="" />
      <div class="descricao">
      <h2 class="titulo">Fiat Uno</h2>
      <p class="info"> 1.0 12V SCE FLEX ZEN MANUAL</p>
      <div class="anoKm">
      <p><i class="far fa-calendar"> 2019/2020</i></p>
      <p><i class="fas fa-tachometer-alt"></i> 30.154km</p>
      <p><i class="fas fa-tint"></i> Cinza</p>
      <p><i class="fas fa-gas-pump"></i> Flex</p>
      </div>
      <p class="preco"> R$30.490</p>
      <p class="local"> Belo Horizonte/MG</p>
      </div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
  max-width: 100%;
  justify-content: center;
}

.cards {
  margin: 10px;
}

.cards .veiculos img{
  width: 300px;
  max-height: 220px;
}

.descricao{
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

.anoKm{
  display: flex;
}

.anoKm p{
  padding-right: 10px;
}

.info, .anoKm{
  font-size: 13px;
  margin-top: 5px;
}

.preco{
  font-weight: bold;
  font-size: 25px;
}

</style>

