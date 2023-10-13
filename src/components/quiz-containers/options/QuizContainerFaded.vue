<template>
  <form @submit.prevent class="question-form">
    <h1 class="question-form__headline">{{ actualQuestion }}</h1>
    <img
      class="question-form__dst-logo"
      src="@/assets/images/dont_starve_together_logo.webp"
      alt="Don't Starve Together logo"
    />
    <div class="question-form__quiz-image-container">
      <img
        class="question-form__quiz-image-container__current-image"
        :src="actualImageSrcOfQuestion"
        :alt="`This is the image of the following question: ${actualQuestion}`"
      />
    </div>
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

<script>
export default {
  props: ["questions", "indexOfQuestion"],
  data() {
    return {
      isOptionSelected: null,
      isSubmitButtonEnabled: false,
    };
  },
  methods: {
    makeOptionChoosen(value) {
      this.isOptionSelected = value;
      this.isSubmitButtonEnabled = true;
    },
    jumpToNextQuestionAndResetRadioButtons() {
      this.isSubmitButtonEnabled = false;
      this.isOptionSelected = null;
      this.$emit("next-question");
    },
  },
  computed: {
    actualObjectOfOptions() {
      //getting the first object from questions array
      const actualObject = this.questions[this.indexOfQuestion];

      //making array from this object, and remove the first item (question) with slice
      const restOfActualOptionKeyValuePairs =
        Object.entries(actualObject).slice(2);

      //creating object from this array
      const everyKeyValuePairsExceptQuestionIntoObject = Object.fromEntries(
        restOfActualOptionKeyValuePairs
      );

      return everyKeyValuePairsExceptQuestionIntoObject;
    },
    actualQuestion() {
      return this.questions[this.indexOfQuestion].question;
    },
    actualImageSrcOfQuestion() {
      return this.questions[this.indexOfQuestion].questionImageSrc;
    },
  },
};
</script>

<style lang="scss" scoped>
.question-form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2.5rem;
  // position: relative;

  width: 500px;
  margin: auto;

  &__dst-logo,
  &__quiz-image-container {
    position: absolute;
    top: 0;
    width: 250px;
    height: 250px;
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

  &__dst-logo {
    left: 23.5%;
    max-width: 200px;
  }

  &__quiz-image-container {
    right: 23.5%;
    border-radius: 50%;
    border: 3px solid #343434;
    overflow: hidden;
    background-color: #ffffff;
    animation-delay: 1s;

    &__current-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__headline {
    height: min(150px, 250px);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150%;
    text-align: center;
  }

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-right: auto;
    cursor: pointer;

    font-family: "Gabarito", "Segoe UI", Arial, sans-serif;
    font-size: 20px;
    font-weight: 400;

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
    background-color: #343434;
    cursor: not-allowed;

    &:hover {
      background-color: #343434;
    }
  }

  input[type="submit"] {
    appearance: none;
    border: none;
    outline: none;
    font-size: 18px;
    font-weight: bold;
    color: #ffffff;
    background-color: rgb(3, 94, 0);
    padding: 1rem 2rem;
    padding-top: 1.5rem;
    font-family: "BelisaPlumilla", sans-serif;
    font-size: 38px;
    border-radius: 10px;
    width: 100%;
    text-transform: uppercase;
    letter-spacing: 2px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: rgb(4, 125, 0);
    }
  }
}
</style>
