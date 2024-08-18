const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/To-do.vue") },
      { path: "help", component: () => import("src/pages/HelpPage.vue") },
      { path: "auth", component: () => import("pages/AuthPage.vue") },
      {
        path: "complete-tasks",
        component: () => import("src/pages/CompleteTaskPage.vue"),
      },
      {
        path: "favorite-tasks",
        component: () => import("src/pages/FavoriteTaskPage.vue"),
      },
    ],
  },

  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
