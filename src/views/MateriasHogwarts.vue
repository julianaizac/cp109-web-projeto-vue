<template>
    <v-container>
        <v-row no-gutters>
            <v-col v-for="(data, i) in cards" 
                    :key="i" cols="12" sm="12" md="4" xs="2">
                <CardMateriaHogwarts :cardInfo="data"/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

import CardMateriaHogwarts from "../components/CardMateriaHogwarts.vue"

export default {
    name: 'MateriaHogwarts',

    components: {
        CardMateriaHogwarts
    },

    computed:{
        cards(){
            return this.$store.state.cardsMateriasDeHogwarts
        }
    }
}


</script>