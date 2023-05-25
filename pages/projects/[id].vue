<template>
  <div>
    <!-- <p>Project title: {{ project.name }}</p> -->
    <p>We are here</p>
  </div>
</template>

<script setup>
  const {id} = useRoute().params

  const uri = 'http://localhost:3001/server/getprojects/' + id

  const { data: project} = await useFetch(uri)

  console.log(project)

</script>
