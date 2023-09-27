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

<script setup>
import { ref } from "vue";
import { useQuestionStore } from "@/stores/piniaStore";
import QuizContainerFaded from "@/components/quiz-containers/composition/QuizContainerFaded.vue";
import QuizContainerEnded from "@/components/quiz-containers/QuizContainerEnded.vue";

const store = useQuestionStore();
const questions = store.questions;
const actualIndexOfQuestion = ref(0);

const jumpToNextQuestion = () => {
  actualIndexOfQuestion.value++;
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
