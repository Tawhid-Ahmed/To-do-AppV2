<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">Login</div>
    </q-card-section>

    <q-card-section>
      <q-input
        v-model="email"
        label="Email"
        type="email"
        :rules="[(val) => !!val || 'Email is required']"
        clearable
      />
      <q-input
        v-model="password"
        label="Password"
        type="password"
        :rules="[(val) => !!val || 'Password is required']"
        clearable
      />
    </q-card-section>

    <q-card-actions align="right">
      <q-btn label="Login" color="primary" @click="login" />
    </q-card-actions>
  </q-card>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "src/stores/auth";

const email = ref("");
const password = ref("");

const authStore = useAuthStore();

const login = () => {
  authStore.login(email.value, password.value);
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
