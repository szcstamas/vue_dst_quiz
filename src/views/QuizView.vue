<template>
  <section>
    <div class="wrapper">
      <form v-if="actualIndexOfQuestion != questions.length" @submit.prevent>
        <h4>{{ actualQuestion }}</h4>
        <label
          v-for="value in actualObjectOfOptions"
          class="form-control"
          @click="makeOptionChoosen(value)"
        >
          <input
            type="radio"
            v-model="selectedOption"
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
      <div v-else class="finished-test-container">
        <h4>You did it!</h4>
        <p>You have just finished my fancy test!</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      selectedOption: null,
      isOptionChoosen: false,
      actualIndexOfQuestion: 0,
      questions: [
        {
          question: "How am I?",
          firstAnswer: "Very fine",
          secondAnswer: "Not that fine",
          thirdAnswer: "Awfully",
        },
        {
          question: "Is the bus driver sucky?",
          firstAnswer: "Yes",
          secondAnswer: "Of course",
          thirdAnswer: "Just as usual",
        },
        {
          question: "Are there prolis?",
          firstAnswer: "Yes",
          secondAnswer: "Yes",
          thirdAnswer: "Yes",
        },
      ],
    };
  },

  methods: {
    makeOptionChoosen(value) {
      this.isOptionChoosen = true;
      this.selectedOption = value;
    },
    jumpToNextQuestionAndResetRadioButtons() {
      this.isOptionChoosen = false;
      this.selectedOption = null;
      this.actualIndexOfQuestion++;
    },
  },

  computed: {
    actualObjectOfOptions() {
      const actualObject = this.questions[this.actualIndexOfQuestion];
      const [, ...restOfActualOptionKeyValuePairs] =
        Object.entries(actualObject);
      const everyKeyValuePairsExceptQuestionIntoObject = Object.fromEntries(
        restOfActualOptionKeyValuePairs
      );

      return everyKeyValuePairsExceptQuestionIntoObject;
    },
    actualQuestion() {
      return this.questions[this.actualIndexOfQuestion].question;
    },
  },

  mounted() {
    console.log(this.option);
  },
};
</script>

<style lang="scss" scoped>
section {
  padding-inline: 2rem;
  padding-block: 3rem;

  h4 {
    font-size: 2rem;
    text-align: center;
  }

  .wrapper {
    max-width: 1440px;
    width: 100%;
    margin: auto;

    form {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 2rem;

      width: 500px;
      margin: auto;

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
  }
}
</style>
