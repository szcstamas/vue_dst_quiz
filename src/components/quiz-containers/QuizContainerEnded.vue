<template>
  <div class="finished-test-container">
    <h4>You did it!</h4>
    <p>You have just finished my fancy test!</p>

    <p>Score of test:</p>
    <h4>{{ numberOfRightAnswers }} / {{ numberOfAllAnswers }}</h4>
  </div>
</template>

<script>
export default {
  props: ["numberOfRightAnswers", "numberOfAllAnswers"],
};
</script>

<style lang="scss" scoped>
.finished-test-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  text-align: center;

  p {
    font-size: 18px;
  }
}
</style>
