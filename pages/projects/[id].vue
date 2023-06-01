<!-- <template>
  <div>
    <p id="new" >Project title:  </p>
    <p>We are hereeeeee with id {{ id }}</p>
  </div>
</template> -->

<template>
  <div>
    <p id="new">Project title:</p>
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
          <!-- <img src={{ project.image }} alt="project img" class="mx-auto my-7"> -->
        </div>
        <div class="p-7">
          <p class="mb">
            <!-- {{ project.Description }} -->
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem hic corporis enim, cupiditate voluptatum asperiores repellat, maiores alias delectus recusandae, itaque facilis consectetur fugit ipsam! Nam at tempora facere quo. Sunt fugiat dolores veritatis recusandae similique odio asperiores. Impedit dicta voluptatum dolorem rem molestias, natus libero, expedita facilis non eius aliquam iure eligendi ratione nihil. Rerum obcaecati dolorum, aspernatur recusandae sunt, perferendis odio esse vel fugit sit officiis. Quod quos, quo, qui voluptates voluptas nulla deserunt perferendis aliquam possimus iste dolores necessitatibus consequuntur in. Iste minima id tenetur maxime laboriosam hic ex! Sequi molestiae corrupti, corporis et repellat consequuntur laboriosam eligendi veritatis. Ducimus minima maiores vel iure nisi nostrum. Id tenetur eos quisquam enim sint animi repellat! Aliquid officia beatae consequuntur amet assumenda nesciunt odio velit, tempore et vitae ut quas minus. Itaque iure dolor dolores aliquam sint vel dignissimos nihil nostrum quam, incidunt expedita repellendus harum. Deleniti, dolore. Consequatur libero modi, amet blanditiis nam quibusdam repellat maxime autem, incidunt distinctio sunt. Mollitia deleniti unde consequuntur pariatur eum sint quia maxime tenetur et. Nemo eaque commodi velit, necessitatibus odio soluta error molestiae dolor unde possimus. Est eos voluptas consequatur sed dignissimos repellendus facilis exercitationem tenetur beatae quo, doloremque laudantium voluptates.
          </p>
        </div>
      </div>
    </div>

    <div class="p-4">
      <v-row>
        <v-col pl="8">
          <v-btn icon="mdi-arrow-left"><NuxtLink :to="`/projects/${prev}`">Prev</NuxtLink></v-btn>
        </v-col>
        <v-col pr="8" align-self="end">
          <v-btn icon="mdi-arrow-right"><NuxtLink :to="`/projects/${next}`">Next</NuxtLink></v-btn>
        </v-col>
      </v-row>
    </div>

    <div class="p-8">
      <h3 class="text-xl font-bold mb-4">Related categories</h3>
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
let prev = Math.max(0,+id - +1)
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
    document.getElementById("new").innerHTML = data[id-1].name + data[id-1].shortDescription;
    
  }
}
</script>
