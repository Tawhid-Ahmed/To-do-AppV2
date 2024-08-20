<template>
  <div class="text-h5 q-mt-lg q-mb-lg text-center">Favourite Task</div>
  <div class="q-mt-lg task-item">
    <q-list separator bordered class="full-width">
      <q-item
        v-for="(task, index) in favoriteTasks"
        :key="task.title"
        v-ripple
        clickable
        @click="toggleTask(task)"
      >
        <q-item-section avatar>
          <q-checkbox
            v-model="task.done"
            color="orange"
            checked-icon="task_alt"
            class="no-pointer-events"
            unchecked-icon="panorama_fish_eye"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label :class="{ done: task.done }">{{
            task.title
          }}</q-item-label>
        </q-item-section>
        <q-item-section v-if="task.done" side>
          <q-btn
            flat
            dense
            color="teal"
            icon="delete"
            @click.stop="confirmDeleteTask(index)"
          />
        </q-item-section>
        <q-item-section side>
          <q-btn
            flat
            dense
            color="red"
            :icon="task.favorite ? 'star' : 'star_border'"
            @click.stop="toggleFavorite(task)"
          />
        </q-item-section>
      </q-item>
    </q-list>
    <div v-if="!favoriteTasks.length" class="no-task absolute-center">
      <q-icon name="star_outline" size="100px" color="primary" />
      <div class="text-h5 text-primary text-center">No favorite tasks yet</div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useTaskStore } from "src/stores/tasks";
import { useQuasar } from "quasar";

const taskStore = useTaskStore();
const $q = useQuasar();
const props = defineProps({
  tasks: Array,
});

const favoriteTasks = computed(() =>
  props.tasks.filter((task) => task.favorite)
);

const { toggleTask, toggleFavorite } = taskStore;

const confirmDeleteTask = (index) => {
  const taskIndex = taskStore.tasks.findIndex(
    (task) => task === favoriteTasks.value[index]
  );
  if (taskIndex > -1) {
    $q.dialog({
      title: "Confirm",
      message: "Do you want to delete this task?",
      cancel: true,
      persistent: true,
    }).onOk(() => {
      taskStore.deleteTask(taskIndex);
      $q.notify({
        message: "Task deleted ☹",
        icon: "announcement",
        color: "red",
      });
    });
  }
};
</script>

<style scoped>
.done {
  text-decoration: line-through;
  text-decoration-color: purple;
  color: grey;
}
.center-div {
  display: flex;
  justify-content: center;
}
.no-task {
  opacity: 0.5;
}
.task-item {
  width: 70%;
  margin: 0 auto;
}
</style>
