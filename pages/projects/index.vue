<template>
  <div>
      <h1>All projects</h1>

      <v-row>
          <v-col cols="3" sm="1" md="4" v-for="(p, index) in template" :key="index" >
              <Project_card :project="p"/>
          </v-col>
      </v-row>
  </div>
</template>

<script setup>
    const template = [
        {"title": "Project1", "description": "fdsjakf"},
        {"title": "Project2", "description": "fdsjakf"},
        {"title": "Project3", "description": "fdsjakf"},
        {"title": "Project4", "description": "fdsjakf"},
        {"title": "Project5", "description": "fdsjakf"},
        {"title": "Project6", "description": "fdsjakf"},
    ]
</script>

<style scoped></style>