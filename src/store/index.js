import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cardsCasas: [
            {
                nome: "Grifinória",
                criador: "Godric Gryffindor",
                animalSimbolo: "Leão",
                fantasma: "Sir Nicholas de Mimsy-Porpington (Nick Quase-Sem-Cabeça)",
                urlImagem: "grifinoria.jpg"
            }, {
                nome: "Sonserina",
                criador: "Salazar Slytherin",
                animalSimbolo: "Cobra",
                fantasma: "Barão Sangrento",
                urlImagem: "sonserina.jpg"
            }, {
                nome: "Corvinal",
                criador: "Rowena Ravenclaw",
                animalSimbolo: "Águia",
                fantasma: "Helena Ravenclaw (Dama Cinzenta)",
                urlImagem: "corvinal.jpg"
            }, {
                nome: "Lufa-Lufa",
                criador: "Helga Hufflepuff",
                animalSimbolo: "Texugo",
                fantasma: "Frei Gorducho",
                urlImagem: "lufalufa.jpg"
            }
        ],
        cardsPersonagens: [
            {
                nome: "Harry Potter",
                nascimento: "31 de julho de 1980",
                casaDeHogwarts: "Grifinória",
                urlImagem: "harrypotter.jpg"
            },{
                nome: "Ronald Weasley",
                nascimento: "1 de março de 1980",
                casaDeHogwarts: "Grifinória",
                urlImagem: "weasley.jpg"
            },{
                nome: "Hermione Granger",
                nascimento: "19 de setembro de 1979",
                casaDeHogwarts: "Grifinória",
                urlImagem: "hermione.jpg"
            },{
                nome: "Draco Malfoy",
                nascimento: "5 de junho de 1980",
                casaDeHogwarts: "Sonserina",
                urlImagem: "malfoy.jpg"
            },
        ],
        cardsMateriasDeHogwarts: [
            {
                nome: "Defesa Contra as Artes das Trevas",
                descricao: "Defesa Contra as Artes das Trevas é uma matéria obrigatória na Escola de Magia e Bruxaria de Hogwarts, na qual os alunos aprendem como se defender magicamente contra Criaturas das Trevas e contra as Artes das Trevas.",
                urlImagem: "defesa.jpg"
            },{
                nome: "Poções",
                descricao: "Poções é uma matéria obrigatória e lecionada na Escola de Magia e Bruxaria de Hogwarts. Nesta aula, os alunos aprendem a maneira correta de preparar poções. Eles seguem receitas específicas e usam vários ingredientes mágicos para criar as poções, começando com as simples e movendo-se para as mais avançados à medida que progridem no conhecimento.",
                urlImagem: "pocoes.png"
            },{
                nome: "Herbologia",
                descricao: "A Herbologia é uma matéria lecionada nas estufas de Hogwarts, basicamente o estudo das plantas do mundo bruxo.O atual professor é Neville Longbottom, a antiga é a Professora Pomona Sprout. Aprender Herbologia é muito importante para o preparo de algumas poções e alguns medicamentos, algumas profissões no mundo bruxo exigem tirar boas notas nos N.O.M.s e N.I.E.M.s  de Herbologia.",
                urlImagem: "herbologia.jpg"
            },{
                nome: "Transfiguração",
                descricao: "A Transfiguração é uma das principais matérias lecionadas na Escola de Magia e Bruxaria de Hogwarts. Ela ensina a arte de mudar a forma e aparência de um objeto.",
                urlImagem: "transfiguracao.jpg"
            },
        ],
        cardsHorcruxes: [
            {
                nome: "Diário de Riddle",
                urlImagem: "diario.jpg"
            },{
                nome: "Anel dos Gaunt",
                urlImagem: "anel.jpg"
            },{
                nome: "Medalhão de Sonserina",
                urlImagem: "medalhao.jpg"
            },{
                nome: "Taça de Lufa-Lufa",
                urlImagem: "taca.jpg"
            },{
                nome: "Diadema de Rowena Ravenclaw",
                urlImagem: "diadema.jpg"
            },{
                nome: "Nagini",
                urlImagem: ""
            },{
                nome: "Harry Potter",
                urlImagem: ""
            },
        ]
    },
    mutations: {
        
    },
    actions: {

    },
    getters: {
    
    }
})
