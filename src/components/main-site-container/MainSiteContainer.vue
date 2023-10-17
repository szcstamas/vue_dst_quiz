<template>
  <main>
    <div class="site-background">
      <img
        class="site-background__logo"
        src="@/assets/images/dont_starve_together_background_1920.webp"
        alt="Background image of DST Quiz Site"
      />
    </div>
    <div class="site-language-switcher">
      <button
        type="button"
        :class="{ 'active-switcher': !isHungarianLanguageActive }"
        :disabled="!isHungarianLanguageActive"
        @click="switchLanguageToEnglish()"
      >
        EN
      </button>
      <button
        type="button"
        :class="{ 'active-switcher': isHungarianLanguageActive }"
        :disabled="isHungarianLanguageActive"
        @click="switchLanguageToHungarian()"
      >
        HU
      </button>
    </div>
    <router-view />
    <div class="router-background"></div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      isHungarianLanguageActive: false,
    };
  },

  methods: {
    switchLanguageToHungarian() {
      this.$i18n.locale = "hu";
      this.isHungarianLanguageActive = !this.isHungarianLanguageActive;
    },
    switchLanguageToEnglish() {
      this.$i18n.locale = "en";
      this.isHungarianLanguageActive = !this.isHungarianLanguageActive;
    },
  },
};
</script>

<style lang="scss" scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 80vh;
  padding-block: 2rem;
  position: relative;

  section {
    width: 40%;
  }

  .site-background {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;

    &__logo {
      opacity: 0.6;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: auto;
    }
  }

  .site-language-switcher {
    position: absolute;
    bottom: -2%;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;

    background-color: #343434;
    border: 4px solid #fff;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.5);

    width: 100px;
    height: 100px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    overflow: hidden;

    .active-switcher {
      color: #fff;
      background-color: green;
    }

    button {
      isolation: isolate;
      position: relative;
      cursor: pointer;

      display: flex;
      justify-content: center;
      align-items: center;

      padding-top: 0.5rem;

      font-family: "BelisaPlumilla";
      font-size: 30px;
      font-weight: bold;
      margin: 0;
      appearance: none;
      outline: none;
      border: none;
      background-color: #efefef;
      color: #343434;
      height: 120%;
      width: 50%;

      overflow: hidden;

      transition: all 0.3s ease-in-out;

      &:disabled {
        cursor: not-allowed;

        &::after {
          display: none;
        }
      }

      &:hover {
        color: #fff;
      }

      &::after {
        content: "";
        position: absolute;
        height: 100%;
        width: 325%;
        top: 50%;
        left: 50%;

        background-color: #575757;
        transition: transform 0.2s ease-in-out;
        z-index: -1;
      }

      &:first-child:after {
        transform: skew(-45deg) translate(-190%, -50%);
      }

      &:first-child:hover {
        &::after {
          transform: skew(-45deg) translate(-90%, -50%);
        }
      }

      &:last-child:after {
        transform: skew(-45deg) translate(100%, -50%);
      }

      &:last-child:hover {
        &::after {
          transform: skew(-45deg) translate(-90%, -50%);
        }
      }
    }
  }

  .router-background {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fdefd2;
    backdrop-filter: blur(2px);
    width: 45%;
    height: 85%;
    z-index: -1;
    border-radius: 25px;
  }
}
</style>
