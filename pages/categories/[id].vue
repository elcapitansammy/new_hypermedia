<template>
  <div>
    <p>Area id: {{ id }}</p>
  </div>
</template>

<script setup>
const {
  params: { id },
} = useRoute()
</script>
