<template>
  <v-card class="mx-auto" max-width="350" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          {{cardInfo.casaDeHogwarts}}
        </div>
        <v-list-item-title class="text-h5 mb-1">
          {{cardInfo.nome}}
        </v-list-item-title>
        <v-list-item-subtitle>{{cardInfo.nascimento}}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar size="80">
        <v-img :src="require(`@/assets/personagens/${cardInfo.urlImagem}`)"></v-img>
      </v-list-item-avatar>
    </v-list-item>
  </v-card>
</template>

<script>

export default{
    props:['cardInfo']
}

</script>