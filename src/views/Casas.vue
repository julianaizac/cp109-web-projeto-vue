<template>
    <v-container>
        <v-row no-gutters>
            <v-col v-for="(data, i) in cards" :key="i">
                <CardCasas :cardInfo="data"/>
            </v-col>
        </v-row>
    </v-container>
    
</template>

<script>

import CardCasas from "../components/CardCasas.vue"

export default {
    name: 'Casas',

    components: {
        CardCasas
    },

    computed:{
        cards(){
            return this.$store.state.cardsCasas
        }
    }
}


</script>