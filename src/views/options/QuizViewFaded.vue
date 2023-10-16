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
