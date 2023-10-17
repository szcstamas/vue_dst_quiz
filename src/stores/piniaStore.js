import { defineStore } from "pinia";
import quizImages from "./utils/quizImages";
import { useI18n } from "vue-i18n";

export const useQuestionStore = defineStore("useQuestionStore", () => {
  let actualIndexOfQuestion = 0;
  let numberOfRightAnswers = 0;
  const { t } = useI18n();

  const commentsOfSuccessDescription = {
    below40: t("commentsOfSuccessDescription.below40"),
    below80: t("commentsOfSuccessDescription.below80"),
    above80: t("commentsOfSuccessDescription.above80"),
  };

  const coloursOfSuccessRate = {
    below40: "#b82e00",
    below80: "#dd7100",
    above80: "#4ea100",
  };

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
      question: t("questions[0].question"),
      options: {
        firstAnswer: t("questions[0].options.firstAnswer"),
        secondAnswer: t("questions[0].options.secondAnswer"),
        thirdAnswer: t("questions[0].options.thirdAnswer"),
      },
      valueOfRightAnswer: t("questions[0].options.thirdAnswer"),
    },
    {
      questionImageSrc: Statuses,
      question: t("questions[1].question"),
      options: {
        firstAnswer: t("questions[1].options.firstAnswer"),
        secondAnswer: t("questions[1].options.secondAnswer"),
        thirdAnswer: t("questions[1].options.thirdAnswer"),
      },
      valueOfRightAnswer: t("questions[1].options.secondAnswer"),
    },
    {
      questionImageSrc: Winter,
      question: t("questions[2].question"),
      options: {
        firstAnswer: t("questions[2].options.firstAnswer"),
        secondAnswer: t("questions[2].options.secondAnswer"),
        thirdAnswer: t("questions[2].options.thirdAnswer"),
      },
      valueOfRightAnswer: t("questions[2].options.secondAnswer"),
    },
    {
      questionImageSrc: Bearger,
      question: t("questions[3].question"),
      options: {
        firstAnswer: t("questions[3].options.firstAnswer"),
        secondAnswer: t("questions[3].options.secondAnswer"),
        thirdAnswer: t("questions[3].options.thirdAnswer"),
      },
      valueOfRightAnswer: t("questions[3].options.firstAnswer"),
    },
    {
      questionImageSrc: Summer,
      question: t("questions[4].question"),
      options: {
        firstAnswer: t("questions[4].options.firstAnswer"),
        secondAnswer: t("questions[4].options.secondAnswer"),
        thirdAnswer: t("questions[4].options.thirdAnswer"),
      },
      valueOfRightAnswer: t("questions[4].options.secondAnswer"),
    },
    {
      questionImageSrc: Wetness,
      question: t("questions[5].question"),
      options: {
        firstAnswer: t("questions[5].options.firstAnswer"),
        secondAnswer: t("questions[5].options.secondAnswer"),
        thirdAnswer: t("questions[5].options.thirdAnswer"),
      },
      valueOfRightAnswer: t("questions[5].options.firstAnswer"),
    },
    {
      questionImageSrc: Lightningrod,
      question: t("questions[6].question"),
      options: {
        firstAnswer: t("questions[6].options.firstAnswer"),
        secondAnswer: t("questions[6].options.secondAnswer"),
        thirdAnswer: t("questions[6].options.thirdAnswer"),
      },
      valueOfRightAnswer: t("questions[6].options.secondAnswer"),
    },
    {
      questionImageSrc: Wildfire,
      question: t("questions[7].question"),
      options: {
        firstAnswer: t("questions[7].options.firstAnswer"),
        secondAnswer: t("questions[7].options.secondAnswer"),
        thirdAnswer: t("questions[7].options.thirdAnswer"),
      },
      valueOfRightAnswer: t("questions[7].options.thirdAnswer"),
    },
    {
      questionImageSrc: Beefalomate,
      question: t("questions[8].question"),
      options: {
        firstAnswer: t("questions[8].options.firstAnswer"),
        secondAnswer: t("questions[8].options.secondAnswer"),
        thirdAnswer: t("questions[8].options.thirdAnswer"),
      },
      valueOfRightAnswer: t("questions[8].options.thirdAnswer"),
    },
    {
      questionImageSrc: Penguins,
      question: t("questions[9].question"),
      options: {
        firstAnswer: t("questions[9].options.firstAnswer"),
        secondAnswer: t("questions[9].options.secondAnswer"),
        thirdAnswer: t("questions[9].options.thirdAnswer"),
      },
      valueOfRightAnswer: t("questions[9].options.thirdAnswer"),
    },
    {
      questionImageSrc: Hunger,
      question: t("questions[10].question"),
      options: {
        firstAnswer: t("questions[10].options.firstAnswer"),
        secondAnswer: t("questions[10].options.secondAnswer"),
        thirdAnswer: t("questions[10].options.thirdAnswer"),
      },
      valueOfRightAnswer: t("questions[10].options.firstAnswer"),
    },
    {
      questionImageSrc: Health,
      question: t("questions[11].question"),
      options: {
        firstAnswer: t("questions[11].options.firstAnswer"),
        secondAnswer: t("questions[11].options.secondAnswer"),
        thirdAnswer: t("questions[11].options.thirdAnswer"),
      },
      valueOfRightAnswer: t("questions[11].options.thirdAnswer"),
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
    commentsOfSuccessDescription,
    coloursOfSuccessRate,
    getters,
  };
});
