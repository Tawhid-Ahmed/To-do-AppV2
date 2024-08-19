<template>
  <div class="text-h5 q-mt-lg text-center">Completed Task</div>
  <div class="q-mt-lg center-div">
    <q-list separator bordered style="width: 70%">
      <q-item
        v-for="(task, index) in completedTasks"
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
          <q-item-subtitle v-if="task.date" :class="{ done: task.done }">
            <q-icon name="event" />
            {{ formatDate(task.date) }}
          </q-item-subtitle>
        </q-item-section>
        <q-item-section side>
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
    <div v-if="!completedTasks.length" class="no-task absolute-center">
      <q-icon name="check" size="100px" color="primary" />
      <div class="text-h5 text-primary text-center">No completed tasks</div>
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

const completedTasks = computed(() => props.tasks.filter((task) => task.done));

const { toggleTask, toggleFavorite, formatDate } = taskStore;
const confirmDeleteTask = (index) => {
  $q.dialog({
    title: "Confirm",
    message: "Do you want to delete this task?",
    cancel: true,
    persistent: true,
  }).onOk(() => {
    taskStore.deleteTask(index);
    $q.notify({
      message: "Task deleted ☹",
      icon: "announcement",
      color: "red",
    });
  });
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
</style>
