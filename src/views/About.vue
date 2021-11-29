<template>
  <v-row no-gutters>
    <v-col v-for="{data, i} in myCards" 
          :key="i" cols="12" sm="12" md="4" xs="2">
      <Card :cardId="i" :cardInfo="data"/>
    </v-col>
  </v-row>
</template>

<script>

import Card from "../components/Card.vue";

export default {
  name: 'About',

  components: {
    Card
  },

  data(){
    return{
       titleView: this.$store.title
    }
  },

  computed:{
    myCards(){
      return this.$store.cards
    }
  }

}
</script>
