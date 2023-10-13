<template>
  <section>
    <div class="wrapper">
      <p style="margin-left:50px;">
      </p>
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
      useQuestionStore().actualIndexOfQuestion++;
      this.actualIndexOfQuestion = useQuestionStore().actualIndexOfQuestion;
    },
  },

  computed: {
    questions() {
      return useQuestionStore().questions;
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
