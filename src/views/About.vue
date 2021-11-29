<template>
  <v-container>
    <v-row no-gutters>
      <v-col v-for="{data, i} in cards" 
            :key="i" cols="12" sm="12" md="4" xs="2">
        {{data}}
        <!--<Card :cardId="i" :cardInfo="data"/>-->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

//import Card from "../components/Card.vue";

export default {
  name: 'About',

  components: {
    //Card
  },

  computed:{
    cards(){
      console.log(this.$store.state.cards)
      return this.$store.state.cards
    }
  }

}
</script>
