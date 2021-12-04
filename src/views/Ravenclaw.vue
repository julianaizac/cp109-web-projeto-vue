<template>
    <v-container>
        <h2>Ravenclaw characters</h2>
        
        <v-divider></v-divider>
        <v-row no-gutters>
            <v-col v-for="(data, i) in getterCharacters" 
                    :key="i" cols="12" sm="12" md="4" xs="2">
                <CardPersonagem :cardInfo="data"/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

import CardPersonagem from "../components/CardPersonagem.vue"

export default {
    name: 'Ravenclaw',

    components: {
        CardPersonagem
    },

    computed: {
        getterCharacters() {
            return this.$store.getters.allRavenclaw
        },
        users() {
            return this.$store.state.characters
        }
    },
    mounted() {
        this.$store.dispatch("getCharacters");
    }

}

</script>