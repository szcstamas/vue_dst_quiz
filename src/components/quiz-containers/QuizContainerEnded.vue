<template>
  <div class="finished-test-container">
    <div class="finished-test-container__box">
      <h4>{{ $t('quizEnded') }}</h4>
      <p>{{ $t('numberOfCorrectAnswers') }}</p>
      <h4>{{ numberOfRightAnswers }} / {{ numberOfAllAnswers }}</h4>
    </div>
    <div class="finished-test-container__box">
      <h4 class="finished-test-container__box__success-rate" :style="{ color: colorOfSuccessRate }">
        {{ successRateOfQuiz }}%
      </h4>
      <p class="finished-test-container__box__success-comment">
        {{ commentOfSuccessRate }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "numberOfRightAnswers",
    "numberOfAllAnswers",
    "successRateOfQuiz",
    "commentOfSuccessRate",
    "colorOfSuccessRate"
  ],
};
</script>

<style lang="scss" scoped>
.finished-test-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5rem;
  text-align: center;

  &__box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    p {
      font-size: 18px;
    }

    &__success-rate, &__success-comment {
      font-family: "Gabarito", "Segoe UI", Arial, sans-serif;
      font-weight: 500;
    }
  }
}
</style>
