<template>
  <site-header />
  <main-site-container />
  <site-footer />
</template>

<script>
import SiteHeader from "@/components/site-header/SiteHeader.vue";
import SiteFooter from "@/components/site-footer/SiteFooter.vue";
import MainSiteContainer from "@/components/main-site-container/MainSiteContainer.vue";

export default {
  components: { SiteHeader, SiteFooter, MainSiteContainer },
};
</script>

<style lang="scss">
@font-face {
  font-family: "BelisaPlumilla";
  src: url("@/assets/fonts/Belisa_Plumilla.ttf");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "Gabarito";
  src: url("@/assets/fonts/Gabarito-Regular.ttf");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "Gabarito";
  src: url("@/assets/fonts/Gabarito-Medium.ttf");
  font-weight: 500;
  font-style: normal;
}
@font-face {
  font-family: "Gabarito";
  src: url("@/assets/fonts/Gabarito-Bold.ttf");
  font-weight: 600;
  font-style: normal;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "BelisaPlumilla", sans-serif;
  letter-spacing: 1px;
}

h1 {
  font-size: 55px;
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
  text-decoration: none;
}
</style>
