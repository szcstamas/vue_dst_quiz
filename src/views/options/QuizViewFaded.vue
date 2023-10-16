<template>
  <section>
    <div class="wrapper">
      <quiz-container-faded
        v-if="actualIndexOfQuestion != questions.length"
        :questions="questions"
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

export default {
  components: { QuizContainerEnded, QuizContainerFaded },

  data() {
    return {
      actualIndexOfQuestion: 0,
      actualNumberOfRightAnswers: 0,
      actualArrayOfGivenAnswers: [],
      actualCommentOfSuccessRate: "Good job!",
      colorsOfSuccessRate: ["red", "yellow", "green"],
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
      if (this.computedPercentageFromRightAndGivenAnswers < 40) {
        return "red";
      } else if (this.computedPercentageFromRightAndGivenAnswers < 80) {
        return "yellow";
      } else {
        return "green";
      }
    },
    computedDescriptionOfSuccessRate() {
      if (this.computedPercentageFromRightAndGivenAnswers < 40) {
        return "Not that good! Make sure to try again!";
      } else if (this.computedPercentageFromRightAndGivenAnswers < 80) {
        return "You did well! But it's not perfect yet... stay on the path and its all going to be nice!";
      } else {
        return "Ooooh, perfect! Well done!!";
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
