<template>
  <q-page class="auth-page q-pa-lg">
    <div class="q-mb-lg text-h5 text-center text-bold text-primary">
      To do App
    </div>
    <AuthRegister />
    <div class="text-center q-mt-lg">
      Already have an account?
      <q-btn @click="goToLogin" flat color="primary" unelevated dense no-caps
        >Sign in</q-btn
      >
    </div>
  </q-page>
</template>

<script setup>
import AuthRegister from "src/components/AuthRegister.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goToLogin = () => {
  router.push({ name: "Login" });
};
</script>

<style scoped>
.auth-page {
  max-width: 400px;
  margin: 0 auto;
}
</style>
