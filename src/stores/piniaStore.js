import { defineStore } from "pinia";

export const useQuestionStore = defineStore("useQuestionStore", () => {
  const questions = [
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
  ];

  return { questions };
});
