<template>
  <div>
      <h1>All projects</h1>

      <v-row>
          <v-col cols="3" sm="1" md="4" v-for="(a, index) in areas" :key="index" >
              <Area_card :area="a"/>
          </v-col>
      </v-row>
  </div>
</template>

<script setup>
    const areas = [
        {"title": "Area1", "sector": "Health Care", "description": "fdsjakf"},
        {"title": "Area2", "sector": "Health Care", "description": "fdsjakf"},
        {"title": "Area3", "sector": "Finance", "description": "fdsjakf"}
    ]
</script>

<style scoped></style>