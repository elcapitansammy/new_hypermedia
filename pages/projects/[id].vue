<template>
  <div>
    <p id="new" >Project title:  </p>
    <p>We are hereeeeee with id {{ id }}</p>
  </div>
</template>

<script setup>
const { id } = useRoute().params; 
</script>

<script>
export default {
  data() {
    return {
      projectData: null
    };
  },
  mounted() {
    let data = JSON.parse(this.$route.query.projects);
    let id = JSON.parse(this.$route.query.id);
    document.getElementById("new").innerHTML = data[id-1].name;
  }
}
</script>
