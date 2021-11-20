<template>
  <v-app app>

    <AppBar></AppBar>
    <Navigation></Navigation>

    <v-main app>
      <Content></Content>
    </v-main>

    <Bottom></Bottom>
    <Footer></Footer>
    
      
  </v-app>
</template>

<script>

import AppBar from "./components/AppBar.vue";
import Content from "./components/Content.vue";
import Footer from "./components/Footer.vue";
import Navigation from "./components/Navigation.vue";


export default {
  name: 'App',
  components: {
    AppBar,
    Content,
    Footer,
    Navigation
  }
}
</script>

<style>

</style>
