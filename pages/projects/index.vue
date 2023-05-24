<template>
  <div class="pb-15">
    <div class="p-4">
      <h1 class="text-3xl font-bold mb-4">All projects</h1>
    </div>

    <v-row>
      <v-col cols="3" sm="1" md="4" v-for="(p, index) in data" :key="index">
        <Project_card :project="p" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
let data = await $fetch("/server/getprojects");
console.log(data);

//the code below prevents the page from loading correctly - from vinh to sam
// let data = await $fetch("/server/getprojects");
// console.log(data);
</script>

<style scoped></style>
