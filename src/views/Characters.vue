<template>
    <v-container>
        <h2>All characters</h2>

        <v-divider></v-divider>

        <v-row no-gutters>
            <v-col v-for="(data, i) in getterCharacters" 
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
        getterCharacters() {
            return this.$store.getters.allCharacters
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