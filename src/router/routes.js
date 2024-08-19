const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/AuthPage.vue"), // Authentication page
      },
      {
        path: "home",
        component: () => import("src/pages/To-do.vue"),
      },
      {
        path: "home/complete-tasks",
        component: () => import("src/pages/CompleteTaskPage.vue"),
      },
      {
        path: "home/favorite-tasks",
        component: () => import("src/pages/FavoriteTaskPage.vue"),
      },
      {
        path: "home/help",
        component: () => import("src/pages/HelpPage.vue"),
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
