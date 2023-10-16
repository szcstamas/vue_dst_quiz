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
      options: {
        firstAnswer: "Raw green",
        secondAnswer: "Cooked blue",
        thirdAnswer: "Raw blue",
      },
      valueOfRightAnswer: "Raw blue",
    },
    {
      questionImageSrc: Statuses,
      question:
        "And what does that mushroom gives to your character besides hunger?",
      options: {
        firstAnswer: "Plus sanity",
        secondAnswer: "Plus health",
        thirdAnswer: "Both",
      },
      valueOfRightAnswer: "Plus health",
    },
    {
      questionImageSrc: Winter,
      question: "Who is the giant of winter?",
      options: {
        firstAnswer: "Bearger",
        secondAnswer: "Deerclops",
        thirdAnswer: "Moose",
      },
      valueOfRightAnswer: "Deerclops",
    },
    {
      questionImageSrc: Bearger,
      question: "What does Bearger do?",
      options: {
        firstAnswer: "He eats everything",
        secondAnswer: "He wants to destroy you aggressively",
        thirdAnswer: "He kills mobs right after he spawned",
      },
      valueOfRightAnswer: "He eats everything",
    },
    {
      questionImageSrc: Summer,
      question: "Which is the most dangerous happening during summer?",
      options: {
        firstAnswer: "Earthquakes",
        secondAnswer: "Wildfires",
        thirdAnswer: "Frog rains",
      },
      valueOfRightAnswer: "Wildfires",
    },
    {
      questionImageSrc: Wetness,
      question: "What happens when you get completely wet by rains or the sea?",
      options: {
        firstAnswer: "The character starts losing sanity",
        secondAnswer:
          "The character instantly loses a desired amount of sanity",
        thirdAnswer: "The character starts losing health",
      },
      valueOfRightAnswer: "The character starts losing sanity",
    },
    {
      questionImageSrc: Lightningrod,
      question: "What is the lightning rod is used for?",
      options: {
        firstAnswer: "Scares spiders away",
        secondAnswer: "Protects a specified area from lightning",
        thirdAnswer: "You can cook meals with it when you charge it",
      },
      valueOfRightAnswer: "Protects a specified area from lightning",
    },
    {
      questionImageSrc: Wildfire,
      question:
        "Which structure protects your base from wildfires during summer?",
      options: {
        firstAnswer: "Ice-box",
        secondAnswer: "Endothermic campfire",
        thirdAnswer: "Ice-flingomatic",
      },
      valueOfRightAnswer: "Ice-flingomatic",
    },
    {
      questionImageSrc: Beefalomate,
      question: "In which seasons do beefalos mate?",
      options: {
        firstAnswer: "Fall and Winter",
        secondAnswer: "Summer and Fall",
        thirdAnswer: "Spring and Fall",
      },
      valueOfRightAnswer: "Spring and Fall",
    },
    {
      questionImageSrc: Penguins,
      question:
        "What do penguins leave behind when they leave early in spring?",
      options: {
        firstAnswer: "Meat and rotten eggs",
        secondAnswer: "Only rotten eggs",
        thirdAnswer: "Feathers and rotten eggs",
      },
      valueOfRightAnswer: "Feathers and rotten eggs",
    },
    {
      questionImageSrc: Hunger,
      question: "Which meal is the BEST for hunger?",
      options: {
        firstAnswer: "Meaty stew",
        secondAnswer: "Meatballs",
        thirdAnswer: "Turkey dinner",
      },
      valueOfRightAnswer: "Meaty stew",
    },
    {
      questionImageSrc: Health,
      question: "Which meal is the BEST for health?",
      options: {
        firstAnswer: "Blue mushroom",
        secondAnswer: "Honey ham",
        thirdAnswer: "Pierogi",
      },
      valueOfRightAnswer: "Pierogi",
    },
  ];

  const getters = {
    questionsLength: () => {
      return questions.length;
    },
  };

  return {
    questions,
    actualIndexOfQuestion,
    numberOfRightAnswers,
    getters,
  };
});
