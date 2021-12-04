<template>
  <v-card class="mx-auto my-3" max-width="350" height="250" outlined elevation="1">
    <v-list-item three-line>

      <v-list-item-content>
        <div class="text-overline mb-4">
          {{cardInfo.house}}
        </div>

        <v-list-item-title class="text-h5 mb-1">
          {{cardInfo.name}}
        </v-list-item-title>

        <v-list-item-subtitle class="text-h6 mb-1">
          Patronus: {{cardInfo.patronus}}
        </v-list-item-subtitle>

        <v-list-item-subtitle class="text-h7 mb-5">
          Date of birth: {{cardInfo.dateOfBirth}}
        </v-list-item-subtitle>

        <v-list-item-subtitle class="text-h6 mb-1">
          Actor: {{cardInfo.actor}}
        </v-list-item-subtitle>

      </v-list-item-content>

      <v-list-item-avatar size="80">
        <v-img :src="cardInfo.image"></v-img>
      </v-list-item-avatar>
    </v-list-item>
  </v-card>
</template>

<script>

export default{
    props:['cardInfo']
}

</script>