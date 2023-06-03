<template>
  <div class="pb-15">
    <div class="p-4">
      <v-card-title class="text-h6 text-md-h5 text-lg-h4">All projects</v-card-title>
    </div>

    <v-row>
      <v-col cols="3" sm="1" md="4" v-for="(p, index) in data" :key="index">
        <NuxtLink :to="`/projects/${p.id}`"><Project_card :project="p" /></NuxtLink>
      </v-col>
    </v-row>
    {{ test }}
  </div>
</template>

<script setup>
let data = await $fetch("/server/getprojects");
console.log("projects data", data);
let jsondata= JSON.stringify(data)
</script>
<style scoped></style>
