<template>
  <section>
    <div class="home-wrapper">
      <h1>Choose a project</h1>
      <div class="home-wrapper__button-container">
        <router-link to="/options">Options API</router-link>
        <router-link to="/compositions">Compositions API</router-link>
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
