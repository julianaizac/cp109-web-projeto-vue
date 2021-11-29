<template>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title>{{cardInfo}}</v-card-title>
    </v-img>

    <v-card-text class="text--primary">
      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>
    
  </v-card>
</template>

<script>

export default{
    props:['cardId', 'cardInfo']
}

</script>
