import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import QuizViewOptions from "@/views/options/QuizView.vue";
import QuizViewCompositions from "@/views/compositions/QuizView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/options",
      name: "options",
      component: QuizViewOptions,
    },
    {
      path: "/compositions",
      name: "compositions",
      component: QuizViewCompositions,
    },
  ],
});

export default router;
