<template>
  <div>
    <!-- <p>Project title: {{ project.name }}</p> -->
    <p>We are hereeeeee with id {{ id }}</p>
  </div>
</template>

<script setup>
const { id } = useRoute().params;
</script>
