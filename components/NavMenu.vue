<script>
export default {
  data: () => ({
    tab: null,
  }),
};
</script>

<template>
  <v-card>
    <v-tabs v-model="tab" color="#203C8A" align-tabs="center">
      <NuxtLink to="/"><v-tab>Home</v-tab></NuxtLink>
      <NuxtLink to="/categories"><v-tab>Categories</v-tab></NuxtLink>
      <NuxtLink to="/projects"><v-tab>Projects</v-tab></NuxtLink>
      <NuxtLink to="/team"><v-tab>Team</v-tab></NuxtLink>
    </v-tabs>
  </v-card>
</template>

<style scoped>
.v-btn__underlay {
  text-decoration: none;
}
</style>
