import { defineStore } from "pinia";
import { useQuasar } from "quasar";

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: [
      {
        title: "Do the work",
        done: false,
        favorite: false,
        date: "08/20/2024",
      },
      { title: "Drink water", done: true, favorite: false, date: "08/19/2024" },
      { title: "Go to home", done: false, favorite: true, date: "08/18/2024" },
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
    addTask(task) {
      if (typeof task.title === "string" && task.title.trim()) {
        this.tasks.push({
          title: task.title,
          date: task.date || "", // Handle missing date case
          done: false,
          favorite: false,
        });
      } else {
        console.error("Invalid task title");
      }
    },
    toggleFavorite(task) {
      task.favorite = !task.favorite;
    },
    formatDate(date) {
      return new Intl.DateTimeFormat("en-GB").format(new Date(date));
    },
    confirmDeleteTask(index) {
      const $q = useQuasar();
      $q.dialog({
        title: "Confirm",
        message: "Do you want to delete this task?",
        cancel: true,
        persistent: true,
      }).onOk(() => {
        this.deleteTask(index);
        $q.notify({
          message: "Task deleted ☹",
          icon: "announcement",
          color: "red",
        });
      });
    },
  },
});
