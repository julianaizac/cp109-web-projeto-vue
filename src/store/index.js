import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex);

const state = {
    characters: []
}

const getters = {
    
    allCharacters: (state) => state.characters,
    allGryffindor: (state) => state.characters.filter(character => character.house == "Gryffindor"),
    allSlytherin: (state) => state.characters.filter(character => character.house == "Slytherin"),
    allHufflepuff: (state) => state.characters.filter(character => character.house == "Hufflepuff"),
    allRavenclaw: (state) => state.characters.filter(character => character.house == "Ravenclaw")

}

const actions = {
    getCharacters({ commit }) {
        axios.get('http://hp-api.herokuapp.com/api/characters')
            .then(response => {
                commit('setCharacters', response.data)
           })
    }
}

const mutations = {
    setCharacters(state, characters) {
        state.characters = characters
    }
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})