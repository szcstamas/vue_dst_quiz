<template>
  <form v-if="actualIndexOfQuestion != questions.length" @submit.prevent>
    <h4>{{ actualQuestion }}</h4>
    <label
      v-for="value in actualObjectOfOptions"
      class="form-control"
      @click="makeOptionChoosen(value)"
    >
      <input
        type="radio"
        v-model="isOptionSelected"
        :value="value"
        name="radio"
      />
      {{ value }}
    </label>
    <input
      type="submit"
      :disabled="!isOptionChoosen"
      :class="{ disabled: !isOptionChoosen }"
      @click="jumpToNextQuestionAndResetRadioButtons()"
      value="Next question"
    />
  </form>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
