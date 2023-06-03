
<template>
  <div id="info" style="visibility:false">
    <v-card-title class="text-h6 text-md-h5 text-lg-h4" id="new"> {{ single[0].name }}</v-card-title>
    <p>We are hereeeeee with id {{ id }}</p> 
    <p>Next is  {{ next }}</p>
    <p>Prev is {{ prev }}</p>
  </div>

  <div class="pb-15">
    <div class="p-4">
      <h1 class="text-3xl font-bold mb-4"></h1>
    </div>

    <div class="card">
      <div class="grid grid-cols-2 gap-10">
        <div class="p-7">
          <v-img :src="single[0].image" height="200px" cover></v-img>
        </div>
        <div class="p-7">
          <p class="mb">
            {{ single[0].longDescription }}
           </p>
        </div>
      </div>
    </div>

    <div class="p-4">
      <v-row>
        <v-col cols="11" pl="8">
          <v-btn icon="mdi-arrow-left"><NuxtLink :to="`/projects/${prev}`">Prev</NuxtLink></v-btn>
        </v-col>
        <v-col pr="8">
          <v-btn icon="mdi-arrow-right"><NuxtLink :to="`/projects/${next}`">Next</NuxtLink></v-btn>
        </v-col>
      </v-row>
    </div>

    <div class="p-8">
      <v-card-title class="text-h6 text-md-h5 text-lg-h4" id="new"> {{ single[0].name }}</v-card-title>
    </div>

    <!-- <div calss="pb-15">
      <v-row>
        <v-col cols="12" sm="1" md="4" v-for="(c, index) in project.Categories" :key="index">
          <Category_card_id :category="c" />
        </v-col>
      </v-row>
    </div> -->
  </div>
</template>

<script setup>
const { id } = useRoute().params;
let next = Math.min( +id + +1, 15)
let prev = Math.max(0,+id - +1);
let single = await $fetch("/server/getprojects/"+id)
</script>

<script>
// export default {
//   data() {
//     return {
//       projectData: null
//     };
//   },
//   mounted() {
//     let data = JSON.parse(this.$route.query.projects);
//     let id = JSON.parse(this.$route.query.id);
//     document.getElementById("new").innerHTML = data[id-1].name;
//     document.getElementById("description_long").innerHTML= data[id-1].shortDescription; 
//   }
// }
</script>
