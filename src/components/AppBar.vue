<template>
    <v-app-bar app clipped-left color="primary" dark>
        <v-toolbar-title>The Leaky Cauldron</v-toolbar-title>

        <v-spacer></v-spacer>

        <div class="d-flex flex-row">
            <v-list-item v-for="item in items" :key="item.title" link @click="$router.push(item.url)">
                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </div>
    </v-app-bar>
</template>

<script>
export default{
    props:['items']
}
</script>