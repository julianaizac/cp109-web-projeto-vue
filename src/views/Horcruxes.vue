<template>
    <v-container>
        <v-row no-gutters>
            <v-col v-for="(data, i) in cards" 
                    :key="i" cols="12" sm="12" md="4" xs="2">
                <CardHorcrux :cardInfo="data"/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

import CardHorcrux from "../components/CardHorcrux.vue"

export default {
    name: 'Horcruxes',

    components: {
        CardHorcrux
    },

    computed:{
        cards(){
            return this.$store.state.cardsHorcruxes
        }
    }
}


</script>