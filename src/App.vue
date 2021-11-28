<template>   
  <v-app app>
    <SystemBar></SystemBar>

    <AppBar></AppBar>
    <Navigation></Navigation>

    <v-content>
      <router-view></router-view>
    </v-content>

    <Footer></Footer>
      
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
  }
}

</script>