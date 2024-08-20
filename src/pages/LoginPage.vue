<template>
  <q-page class="auth-page q-pa-lg">
    <div class="q-mb-lg text-h5 text-center text-bold text-primary">
      To do App
    </div>
    <AuthLogin />
    <div class="text-center q-mt-lg">
      New user?
      <q-btn @click="goToRegister" flat color="primary" unelevated dense no-caps
        >Sign up</q-btn
      >
    </div>
  </q-page>
</template>

<script setup>
import AuthLogin from "src/components/AuthLogin.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goToRegister = () => {
  router.push({ name: "Register" });
};
</script>

<style scoped>
.auth-page {
  max-width: 400px;
  margin: 0 auto;
}
</style>
