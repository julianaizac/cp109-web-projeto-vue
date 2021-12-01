<template>
  <v-card class="mx-auto" max-width="400">
    <v-img class="white--text align-end" height="200px" :src="require(`@/assets/materias/${cardInfo.urlImagem}`)">
      <v-card-title>{{cardInfo.nome}}</v-card-title>
    </v-img>

    <v-card-text class="text--primary">
      <div>{{cardInfo.descricao}}</div>
    </v-card-text>
  </v-card>
</template>

<script>

export default{
    props:['cardInfo']
}

</script>