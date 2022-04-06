<template>
  <main>
    <navigation-bar></navigation-bar>
    <router-view />
  </main>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";
export default {
  components: {
    NavigationBar,
  },
};
</script>
<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
