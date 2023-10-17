import { createI18n } from "vue-i18n";
import en from "./languages/en.json";
import hu from "./languages/hu.json";

const i18n = createI18n({
  legacy: false,
  locale: "hu",
  messages: {
    en,
    hu,
  },
});

export default i18n;
