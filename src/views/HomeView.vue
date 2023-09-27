<template>
  <section>
    <div class="home-wrapper">
      <img class="home-wrapper__site-logo" src="@/assets/images/dont_starve_together_logo.webp" alt="Don't Starve Together logo">
      <h1>Choose a project</h1>
      <div class="home-wrapper__button-container">
        <router-link to="/options">Options API</router-link>
        <router-link to="/composition">Compositions API</router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.home-wrapper {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;

  &__site-logo {
    display: block;
    max-width: 250px;
    margin: auto;
    animation: levitating 4s ease-in-out infinite;

    @keyframes levitating {
      0% { transform: translateY(-5%)}
      50% { transform: translateY(5%)}
      100% { transform: translateY(-5%)}
    }
  }

  &__button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    width: 100%;
    max-width: 1000px; 
    margin: auto;

    a {
      flex: 1;
      padding: 2rem;
      background-color: rgb(3, 94, 0);
      font-size: 20px;
      font-weight: bold;
      color: #fff;
      text-decoration: none;
      border-radius: 10px;
    }
  }
}
</style>
