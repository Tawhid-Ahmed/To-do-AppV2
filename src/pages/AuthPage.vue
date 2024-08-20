<template>
  <q-page class="auth-page q-pa-lg">
    <div class="q-mb-lg text-h5 text-center text-bold text-primary">
      To do App
    </div>
    <div v-if="showLogin">
      <AuthLogin />
      <div class="text-center q-mt-lg">
        New user?
        <q-btn
          @click="toggleAuth"
          flat
          color="primary q-m-none"
          unelevated
          dense
          no-caps
          >Sign up</q-btn
        >
      </div>
    </div>
    <div v-else>
      <AuthRegister />

      <div class="text-center q-mt-lg">
        Already have an account?
        <q-btn
          @click="toggleAuth"
          flat
          color="primary q-m-none"
          unelevated
          dense
          no-caps
          >Sign in</q-btn
        >
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import AuthLogin from "src/components/AuthLogin.vue";
import AuthRegister from "src/components/AuthRegister.vue";

const showLogin = ref(true);

const toggleAuth = () => {
  showLogin.value = !showLogin.value;
};
</script>

<style scoped>
.auth-page {
  max-width: 400px;
  margin: 0 auto;
}
</style>
