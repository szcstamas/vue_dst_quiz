<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

a,
p,
span,
ul {
  font-size: 16px;
}

header {
  width: 100%;
  padding-block: 2rem;
  background-color: #efefef;
  text-align: center;
  margin-bottom: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
}

a {
  color: #343434;
  text-decoration: none;
}
</style>
