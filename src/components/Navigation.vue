<template>
    <v-navigation-drawer app color="secondary" absolute clipped>   
        <v-list dense nav>
          <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="text-h6">
                  Navegação
                </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item v-for="item in items" :key="item.title" link @click="$router.push(item.url)">

            <v-list-item-icon>
                <v-icon color="quaternary">{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Início', icon: 'mdi-home', url: "/"},
          { title: 'Casas', icon: 'mdi-tie', url: "/casas"},
          { title: 'Personagens', icon: 'mdi-account-group', url: "/personagens"},
          { title: 'Horcruxes', icon: 'mdi-eject', url: "/horcruxes"},
          { title: 'Matérias de Hogwarts', icon: 'mdi-bookshelf', url: "/materiasHogwarts"}
        ],
        right: null,
      }
    },
  }
</script>