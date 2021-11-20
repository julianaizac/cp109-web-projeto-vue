<template>
    <v-footer padless app>
        <v-card flat tile class="tertiary darken-1 white--text text-center">
            <v-card-text>
                <v-btn v-for="icon in icons" :key="icon" class="mx-1 white--text" icon>
                    <v-icon size="24px">
                        {{ icon }}
                    </v-icon>
                </v-btn>
            </v-card-text>

            <v-card-text class="white--text pt-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati adipisci labore, natus, recusandae voluptates delectus laboriosam facere facilis incidunt, laudantium assumenda et officia animi! Culpa corporis obcaecati aliquid aspernatur pariatur.
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text class="white--text">
                {{ new Date().getFullYear() }} — <strong>Juliana Izac</strong>
            </v-card-text>
        </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-github',
        'mdi-linkedin'
      ],
    }),
  }
</script>