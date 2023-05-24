<template>
  <div>
      <h1>All projects</h1>

      <v-row>
          <v-col cols="3" sm="1" md="4" v-for="(p, index) in data" :key="index" >
              <Project_card :project="p"/>
          </v-col>
      </v-row>
  </div>
</template>

<script setup>
    let data = await $fetch('/server/getprojects'); 
    console.log(data); 
</script>

<style scoped></style>