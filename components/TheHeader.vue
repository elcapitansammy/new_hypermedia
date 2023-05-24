<script>
import NavBar from "./Navbar.vue";
import NavMenu from "./NavMenu.vue";

export default {
  data: () => ({
    tab: null,
  }),
};
</script>

<template>
  <NavMenu class="nav-menu"></NavMenu>
</template>

<style scoped>
.nav-menu {
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
