<template>
    <v-container>
        <h2>Gryffindor characters</h2>
        
        <v-divider></v-divider>

        <v-row no-gutters>
            <v-col v-for="(data, i) in getterGryffindorCharacters" 
                    :key="i" cols="12" sm="12" md="4" xs="2">
                <CardCharacter :cardInfo="data"/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

import CardCharacter from "../components/CardCharacter.vue"

export default {
    name: 'Characters',

    components: {
        CardCharacter
    },

    computed: {
        getterGryffindorCharacters() {
            return this.$store.getters.allGryffindor
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