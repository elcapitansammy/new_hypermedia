<template>
  <div>
    <!-- <p>Project title: {{ project.name }}</p> -->
    <p>We are hereeeeee with id {{ id }}</p>
  </div>
</template>

<script setup>
<<<<<<< Updated upstream
  const {id} = useRoute().params
  try {
    let data = await $fetch("/server/getprojects");
    console.log(data);
  } catch (error) {
    console.error(error);
  }
=======
const { id } = useRoute().params;

// let data = await $fetch("/server/getprojects");
// console.log("projects data", data);

let data1 = await $fetch("/server/getprojects/1");
console.log("data1", data1);
>>>>>>> Stashed changes
</script>
