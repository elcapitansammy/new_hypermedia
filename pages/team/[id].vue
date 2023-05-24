<template>
  <div>
    <p>Person id: {{ id }}</p>
  </div>
</template>

<script setup>
const {
  params: { id },
} = useRoute()
</script>
