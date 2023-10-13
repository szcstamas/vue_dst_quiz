<template>
  <header class="header">
    <nav class="header__nav">
      <router-link to="/" class="header__nav__homepage-link"
        >Don't Starve Quiz</router-link
      >
      <div class="header__nav__quiz-scrollbar">
        <div
          class="header__nav__quiz-scrollbar__fillment"
          :style="{ width: `${actualPercent}%` }"
        ></div>
      </div>
      <div class="header__nav__quiz-counter">
        {{ currentQuestionNumber }} / {{ questionsLength }}
      </div>
      <div class="header__nav__link-container">
        <p>Show DEV options</p>
        <div class="header__nav__link-container__hidden-links">
          <router-link to="/options">Options API</router-link>
          <router-link to="/composition">Composition API</router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { useQuestionStore } from "@/stores/piniaStore";

export default {
  computed: {
    actualPercent() {
      return (
        (100 / useQuestionStore().getters.questionsLength()) *
        useQuestionStore().actualIndexOfQuestion
      );
    },

    questionsLength() {
      return useQuestionStore().getters.questionsLength();
    },

    currentQuestionNumber() {
      return useQuestionStore().actualIndexOfQuestion;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  width: 100%;
  min-height: 10vh;
  height: 10vh;
  padding-block: 2rem;
  padding-inline: 1rem;
  color: #ffffff;
  background-color: #252525;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;

  &__nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1440px;

    &__quiz-scrollbar {
      position: relative;
      background-color: #939393;
      height: 20px;
      width: 50%;
      border-radius: 10px;
      overflow: hidden;

      &__fillment {
        position: absolute;
        width: 50%;
        height: 100%;
        background-color: #ffffff;
        box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);
        object-fit: cover;
        border-radius: 10px;
        transition: all 0.2s ease-in-out;
      }
    }

    &__quiz-counter {
      font-family: "BelisaPlumilla", Arial, sans-serif;
      font-size: 34px;
      position: absolute;
      height: 100px;
      width: 100px;
      background-color: #343434;
      border: 3px solid #fff;
      border-radius: 50%;
      padding-top: .25rem;

      top: 75%;
      left: 50%;
      transform: translateX(-25%);

      display: flex;
      justify-content: center;
      align-items: center;
    }

    a {
      color: #fff;
    }

    &__homepage-link {
      font-family: "BelisaPlumilla", sans-serif;
      font-size: 38px;
    }

    &__link-container {
      &:hover {
        .header__nav__link-container__hidden-links {
          opacity: 1;
          visibility: visible;
        }
      }

      p {
        cursor: pointer;
      }

      &__hidden-links {
        padding: 1rem;
        background-color: #343434;
        border-radius: 20px;
        position: absolute;
        top: 50%;
        right: 18%;
        transform: translateY(0%);
        opacity: 0;
        visibility: hidden;
        transition: all 0.25s ease-in-out;

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
            background-color: #1b1b1b;
          }
        }
      }
    }
  }
}
</style>
