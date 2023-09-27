<template>
  <section>
    <div class="wrapper">
      <quiz-container-faded
        v-if="actualIndexOfQuestion != questions.length"
        :headlineOfContainer="actualQuestion"
        :actualObjectOfOptions="actualObjectOfOptions"
        :choosenInput="selectedOption"
        @choose-option-function="makeOptionChoosen(value)"
        @next-question-function="jumpToNextQuestionAndResetRadioButtons()"
      />
      <quiz-container-ended v-else />
    </div>
  </section>
</template>

<script>
import QuizContainerEnded from "../components/QuizContainerEnded.vue";
import QuizContainerFaded from "../components/QuizContainerFaded.vue";
import { useMyStore } from "@/stores/piniaStore";

export default {
  components: { QuizContainerEnded, QuizContainerFaded },
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

  .wrapper {
    max-width: 1440px;
    width: 100%;
    margin: auto;
  }
}
</style>
