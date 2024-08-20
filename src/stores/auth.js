import { defineStore } from "pinia";
import axios from "axios"; // Make sure axios is installed and imported

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
  }),
  actions: {
    async login(email, password, router) {
      try {
        const response = await axios.post("/login", { email, password });
        this.user = response.data.user;
        router.push({ name: "Home" }); // Redirect to home page after login
      } catch (error) {
        console.error("Login failed:", error);
        // Handle login error (e.g., show an error message)
      }
    },
    async register(name, email, phone, password, profilePicture, router) {
      try {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("password", password);
        if (profilePicture) formData.append("profile_picture", profilePicture);

        await axios.post("/register", formData);
        router.push({ name: "Login" }); // Redirect to login page after registration
      } catch (error) {
        console.error("Registration failed:", error);
        // Handle registration error (e.g., show an error message)
      }
    },
    async logout() {
      try {
        await axios.post("/logout"); // Send logout request to backend
        this.user = null; // Clear the user state
      } catch (error) {
        console.error("Logout failed:", error);
        // Handle logout error (e.g., show an error message)
      }
    },
  },
});
