<template>
  <div class="home-container">
    <img class="logo-image" src="../assets/logo_text.png" alt="Logo" />
    <div class="arrow-down" @click="scrollToContent">
      <i class="fa fa-chevron-down"></i>
    </div>
    <div class="bottom-text">
      <p>Scroll down to explore more!</p>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  padding-top: 4em;
  align-items: center;
  height: 100vh;
}

.logo-image {
  width: 40vw;
  height: auto;
  padding-bottom: 5em;
}

.arrow-down {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 2em;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  font-size: 24px;
  color: #888;
  transition: transform 0.3s;
}

.arrow-down:hover {
  transform: translateX(-50%) scale(1.1);
}

.fa-chevron-down {
  margin-top: 0.5em;
}

.bottom-text {
  position: absolute;
  bottom: 1em;
  text-align: center;
  width: 100%;
  color: #888;
  font-size: 18px;
}
</style>

<script>
export default {
  methods: {
    scrollToContent() {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    },
  },
};
</script>
