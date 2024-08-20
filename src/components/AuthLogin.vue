<template>
  <q-card>
    <q-card-section>
      <div class="text-h5">Sign In</div>
    </q-card-section>

    <q-card-section>
      <q-input
        v-model="email"
        outlined
        label="Email"
        type="email"
        :rules="[(val) => !!val || 'Email is required']"
        clearable
      />
      <q-input
        v-model="password"
        outlined
        label="Password"
        type="password"
        :rules="[(val) => !!val || 'Password is required']"
        clearable
      />
      <q-link
        @click="forgotPassword"
        class="q-mt-sm text-primary"
        style="cursor: pointer; display: block"
      >
        Forgot Password?
      </q-link>
    </q-card-section>

    <q-card-actions align="center">
      <q-btn
        rounded
        class="full-width q-mb-lg"
        size="md"
        label="Sign in"
        color="primary"
        @click="login"
        no-caps
      />
    </q-card-actions>
  </q-card>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "src/stores/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");

const authStore = useAuthStore();
const router = useRouter();

const login = () => {
  authStore.login(email.value, password.value, router);
};

const forgotPassword = () => {
  // Handle forgot password logic
};

const goToSignUp = () => {
  router.push({ name: "SignUp" }); // Replace 'SignUp' with the route name for the signup page
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
