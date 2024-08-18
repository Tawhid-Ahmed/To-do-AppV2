<template>
  <q-page class="bg-grey-2 column">
    <favorite-tasks :tasks="favoriteTasks" />
  </q-page>
</template>

<script setup>
import FavoriteTasks from "src/components/FavoriteTasks.vue";
import { useTaskStore } from "src/stores/tasks";
import { computed } from "vue";

const taskStore = useTaskStore();
const favoriteTasks = computed(() => taskStore.favoriteTasks);
</script>
