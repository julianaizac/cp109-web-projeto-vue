<template>
  <v-app app>
    <SystemBar></SystemBar>

    <AppBar></AppBar>
    <Navigation></Navigation>

    <v-main>
      <Content></Content>
    </v-main>

    <Footer></Footer>
      
  </v-app>
</template>

<script>

import AppBar from "./components/AppBar.vue";
import Content from "./components/Content.vue";
import Footer from "./components/Footer.vue";
import Navigation from "./components/Navigation.vue";
import SystemBar from "./components/SystemBar.vue";


export default {
  name: 'App',
  components: {
    AppBar,
    Content,
    Footer,
    Navigation,
    SystemBar
  }
}
</script>

<style>

</style>
