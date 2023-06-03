<template>
  <div class="pb-15">
    <div class="p-4">
      <v-card-title class="text-h6 text-md-h5 text-lg-h4">All categories</v-card-title>
    </div>
    <v-row>
      <v-col cols="3" sm="1" md="4" v-for="(a, index) in data" :key="index">
        <Category_card :category="a" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
let data = await $fetch("/server/getareas");
console.log(data);
const category = [
  {
    title: "Category1",
    sector: "Health Care",
    description: "Short description goes here.",
    image: "https://picsum.photos/600/600",
  },
  {
    title: "Category2",
    sector: "Health Care",
    description: "Short description goes here.",
    image: "https://picsum.photos/600/600",
  },
  {
    title: "Category3",
    sector: "Finance",
    description: "Short description goes here.",
    image: "https://picsum.photos/600/600",
  },
];
</script>

<style scoped></style>
