<template>
  <form @submit.prevent>
    <h1>{{ actualQuestion }}</h1>
    <label
      v-for="(value, index) in actualObjectOfOptions"
      :key="`The following number is the index of a label in our Quiz form: ${index}`"
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
      :disabled="!isSubmitButtonEnabled"
      :class="{ disabled: !isSubmitButtonEnabled }"
      @click="jumpToNextQuestionAndResetRadioButtons()"
      value="Next question"
    />
  </form>
</template>

<script setup>
import { ref, computed, watch } from "vue";
// props and event trigger
// ------------------
const props = defineProps(["questions", "indexOfQuestion"]);
const emits = defineEmits(["next-question"]);

// datas
// ------------------
const isOptionSelected = ref(null);
const isSubmitButtonEnabled = ref(false);

// method functions
// ------------------
const makeOptionChoosen = (value) => {
  isOptionSelected.value = value;
  isSubmitButtonEnabled.value = true;
};

const jumpToNextQuestionAndResetRadioButtons = () => {
  isSubmitButtonEnabled.value = false;
  isOptionSelected.value = null;
  emits('next-question');
};

// computed functions
// ------------------
const actualObjectOfOptions = computed(() => {
  // check if indexOfQuestion is present
  if (props.indexOfQuestion !== null && props.indexOfQuestion !== undefined) {
    const actualObject = props.questions[props.indexOfQuestion];
    // removing the question key-value pair from the object with slice
    return Object.values(actualObject).slice(1);
  }
  // if this prop does not exist, return an empty array
  return [];
});

const actualQuestion = computed(() => {
  // check the presence of indexOfQuestion
  if (props.indexOfQuestion !== null && props.indexOfQuestion !== undefined) {
    return props.questions[props.indexOfQuestion].question;
  }
  // if it does not exist, return an empty string
  return "";
});

watch(
  () => props.indexOfQuestion,
  (newIndex, oldIndex) => {
    if (newIndex !== undefined) {
      // reset the radio button and submit button states when the prop changes
      isSubmitButtonEnabled.value = false;
      isOptionSelected.value = null;
    }
  }
);
</script>

<style lang="scss" scoped>
form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  width: 500px;
  margin: auto;

  h4 {
    text-align: center;
  }

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-right: auto;
    cursor: pointer;

    font-size: 18px;

    input[type="radio"] {
      -webkit-appearance: none;
      appearance: none;
      background-color: #fff;
      margin: 0;
      font: inherit;
      width: 2em;
      height: 2em;
      border: 0.25em solid #343434;
      border-radius: 50%;

      display: grid;
      place-content: center;
      cursor: pointer;

      &::before {
        content: "";
        width: 0.65em;
        height: 0.65em;
        border-radius: 50%;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        box-shadow: inset 1em 1em purple;
      }

      &:checked::before {
        transform: scale(1);
      }
    }
  }

  input[type="submit"].disabled {
    opacity: 50%;
    cursor: not-allowed;
  }

  input[type="submit"] {
    appearance: none;
    border: none;
    outline: none;
    font-size: 18px;
    font-weight: bold;
    color: #ffffff;
    background-color: #343434;
    padding: 1rem 2rem;
    border-radius: 10px;
    width: 100%;
    text-transform: uppercase;
    letter-spacing: 2px;
    cursor: pointer;
  }
}
</style>
