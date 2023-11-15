import { defineStore } from "pinia";
import { useI18n } from "vue-i18n";

export const useSuccessRateStore = defineStore("useSuccessRateStore", () => {
  const { t } = useI18n();

  const coloursOfSuccessRate = {
    below40: "#b82e00",
    below80: "#dd7100",
    above80: "#4ea100",
  };

  // computed property for recompute when changing locale
  const commentsOfSuccessDescription = () => {
    return {
      below40: t("commentsOfSuccessDescription.below40"),
      below80: t("commentsOfSuccessDescription.below80"),
      above80: t("commentsOfSuccessDescription.above80"),
    };
  };

  return {
    commentsOfSuccessDescription,
    coloursOfSuccessRate,
  };
});
