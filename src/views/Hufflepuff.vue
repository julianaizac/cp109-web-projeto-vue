<template>
    <v-container>
        <h2>Hufflepuff characters</h2>
        
        <v-divider></v-divider>
        <v-row no-gutters>
            <v-col v-for="(data, i) in getterHufflepuffCharacters" 
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
        getterHufflepuffCharacters() {
            return this.$store.getters.allHufflepuff
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