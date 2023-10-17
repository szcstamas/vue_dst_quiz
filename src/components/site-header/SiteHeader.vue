<template>
  <header class="header">
    <nav class="header__nav">
      <router-link
        to="/"
        class="header__nav__homepage-link header__nav__nav-box"
        >Don't Starve Quiz</router-link
      >
      <div class="header__nav__quiz-scrollbar header__nav__nav-box">
        <div
          class="header__nav__quiz-scrollbar__fillment"
          :style="{ width: `${actualPercent}%` }"
        ></div>
      </div>
      <div class="header__nav__quiz-counter">
        {{ currentQuestionNumber }} / {{ questionsLength }}
      </div>
      <div class="header__nav__link-container header__nav__nav-box">
        <form class="header__nav__link-container__devoptions-form">
          <label>{{ $t("showDevOptions") }}</label>
          <input type="checkbox" @click="showDevOptions" />
        </form>
        <Transition name="slide-fade">
          <div
            v-if="isDevOptionsShown"
            class="header__nav__link-container__hidden-links"
          >
            <router-link to="/options">Options API</router-link>
            <router-link to="/composition">Composition API</router-link>
          </div>
        </Transition>
      </div>
    </nav>
  </header>
</template>

<script>
import { useQuestionStore } from "@/stores/piniaStore";
import { Transition } from "vue";

export default {
  data() {
    return {
      isDevOptionsShown: false,
    };
  },

  methods: {
    showDevOptions() {
      this.isDevOptionsShown = !this.isDevOptionsShown;
    },
  },

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

    &__nav-box {
      flex: 1;
      display: flex;

      &:first-child {
        margin-left: auto;
      }

      &:last-child {
        margin-right: auto;
        justify-content: right;
      }
    }

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
      padding-top: 0.25rem;

      top: 75%;
      left: 50%;
      transform: translateX(-50%);

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
      .slide-fade-enter-active {
        transition: all 0.3s ease-out;
      }

      .slide-fade-leave-active {
        transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
      }

      .slide-fade-enter-from,
      .slide-fade-leave-to {
        transform: translateY(-20px);
        opacity: 0;
      }

      p {
        cursor: pointer;
      }

      &__devoptions-form {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;

        input[type="checkbox"] {
          cursor: pointer;
          -webkit-appearance: none;
          appearance: none;
          background-color: #fff;

          display: grid;
          place-content: center;

          font: inherit;

          color: transparent;
          background: transparent;

          width: 1.8rem;
          height: 1.8rem;
          border: 4px solid #ffffff;
          border-radius: 50%;
          transform: translateY(-0.075em);
        }

        input[type="checkbox"]::before {
          content: "";
          width: 1.3rem;
          height: 1.3rem;
          border-radius: 50%;
          transform: scale(0);
          transition: .2s transform ease-in-out;
          box-shadow: inset 1rem 1rem #8a3e00;
        }

        input[type="checkbox"]:checked::before {
          transform: scale(1);
        }
      }

      &__hidden-links {
        padding: 1rem;
        background-color: #343434;
        border-radius: 20px;
        position: absolute;
        top: 100%;
        right: 18%;
        z-index: 100;
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
