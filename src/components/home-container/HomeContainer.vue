<template>
  <section>
    <div class="home-wrapper">
      <h1>Szia! Indulhat a játék?</h1>
      <div class="home-wrapper__button-container">
        <router-link to="/options">Igen-igen, kezdjük már!</router-link>
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
  position: relative;

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
      font-family: "BelisaPlumilla", sans-serif;
      letter-spacing: 1px;
      font-size: 54px;
      max-width: 500px;
      width: 100%;
      font-weight: bold;
      color: #fff;
      text-decoration: none;
      border-radius: 10px;
      transition: background-color .2s ease-in-out;

      &:hover {
        background-color: rgb(4, 125, 0);
      }
    }
  }
}
</style>
