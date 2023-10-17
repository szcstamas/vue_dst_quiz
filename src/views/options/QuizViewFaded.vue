<template>
  <section>
    <div class="wrapper">
      <quiz-container-faded
        v-if="actualIndexOfQuestion != shuffledArrayOfQuestions.length"
        :questions="shuffledArrayOfQuestions"
        :indexOfQuestion="actualIndexOfQuestion"
        :arrayOfGivenAnswers="actualArrayOfGivenAnswers"
        @next-question="jumpToNextQuestion"
      />
      <quiz-container-ended
        v-else
        :numberOfAllAnswers="questionsLength"
        :numberOfRightAnswers="comparedNumberWithRightAndGivenAnswers"
        :successRateOfQuiz="computedPercentageFromRightAndGivenAnswers"
        :commentOfSuccessRate="computedDescriptionOfSuccessRate"
        :colorOfSuccessRate="computedColourOfSuccessRate"
      />
    </div>
  </section>
</template>

<script>
import QuizContainerFaded from "@/components/quiz-containers/options/QuizContainerFaded.vue";
import QuizContainerEnded from "@/components/quiz-containers/QuizContainerEnded.vue";
import { useQuestionStore } from "@/stores/piniaStore";
import shuffleArray from "@/views/utils/shuffleArray.js";

export default {
  components: { QuizContainerEnded, QuizContainerFaded },

  data() {
    return {
      actualIndexOfQuestion: 0,
      actualNumberOfRightAnswers: 0,
      actualArrayOfGivenAnswers: [],
    };
  },

  methods: {
    jumpToNextQuestion() {
      useQuestionStore().actualIndexOfQuestion++;
      this.actualIndexOfQuestion = useQuestionStore().actualIndexOfQuestion;
    },
  },

  computed: {
    questions() {
      return useQuestionStore().questions;
    },
    questionsLength() {
      return useQuestionStore().getters.questionsLength();
    },
    shuffledArrayOfQuestions() {
      return shuffleArray(this.questions);
    },
    commentsOfSuccessDescription() {
      return useQuestionStore().commentsOfSuccessDescription;
    },
    coloursOfSuccessRate() {
      return useQuestionStore().coloursOfSuccessRate;
    },
    arrayFilledUpWithRightAnswers() {
      const arrayOfRightAnswers = [];

      this.questions.map((questionObj) => {
        arrayOfRightAnswers.push(questionObj.valueOfRightAnswer);
      });

      return arrayOfRightAnswers;
    },
    computedPercentageFromRightAndGivenAnswers() {
      return Math.floor(
        (this.comparedNumberWithRightAndGivenAnswers /
          this.arrayFilledUpWithRightAnswers.length) *
          100
      );
    },
    computedColourOfSuccessRate() {
      const percentage = this.computedPercentageFromRightAndGivenAnswers;

      switch (true) {
        case percentage < 40:
          return this.coloursOfSuccessRate.below40;
          break;
        case percentage < 80:
          return this.coloursOfSuccessRate.below80;
          break;
        default:
          return this.coloursOfSuccessRate.above80;
          break;
      }
    },
    computedDescriptionOfSuccessRate() {
      const percentage = this.computedPercentageFromRightAndGivenAnswers;

      switch (true) {
        case percentage < 40:
          return this.commentsOfSuccessDescription.below40;
          break;
        case percentage < 80:
          return this.commentsOfSuccessDescription.below80;
          break;
        default:
          return this.commentsOfSuccessDescription.above80;
          break;
      }
    },
    comparedNumberWithRightAndGivenAnswers() {
      this.arrayFilledUpWithRightAnswers.map((rightAnswer, index) => {
        rightAnswer == this.actualArrayOfGivenAnswers[index]
          ? useQuestionStore().numberOfRightAnswers++
          : null;
      });

      this.actualNumberOfRightAnswers = useQuestionStore().numberOfRightAnswers;

      return this.actualNumberOfRightAnswers;
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  padding-inline: 2rem;
  padding-block: 1rem 2rem;

  .wrapper {
    max-width: 1440px;
    width: 100%;
    margin: auto;
  }
}
</style>
