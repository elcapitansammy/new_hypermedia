<template>
  <div>
      <h1>All projects</h1>

      <v-row>
          <v-col cols="3" sm="1" md="4" v-for="(p, index) in persons" :key="index" >
              <Person_card :person="p"/>
          </v-col>
      </v-row>
  </div>
</template>

<script setup>
    const persons = [
        {"name": "Jo", "surname": "Smith", "description": "fdsjakf"},
        {"name": "John", "surname": "Smith", "description": "fdsjakf"},
        {"name": "J", "surname": "Smith", "description": "fdsjakf"},
        {"name": "J", "surname": "Smith", "description": "fdsjakf"},
        {"name": "J", "surname": "Smith", "description": "fdsjakf"},
        {"name": "J", "surname": "Smith", "description": "fdsjakf"},
    ]
</script>

<style scoped></style>