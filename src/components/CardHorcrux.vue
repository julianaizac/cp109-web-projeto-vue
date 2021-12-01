<template>
  <v-card class="mx-auto my-12" max-width="300" max-height="400">
    
    <v-img height="300" :src="require(`@/assets/horcruxes/${cardInfo.urlImagem}`)"></v-img>

    <v-card-title>{{cardInfo.nome}}</v-card-title>

  </v-card>
</template>

<script>

export default{
    props:['cardInfo']
}

</script>