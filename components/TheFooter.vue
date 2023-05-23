<template>
  <div>
    <!-- <ul>
      <li>Copyright - {{ date.getFullYear() }}</li>
    </ul> -->
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="(link, index) in links"
        :key="index"
        color="white"
        variant="text"
        class="mx-2"
        rounded="xl"
      >
      <NuxtLink :to="`/about/${link.url}`">{{link.title}}</NuxtLink>
      </v-btn>
      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
const date = ref(new Date())

const links = [
  {"url": "history", "title": "History"},
  {"url": "newsletter", "title": "Newsletter"},
  {"url": "legal", "title": "Legal"}
]
</script>

<style scoped lang="scss">
div {
  background-color: black;
  color: #fff;
  padding: 0.2rem;

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
