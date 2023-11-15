import { defineStore } from "pinia";

export const useNumbersStore = defineStore("useNumbersStore", () => {
  let actualIndexOfQuestion = 0;
  let numberOfRightAnswers = 0;

  return {
    actualIndexOfQuestion,
    numberOfRightAnswers,
  };
});
