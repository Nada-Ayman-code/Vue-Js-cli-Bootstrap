<template>
  <div class="d-flex flex-column min-vh-100">
    <MyNav />

    <!-- Main content -->
    <main class="flex-fill">
      <router-view />
    </main>

    <!-- Footer always at bottom -->
    <MyAppFooter />
  </div>
</template>

<script>
import MyNav from "@/components/NavBar.vue";
import MyAppFooter from "@/components/MyAppFooter.vue";

export default {
  components: {
    MyNav,
    MyAppFooter,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
