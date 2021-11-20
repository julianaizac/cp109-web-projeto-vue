<template>
  <v-app>

    <AppBar></AppBar>
    <Navigation></Navigation>

    <v-main app>
      <Content></Content>
    </v-main>
    
    <Footer></Footer>
    <Bottom></Bottom>
      
  </v-app>
</template>

<script>

import AppBar from "./components/AppBar.vue";
import Bottom from "./components/Bottom.vue";
import Content from "./components/Content.vue";
import Footer from "./components/Footer.vue";
import Navigation from "./components/Navigation.vue";


export default {
  name: 'App',
  components: {
    AppBar,
    Bottom,
    Content,
    Footer,
    Navigation
  }
}
</script>

<style>

</style>
