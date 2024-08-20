<template>
  <q-card>
    <q-card-section>
      <div class="text-h5">Sign Up</div>
    </q-card-section>

    <q-card-section>
      <q-input
        outlined
        v-model="name"
        label="Name"
        type="text"
        :rules="[(val) => !!val || 'Name is required']"
        clearable
      />
      <q-input
        outlined
        v-model="email"
        label="Email"
        type="email"
        :rules="[validateEmail]"
        clearable
      />
      <q-input
        outlined
        v-model="phone"
        label="Phone"
        type="tel"
        :rules="[validatePhone]"
        clearable
      />
      <q-input
        outlined
        v-model="password"
        label="Password"
        type="password"
        :rules="[(val) => !!val || 'Password is required']"
        clearable
        toggle-visibility
      />
      <q-input
        outlined
        v-model="confirmPassword"
        label="Confirm Password"
        type="password"
        :rules="[(val) => !!val || 'Confirm Password is required']"
        clearable
        toggle-visibility
        :error="passwordError"
        :error-message="passwordErrorMessage"
      />
    </q-card-section>

    <q-card-actions align="right">
      <q-btn
        rounded
        class="full-width q-mb-lg"
        label="Sign Up"
        color="primary"
        @click="register"
        no-caps
      />
    </q-card-actions>
  </q-card>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "src/stores/auth";

const name = ref("");
const email = ref("");
const phone = ref("");
const password = ref("");
const confirmPassword = ref("");
const profilePicture = ref(null);
const passwordError = ref(false);
const passwordErrorMessage = ref("");

const authStore = useAuthStore();

const handleProfilePicture = (files) => {
  if (files.length > 0) {
    profilePicture.value = files[0];
  }
};

const validateEmail = (val) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailPattern.test(val) || "Please enter a valid email";
};

const validatePhone = (val) => {
  const phonePattern = /^(?:\+88|88)?(01[3-9]\d{8})$/;
  return (
    phonePattern.test(val) || "Please enter a valid Bangladeshi mobile number"
  );
};

const validatePasswords = () => {
  if (password.value !== confirmPassword.value) {
    passwordError.value = true;
    passwordErrorMessage.value = "Passwords do not match";
    return false;
  } else {
    passwordError.value = false;
    passwordErrorMessage.value = "";
    return true;
  }
};

const register = () => {
  if (validatePasswords()) {
    authStore.register(
      name.value,
      email.value,
      phone.value, // Pass the phone value during registration
      password.value,
      profilePicture.value
    );
  }
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
