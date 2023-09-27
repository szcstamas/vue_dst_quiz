<template>
  <div class="finished-test-container">
    <h4>You did it!</h4>
    <p>You have just finished my fancy test!</p>
  </div>
</template>

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
