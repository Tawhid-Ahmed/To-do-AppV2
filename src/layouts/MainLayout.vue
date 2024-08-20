<template>
  <q-layout view="lHh Lpr lFf">
    <q-header v-if="!isAuthPage">
      <q-toolbar>
        <q-btn
          v-if="!isAuthPage"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-space />
        <q-btn flat round dense icon="login" @click="router.push('/login')" />
      </q-toolbar>
      <div v-if="!isAuthPage" class="q-px-lg q-pt-xl q-mb-md">
        <div class="text-h3">TO-DO App</div>
        <div class="text-subtitle1">{{ formattedString }}</div>
      </div>
      <q-img
        v-if="!isAuthPage"
        src="src/assets/images/mountain.jpeg"
        class="header-image absolute-top"
      />
    </q-header>

    <q-drawer
      v-if="!isAuthPage"
      v-model="leftDrawerOpen"
      show-if-above
      :width="260"
      :breakpoint="650"
    >
      <q-scroll-area
        style="
          height: calc(100% - 192px);
          margin-top: 192px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list padding>
          <q-item to="/home" clickable exact v-ripple>
            <q-item-section avatar>
              <q-icon name="list" />
            </q-item-section>
            <q-item-section> To-do </q-item-section>
          </q-item>
          <q-item to="/home/complete-tasks" clickable exact v-ripple>
            <q-item-section avatar>
              <q-icon name="check_circle" />
            </q-item-section>
            <q-item-section> Completed Tasks </q-item-section>
          </q-item>
          <q-item to="/home/favorite-tasks" clickable exact v-ripple>
            <q-item-section avatar>
              <q-icon name="star" />
            </q-item-section>
            <q-item-section> Favorite Tasks </q-item-section>
          </q-item>
          <q-item to="/home/help" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="help" />
            </q-item-section>
            <q-item-section> Help </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
      <q-img
        class="absolute-top"
        src="src/assets/images/mountain.jpeg"
        style="height: 192px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          <div class="text-weight-bold">Tawhid Ahmed</div>
          <div>@tawhid</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view v-slot="{ Component, route }">
        <keep-alive>
          <component :is="Component" :key="route.fullPath" />
        </keep-alive>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { date } from "quasar";

defineOptions({
  name: "MainLayout",
});

const leftDrawerOpen = ref(false);
const route = useRoute();
const router = useRouter();

const isAuthPage = ref(
  route.path === "/" ||
    route.path.startsWith("/login") ||
    route.path.startsWith("/register")
); // Check if the route is the root, login, or register page

watch(route, () => {
  isAuthPage.value =
    route.path === "/" ||
    route.path.startsWith("/login") ||
    route.path.startsWith("/register");
});

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

function goToAuthPage() {
  router.push("/");
}

const timeStamp = Date.now();
const formattedString = date.formatDate(timeStamp, "dddd D MMMM");
</script>

<style lang="scss" scoped>
.header-image {
  height: 100%;
  z-index: -1;
  opacity: 0.2;
  filter: grayscale(100%);
}
</style>
