<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">Register</div>
    </q-card-section>

    <q-card-section>
      <q-input
        v-model="name"
        label="Name"
        type="text"
        :rules="[(val) => !!val || 'Name is required']"
        clearable
      />
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
      <q-input
        v-model="confirmPassword"
        label="Confirm Password"
        type="password"
        :rules="[(val) => !!val || 'Confirm Password is required']"
        clearable
      />
      <q-uploader
        v-model="profilePicture"
        label="Profile Picture"
        accept="image/*"
        @added="handleProfilePicture"
      />
    </q-card-section>

    <q-card-actions align="right">
      <q-btn label="Register" color="primary" @click="register" />
    </q-card-actions>
  </q-card>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "src/stores/auth";

const name = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const profilePicture = ref(null);

const authStore = useAuthStore();

const handleProfilePicture = (files) => {
  if (files.length > 0) {
    profilePicture.value = files[0];
  }
};

const register = () => {
  if (password.value === confirmPassword.value) {
    authStore.register(
      name.value,
      email.value,
      password.value,
      profilePicture.value
    );
  } else {
    // Handle password mismatch
  }
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
