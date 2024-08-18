<template>
  <q-page class="auth-page q-pa-lg">
    <div class="q-mb-lg text-center">
      <q-btn-group>
        <q-btn
          flat
          :label="showLogin ? 'Login' : 'Register'"
          @click="toggleAuth"
        />
      </q-btn-group>
    </div>
    <div v-if="showLogin">
      <AuthLogin />
    </div>
    <div v-else>
      <AuthRegister />
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
