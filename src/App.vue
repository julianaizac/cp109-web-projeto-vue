<template>   
  <v-app app>
    <SystemBar></SystemBar>

    <AppBar :items="items"></AppBar>
    <Navigation :items="items"></Navigation>

    <v-content>
      <router-view></router-view>
    </v-content>

    <Footer :items="items"></Footer>
      
  </v-app>
</template>

<script>

import AppBar from "./components/AppBar.vue";
import Footer from "./components/Footer.vue";
import Navigation from "./components/Navigation.vue";
import SystemBar from "./components/SystemBar.vue";


export default {
  name: 'App',
  components: {
    AppBar,
    Footer,
    Navigation,
    SystemBar
  },
  data () {
      return {
        items: [
          { title: 'Home', icon: 'mdi-home', url: "/"},
          { title: 'All characters', icon: 'mdi-account-group', url: "/characters"},
          { title: 'Gryffindor characters', icon: 'mdi-paw', url: "/characters/gryffindor"},
          { title: 'Slytherin characters', icon: 'mdi-snake', url: "/characters/slytherin"},
          { title: 'Ravenclaw characters', icon: 'mdi-bird', url: "/characters/ravenclaw"},
          { title: 'Hufflepuff characters', icon: 'mdi-cat', url: "/characters/hufflepuff"}
        ],
        right: null,
      }
    }
}

</script>