import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/main",
      name: "main",
      component: () => import("../views/Main.vue"),
      children: [
        {
          path: "article",
          name: "article",
          component: () => import("../views/BlogArticle/BlogArticle.vue"),
        },
        {
          path: "show",
          name: "show",
          component: () => import("../components/Main/articleShow.vue"),
        },
      ],
    },
    {
      path: "/blog",
      name: "blog",
      component: () => import("../views/BlogHub.vue"),
      children: [
        {
          path: "home",
          name: "home",
          component: () => import("../views/BlogHub/blogHome.vue"),
        },
        {
          path: "edit",
          name: "edit",
          component: () => import("../views/BlogHub/articleEditor.vue"),
        },
        {
          path: "log",
          name: "log",
          component: () => import("../views/BlogHub/blogLog.vue"),
        },
        {
          path: "information",
          name: "information",
          component: () => import("../views/BlogHub/information.vue"),
        },
      ],
    },
  ],
});

export default router;
