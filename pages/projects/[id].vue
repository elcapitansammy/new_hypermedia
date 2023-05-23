<template>
  <div>
    <p>Project id: {{ id }}</p>
  </div>
</template>

<script setup>
  const {id} = useRoute().params
</script>
