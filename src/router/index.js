import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import QuizViewOptionsFaded from "@/views/options/QuizViewFaded.vue";
import QuizViewCompositionFaded from "@/views/composition/QuizViewFaded.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    // DEV
    {
      path: "/options",
      name: "options",
      component: QuizViewOptionsFaded,
    },
    {
      path: "/compositions",
      name: "compositions",
      component: QuizViewCompositionFaded,
    },
    // PROD
    {
      path: "/faded",
      name: "faded",
      component: QuizViewOptionsFaded,
    },
    {
      path: "/carousel",
      name: "carousel",
      component: QuizViewOptionsFaded,
    },
  ],
});

export default router;
