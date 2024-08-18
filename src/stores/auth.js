import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
  }),
  actions: {
    login(email, password) {
      // Implement login logic
    },
    register(email, password) {
      // Implement registration logic
    },
    logout() {
      this.user = null;
    },
  },
});
