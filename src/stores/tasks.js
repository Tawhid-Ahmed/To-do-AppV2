import { defineStore } from "pinia";

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: [
      {
        title: "Do the work",
        done: false,
        favorite: false,
      },
      {
        title: "Drink water",
        done: true,
        favorite: false,
      },
      {
        title: "Go to home",
        done: false,
        favorite: true,
      },
    ],
  }),
  getters: {
    favoriteTasks: (state) => state.tasks.filter((task) => task.favorite),
    completedTasks: (state) => state.tasks.filter((task) => task.done),
  },
  actions: {
    toggleTask(task) {
      task.done = !task.done;
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    addTask(title) {
      if (title.trim()) {
        this.tasks.push({ title, done: false, favorite: false });
      }
    },
    toggleFavorite(task) {
      task.favorite = !task.favorite;
    },
  },
});
