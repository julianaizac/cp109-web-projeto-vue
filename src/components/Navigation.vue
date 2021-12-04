<template>
    <v-navigation-drawer app color="secondary" clipped tile height="100%" permanent dense fixed>   
      <v-list dense nav>
          <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="text-h6">
                  MARAUDER'S MAP
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
export default{
    props:['items']
}
</script>