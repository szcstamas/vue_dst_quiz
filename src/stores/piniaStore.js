import { defineStore } from "pinia";

export const useQuestionStore = defineStore("useQuestionStore", () => {
  const questions = [
    {
      question: "Which mushroom is good for your character?",
      firstAnswer: "Raw green",
      secondAnswer: "Cooked blue",
      thirdAnswer: "Raw blue",
    },
    {
      question: "What does that mushroom gives to your character besides hunger?",
      firstAnswer: "Plus sanity",
      secondAnswer: "Plus health",
      thirdAnswer: "Both",
    },
    {
      question: "Who is the giant of winter?",
      firstAnswer: "Bearger",
      secondAnswer: "Deerclops",
      thirdAnswer: "Moose",
    },
    {
      question: "What does Bearger do?",
      firstAnswer: "He eats everything",
      secondAnswer: "He wants to destroy you aggressively",
      thirdAnswer: "He kills mobs right after he spawned",
    },
    {
      question: "Which is the most dangerous happening during summer?",
      firstAnswer: "Earthquakes",
      secondAnswer: "Wildfires",
      thirdAnswer: "Frog rains",
    },
    {
      question: "What happens when you get completely wet by rains or the sea?",
      firstAnswer: "The character starts losing sanity",
      secondAnswer: "The character instantly loses a desired amount of sanity",
      thirdAnswer: "The character starts losing health",
    },
    {
      question: "What is the lightning rod is used for?",
      firstAnswer: "Scares spiders away",
      secondAnswer: "Protects a specified area from lightning",
      thirdAnswer: "You can cook meals with it when you charge it",
    },
    {
      question: "Which structure protects your base from wildfires during summer?",
      firstAnswer: "Ice-box",
      secondAnswer: "Endothermic campfire",
      thirdAnswer: "Ice-flingomatic",
    },
    {
      question: "In which seasons do beefalos mate?",
      firstAnswer: "Fall and Winter",
      secondAnswer: "Summer and Fall",
      thirdAnswer: "Spring and Fall",
    },
    {
      question: "What do penguins leave behind when they leave early in spring?",
      firstAnswer: "Meat and rotten eggs",
      secondAnswer: "Only rotten eggs",
      thirdAnswer: "Feathers and rotten eggs",
    },
    {
      question: "Which meal is the BEST for hunger?",
      firstAnswer: "Meaty stew",
      secondAnswer: "Meatballs",
      thirdAnswer: "Turkey dinner",
    },
    {
      question: "Which meal is the BEST for health?",
      firstAnswer: "Blue mushroom",
      secondAnswer: "Honey ham",
      thirdAnswer: "Pierogi",
    },
  ];

  return { questions };
});
