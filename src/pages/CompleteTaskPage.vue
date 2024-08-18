<template>
  <q-page class="bg-grey-2 column">
    <completed-tasks :tasks="completedTasks" />
  </q-page>
</template>

<script setup>
import CompletedTasks from "src/components/CompletedTasks.vue";
import { useTaskStore } from "src/stores/tasks";
import { computed } from "vue";

const taskStore = useTaskStore();
const completedTasks = computed(() => taskStore.completedTasks);
</script>
