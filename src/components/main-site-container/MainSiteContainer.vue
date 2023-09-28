<template>
  <main>
    <img
      class="site-logo reign-of-giants"
      src="@/assets/images/dont_starve_reign_of_giants_logo.webp"
      alt="Don't Starve Reign Of Giants logo"
    />
    <img
      class="site-logo together"
      src="@/assets/images/dont_starve_together_logo.webp"
      alt="Don't Starve Together logo"
    />
    <div class="site-background">
      <img
        class="site-background__logo"
        src="@/assets/images/dont_starve_together_background_1920.webp"
        alt="Background image of DST Quiz Site"
      />
    </div>
    <router-view />
    <div class="router-background"></div>
  </main>
</template>

<style lang="scss" scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 80vh;
  padding-block: 2rem;
  position: relative;

  .site-logo {
    position: absolute;
    top: 0;
    max-width: 200px;
    animation: levitating 3s ease-in-out infinite;

    @keyframes levitating {
      0% {
        transform: translateY(0%);
      }
      50% {
        transform: translateY(5%);
      }
      100% {
        transform: translateY(0%);
      }
    }
  }

  .reign-of-giants {
    left: 30%;
  }

  .together {
    right: 30%;
    animation-delay: 1s;
  }

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
