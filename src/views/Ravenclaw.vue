<template>
    <v-container>
        <h2>Ravenclaw characters</h2>
        
        <v-divider></v-divider>
        <v-row no-gutters>
            <v-col v-for="(data, i) in getterRavenclawCharacters" 
                    :key="i" cols="12" sm="12" md="4" xs="2">
                <CardCharacter :cardInfo="data"/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

import CardCharacter from "../components/CardCharacter.vue"

export default {
    name: 'Ravenclaw',

    components: {
        CardCharacter
    },

    computed: {
        getterRavenclawCharacters() {
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