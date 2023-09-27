import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import QuizViewOptions from "@/views/options/QuizView.vue";
import QuizViewComposition from "@/views/composition/QuizView.vue";

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
      component: QuizViewComposition,
    },
  ],
});

export default router;
