import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cardsAlbums: [
            {
                title: "Map of the Soul: 7",
                description: "Foi lançado em 21 de fevereiro de 2020 pela Big Hit Entertainment, tendo a faixa Black swan como primeiro single promocional, e ON como single principal."
            },
            {
                title: "Wings",
                description: "O álbum foi lançado em 10 de outubro de 2016."
            },
            {
                title: "Love Yourself: Tear",
                description: "O álbum foi lançado no dia 18 de maio de 2018 pela Big Hit Entertainment."
            },
            {
                title: "Love Yourself: Answer",
                description: "É o terceiro álbum de coletânea coreano do grupo. O álbum foi lançado no dia 24 de agosto de 2018 pela Big Hit Entertainment"
            }
        ],
        cardsMusicas: [
            {
                title: "Singularity",
                description: "Música cantada pelo V"
            },
            {
                title: "Euphoria",
                description: "Música cantada pelo Jungkook"
            },
            {
                title: "Just Dance",
                description: "Música cantada pelo J-Hope"
            },
            {
                title: "Awake",
                description: "Música cantada pelo Jin"
            }
        ],
        cardsSeries: [
            {
                title: "Bon Voyage 1",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat minima ipsam, quos, quasi fugit quod reprehenderit odit dolor vel a libero molestias incidunt illum? Libero dolores inventore sint consequuntur pariatur."
            },
            {
                title: "Bon Voyage 2",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat minima ipsam, quos, quasi fugit quod reprehenderit odit dolor vel a libero molestias incidunt illum? Libero dolores inventore sint consequuntur pariatur."
            },
            {
                title: "In the Soop 1",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat minima ipsam, quos, quasi fugit quod reprehenderit odit dolor vel a libero molestias incidunt illum? Libero dolores inventore sint consequuntur pariatur."
            },
            {
                title: "In the Soop 2",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat minima ipsam, quos, quasi fugit quod reprehenderit odit dolor vel a libero molestias incidunt illum? Libero dolores inventore sint consequuntur pariatur."
            }
        ]
    },
    mutations: {
        
    },
    actions: {

    },
    getters: {
    
    }
})
