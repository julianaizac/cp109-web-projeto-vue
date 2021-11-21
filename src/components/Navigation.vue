<template>
    <v-navigation-drawer app color="secondary" absolute clipped>   
        <v-list dense nav>
          <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="text-h6">
                    Lorem
                </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>
          <v-list-item v-for="item in items" :key="item.title" link>

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
          { title: 'Lorem', icon: 'mdi-view-dashboard' },
          { title: 'Lorem', icon: 'mdi-image' },
          { title: 'Lorem', icon: 'mdi-help-box' },
        ],
        right: null,
      }
    },
  }
</script>