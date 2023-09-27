<template>
  <site-header />
  <main>
    <router-view />
  </main>
  <site-footer />
</template>

<script>
import SiteHeader from "@/components/site-header/SiteHeader.vue";
import SiteFooter from "@/components/site-footer/SiteFooter.vue";

export default {
  components: { SiteHeader, SiteFooter },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  main {
    min-height: 80vh;
    padding-block: 2rem;
  }
}

a,
p,
span,
ul {
  font-size: 16px;
}

a {
  color: #343434;
  text-decoration: none;
}
</style>
