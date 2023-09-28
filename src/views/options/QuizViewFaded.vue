<template>
  <section>
    <div class="wrapper">
      <quiz-container-faded
        v-if="actualIndexOfQuestion != questions.length"
        :questions="questions"
        :indexOfQuestion="actualIndexOfQuestion"
        @next-question="jumpToNextQuestion"
      />
      <quiz-container-ended v-else />
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
    };
  },

  methods: {
    jumpToNextQuestion() {
      // Logic to increment the question index or perform other actions
      this.actualIndexOfQuestion++;
    },
  },

  computed: {
    questions() {
      const store = useQuestionStore();
      const questions = store.questions;
      return questions;
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
