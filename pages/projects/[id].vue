<template>
  <div>
    <!-- <p>Project title: {{ project.name }}</p> -->
    <p>We are here</p>
  </div>
</template>

<script setup>
  const {id} = useRoute().params
  try {
    let data = await $fetch("/server/getprojects");
    console.log(data);
  } catch (error) {
    console.error(error);
  }
</script>
