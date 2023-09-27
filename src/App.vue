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
@font-face {
  font-family: "BelisaPlumilla";
  src: url("@/assets/fonts/Belisa_Plumilla.ttf");
  font-weight: normal;
  font-style: normal;
}

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

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "BelisaPlumilla", sans-serif;
}

h1 {
  font-size: 60px;
}
h2 {
  font-size: 54px;
}
h3 {
  font-size: 48px;
}
h4 {
  font-size: 42px;
}
h5 {
  font-size: 36px;
}
h6 {
  font-size: 30px;
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
