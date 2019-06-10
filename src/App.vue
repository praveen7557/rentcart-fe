<template>
  <div id="app">
    <Header v-if="!isHome"/>
    <router-view/>
    <AppFooter/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import AppFooter from "@/components/AppFooter.vue";
export default {
  name: "App",
  components: {
    AppFooter,
    Header
  },
  computed: {
    isHome() {
      let route = this.$route.name;
      return route == "home";
    }
  }
};
</script>

<style lang="scss">
@import "./styles/app.scss";
</style>
