<template>
  <header class="header">
    <div>
      <nav class="header__nav">
        <router-link to="/">Home</router-link>

        <div class="header__nav__link-container">
          <p>Show DEV options</p>
          <div class="header__nav__link-container__hidden-links">
            <router-link to="/options">Options API</router-link>
            <router-link to="/composition">Composition API</router-link>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: relative;
  width: 100%;
  min-height: 10vh;
  padding-block: 2rem;
  background-color: #efefef;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;

  &__nav {
    &__link-container {
      position: absolute;
      right: 10%;
      top: 50%;
      transform: translate(-50%, -50%);

      &:hover {
        .header__nav__link-container__hidden-links {
          opacity: 1;
          visibility: visible;
          transform: translateY(40%);
        }
      }

      p {
        cursor: pointer;
      }

      &__hidden-links {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(0%);
        opacity: 0;
        visibility: hidden;
        transition: all .25s ease-in-out;

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;

        a {
          padding: 1rem;
          color: #ffffff;
          font-size: 18px;
          background-color: #848484;
          box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          white-space: nowrap;

          &:hover {
            background-color: #343434; 
          }
        }
      }
    }
  }
}
</style>
