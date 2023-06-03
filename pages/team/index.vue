<template>
  <div class="pb-15">
    <div class="p-4">
      <v-card-title class="text-h6 text-md-h5 text-lg-h4">Our team</v-card-title>
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
