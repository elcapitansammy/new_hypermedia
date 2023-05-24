<template>
  <div class="pb-15">
    <div class="p-4">
      <h1 class="text-3xl font-bold mb-4">All projects</h1>
    </div>

    <v-row>
      <v-col cols="3" sm="1" md="4" v-for="(p, index) in template" :key="index">
        <Project_card :project="p" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
const template = [
  {
    title: "Project1",
    description: "short description goes here",
    image: "https://picsum.photos/600/600",
  },
  {
    title: "Project2",
    description: "short description goes here",
    image: "https://picsum.photos/600/600",
  },
  {
    title: "Project3",
    description: "short description goes here",
    image: "https://picsum.photos/600/600",
  },
  {
    title: "Project4",
    description: "short description goes here",
    image: "https://picsum.photos/600/600",
  },
  {
    title: "Project5",
    description: "short description goes here",
    image: "https://picsum.photos/600/600",
  },
  {
    title: "Project6",
    description: "short description goes here",
    image: "https://picsum.photos/600/600",
  },
];
</script>

<style scoped></style>
