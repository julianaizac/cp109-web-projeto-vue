<template>
    <v-container>
        <v-row no-gutters>
            <v-col v-for="(data, i) in cards" 
                    :key="i" cols="12" sm="12" md="4" xs="2">
                <CardPersonagem :cardInfo="data"/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

import CardPersonagem from "../components/CardPersonagem.vue"

export default {
    name: 'Personagens',

    components: {
        CardPersonagem
    },

    computed:{
        cards(){
            return this.$store.state.cardsPersonagens
        }
    }
}

</script>