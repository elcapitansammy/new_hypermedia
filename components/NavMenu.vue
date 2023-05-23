<script>
  export default {
    data: () => ({
      tab: null,
    }),
  }
</script>


<template>
    <v-card>
      <v-tabs
        v-model="tab"
        color="deep-purple-accent-4"
        align-tabs="center"
      >
      <NuxtLink to="/"><v-tab>Home</v-tab></NuxtLink>
      
      <NuxtLink to="/projects"><v-tab>Projects</v-tab></NuxtLink>
        
      <NuxtLink to="/Areas"><v-tab>Areas</v-tab></NuxtLink>
        
      <NuxtLink to="/persons"><v-tab>People</v-tab></NuxtLink>
        
      </v-tabs>
    </v-card>
  </template>