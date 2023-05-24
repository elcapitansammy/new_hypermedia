<template>
  <div class="pb-15">
    <div class="p-4">
      <h1 class="text-3xl font-bold mb-4">Our team</h1>
    </div>

    <v-row>
      <v-col cols="3" sm="1" md="4" v-for="(p, index) in data" :key="index">
        <Person_card :person="p" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
let data = await $fetch("/server/getpeople");
console.log(data);
</script>

<style scoped></style>
