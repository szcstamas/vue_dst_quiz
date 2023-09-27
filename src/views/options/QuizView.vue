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
import { ref } from "vue";
import QuizContainerFaded from "@/components/QuizContainerFaded.vue";
import QuizContainerEnded from "@/components/QuizContainerEnded.vue";

export default {
  components: { QuizContainerEnded, QuizContainerFaded },

  data() {
    return {
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
    jumpToNextQuestion() {
      // Logic to increment the question index or perform other actions
      this.actualIndexOfQuestion++;
    },
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
