import { defineStore } from "pinia";
import quizImages from "./utils/quizImages";

export const useQuestionStore = defineStore("useQuestionStore", () => {
  let actualIndexOfQuestion = 0;
  let numberOfRightAnswers = 0;

  const {
    Bearger,
    Beefalomate,
    Health,
    Hunger,
    Lightningrod,
    Mushrooms,
    Penguins,
    Statuses,
    Summer,
    Wetness,
    Wildfire,
    Winter,
  } = quizImages;

  const questions = [
    {
      questionImageSrc: Mushrooms,
      question: "Which mushroom is good for your character?",
      answers: {
        valueOfRightAnswer: "Raw blue",
        firstAnswer: "Raw green",
        secondAnswer: "Cooked blue",
        thirdAnswer: "Raw blue",
      },
    },
    {
      questionImageSrc: Statuses,
      question:
        "And what does that mushroom gives to your character besides hunger?",
      answers: {
        valueOfRightAnswer: "Plus health",
        firstAnswer: "Plus sanity",
        secondAnswer: "Plus health",
        thirdAnswer: "Both",
      },
    },
    {
      questionImageSrc: Winter,
      question: "Who is the giant of winter?",
      answers: {
        valueOfRightAnswer: "Deerclops",
        firstAnswer: "Bearger",
        secondAnswer: "Deerclops",
        thirdAnswer: "Moose",
      },
    },
    {
      questionImageSrc: Bearger,
      question: "What does Bearger do?",
      answers: {
        valueOfRightAnswer: "He eats everything",
        firstAnswer: "He eats everything",
        secondAnswer: "He wants to destroy you aggressively",
        thirdAnswer: "He kills mobs right after he spawned",
      },
    },
    {
      questionImageSrc: Summer,
      question: "Which is the most dangerous happening during summer?",
      answers: {
        valueOfRightAnswer: "Wildfires",
        firstAnswer: "Earthquakes",
        secondAnswer: "Wildfires",
        thirdAnswer: "Frog rains",
      },
    },
    {
      questionImageSrc: Wetness,
      question: "What happens when you get completely wet by rains or the sea?",
      answers: {
        valueOfRightAnswer: "The character starts losing sanity",
        firstAnswer: "The character starts losing sanity",
        secondAnswer:
          "The character instantly loses a desired amount of sanity",
        thirdAnswer: "The character starts losing health",
      },
    },
    {
      questionImageSrc: Lightningrod,
      question: "What is the lightning rod is used for?",
      answers: {
        valueOfRightAnswer: "Protects a specified area from lightning",
        firstAnswer: "Scares spiders away",
        secondAnswer: "Protects a specified area from lightning",
        thirdAnswer: "You can cook meals with it when you charge it",
      },
    },
    {
      questionImageSrc: Wildfire,
      question:
        "Which structure protects your base from wildfires during summer?",
      answers: {
        valueOfRightAnswer: "Ice-flingomatic",
        firstAnswer: "Ice-box",
        secondAnswer: "Endothermic campfire",
        thirdAnswer: "Ice-flingomatic",
      },
    },
    {
      questionImageSrc: Beefalomate,
      question: "In which seasons do beefalos mate?",
      answers: {
        valueOfRightAnswer: "Spring and Fall",
        firstAnswer: "Fall and Winter",
        secondAnswer: "Summer and Fall",
        thirdAnswer: "Spring and Fall",
      },
    },
    {
      questionImageSrc: Penguins,
      question:
        "What do penguins leave behind when they leave early in spring?",
      answers: {
        valueOfRightAnswer: "Feathers and rotten eggs",
        firstAnswer: "Meat and rotten eggs",
        secondAnswer: "Only rotten eggs",
        thirdAnswer: "Feathers and rotten eggs",
      },
    },
    {
      questionImageSrc: Hunger,
      question: "Which meal is the BEST for hunger?",
      answers: {
        valueOfRightAnswer: "Meaty stew",
        firstAnswer: "Meaty stew",
        secondAnswer: "Meatballs",
        thirdAnswer: "Turkey dinner",
      },
    },
    {
      questionImageSrc: Health,
      question: "Which meal is the BEST for health?",
      answers: {
        valueOfRightAnswer: "Pierogi",
        firstAnswer: "Blue mushroom",
        secondAnswer: "Honey ham",
        thirdAnswer: "Pierogi",
      },
    },
  ];

  const testQuestions = [
    {
      questionImageSrc: Mushrooms,
      question: "[TEST] Which mushroom is good for your character?",
      answers: {
        valueOfRightAnswer: "Raw blue",
        firstAnswer: "Raw green",
        secondAnswer: "Cooked blue",
        thirdAnswer: "Raw blue",
      },
    },
    {
      questionImageSrc: Statuses,
      question:
        "[TEST] And what does that mushroom gives to your character besides hunger?",
      answers: {
        valueOfRightAnswer: "Plus health",
        firstAnswer: "Plus sanity",
        secondAnswer: "Plus health",
        thirdAnswer: "Both",
      },
    },
  ];

  const getters = {
    questionsLength: () => {
      return questions.length;
    },
  };

  return {
    questions,
    testQuestions,
    actualIndexOfQuestion,
    numberOfRightAnswers,
    getters,
  };
});
