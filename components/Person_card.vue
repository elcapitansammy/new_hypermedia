<template>
    <v-card
      class="mx-auto"
      max-width="344"
      color="#f0e9e9"
    >
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        height="200px"
        cover
      ></v-img>
  
      <v-card-title>
        {{person.name}}
      </v-card-title>
  
      <v-card-subtitle>
        {{person.email}}
      </v-card-subtitle>
  
      <v-card-actions>
        <v-btn
          color="orange-lighten-2"
          variant="text"
        >
          See more
        </v-btn>
  
        <v-spacer></v-spacer>
  
        <v-btn
          :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="show = !show"
        ></v-btn>
      </v-card-actions>
  
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
  
          <v-card-text>
            {{person.Description}}
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </template>

<script setup>
  const { person } = defineProps(['person'])
</script>

<script>
export default {
  data: () => ({
    show: false,
  }),
}
</script>