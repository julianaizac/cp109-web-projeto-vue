<template>
  <v-card class="mx-auto my-8" min-width="200" max-width="280">
    <v-img max-width="100%" :src="require(`@/assets/casas/${cardInfo.urlImagem}`)"/>
  
    <v-card-title>{{cardInfo.nome}}</v-card-title>

    <v-card-text>
      <div class="my-0 text-subtitle-1">
        Criador(a): {{cardInfo.criador}}
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Animal símbolo: {{cardInfo.animalSimbolo}}</v-card-title>
  </v-card>
</template>

<script>
export default{
    props:['cardInfo']
}

</script>