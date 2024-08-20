<template>
  <q-page class="bg-grey-2 column">
    <div v-if="editTaskIndex !== null" class="q-mt-lg center-div">
      <q-input
        class="custom-input"
        bg-color="white"
        rounded
        standout="bg-blue-4 text-white"
        v-model="editTask.title"
        @keyup.enter="saveTask"
        placeholder="Edit task"
        dense
        style="width: 50%"
      >
        <template v-slot:prepend> </template>
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy
              cover
              transition-show="scale"
              transition-hide="scale"
            >
              <q-date
                v-model="editTask.date"
                mask="YYYY-MM-DD HH:mm"
                @update:model-value="updateEditDate"
              >
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
          <q-btn round dense flat icon="check" @click="saveTask" />
          <q-btn round dense flat icon="cancel" @click="cancelEdit" />
        </template>
      </q-input>
    </div>
    <div v-else class="q-mt-lg center-div">
      <q-input
        class="custom-input"
        bg-color="white"
        rounded
        standout="bg-blue-4 text-white"
        v-model="newTask.title"
        @keyup.enter="addTask"
        placeholder="Add new task"
        dense
        style="width: 50%"
      >
        <template v-slot:prepend> </template>
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy
              cover
              transition-show="scale"
              transition-hide="scale"
            >
              <q-date
                v-model="newTask.date"
                mask="YYYY-MM-DD HH:mm"
                @update:model-value="updateDate"
              >
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
          <q-btn round dense flat icon="add" @click="addTask" />
        </template>
      </q-input>
    </div>

    <div class="text-h5 q-mt-lg text-center">Task</div>
    <div class="q-mt-lg task-item">
      <q-list separator bordered class="full-width">
        <q-item
          v-for="(task, index) in tasks"
          :key="task.title"
          v-ripple
          clickable
        >
          <q-item-section avatar>
            <q-checkbox
              v-model="task.done"
              color="orange"
              checked-icon="task_alt"
              unchecked-icon="panorama_fish_eye"
              @change="updateTaskDone(index, task.done)"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label :class="{ done: task.done }">
              {{ task.title }}
            </q-item-label>
            <q-item-subtitle v-if="task.date" :class="{ done: task.done }">
              <q-icon name="event" />
              <q-tooltip> Deadline </q-tooltip>
              {{ formatDate(task.date) }}
            </q-item-subtitle>
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
          <q-item-section side>
            <q-btn
              flat
              dense
              color="primary"
              icon="edit"
              @click.stop="editTaskHandler(index)"
            />
          </q-item-section>
        </q-item>
      </q-list>
    </div>

    <div v-if="!tasks.length" class="no-task absolute-center">
      <q-icon name="check" size="100px" color="primary" />
      <div class="text-h5 text-primary text-center">All tasks done :)</div>
    </div>

    <favorite-tasks :tasks="favoriteTasks" />
    <completed-tasks :tasks="completedTasks" />
  </q-page>
</template>

<script setup>
import { ref, computed } from "vue";
import { useQuasar } from "quasar";
import FavoriteTasks from "src/components/FavoriteTasks.vue";
import CompletedTasks from "src/components/CompletedTasks.vue";
import { useTaskStore } from "src/stores/tasks";

const $q = useQuasar();
const taskStore = useTaskStore();
const newTask = ref({ title: "", date: "" });
const editTaskIndex = ref(null);
const editTask = ref({ title: "", date: "" });

const tasks = computed(() => taskStore.tasks);
const favoriteTasks = computed(() => taskStore.favoriteTasks);
const completedTasks = computed(() => taskStore.completedTasks);

const { toggleTask, toggleFavorite, formatDate, updateTask } = taskStore;

const addTask = () => {
  if (typeof newTask.value.title === "string" && newTask.value.title.trim()) {
    taskStore.addTask({
      title: newTask.value.title,
      date: newTask.value.date,
      done: false,
      favorite: false,
    });
    newTask.value = { title: "", date: "" }; // Reset the form
  }
};

const editTaskHandler = (index) => {
  editTaskIndex.value = index;
  const task = tasks.value[index];
  editTask.value = { ...task }; // Clone the task to edit
};

const saveTask = () => {
  if (editTaskIndex.value !== null) {
    taskStore.updateTask(editTaskIndex.value, editTask.value);
    editTaskIndex.value = null; // Reset edit mode
    editTask.value = { title: "", date: "" };
  }
};

const cancelEdit = () => {
  editTaskIndex.value = null; // Reset edit mode
  editTask.value = { title: "", date: "" };
};

const updateDate = (date) => {
  newTask.value.date = date; // Update the date property in newTask
};

const updateEditDate = (date) => {
  editTask.value.date = date; // Update the date property in editTask
};

const updateTaskDone = (index, done) => {
  taskStore.updateTask(index, { ...tasks.value[index], done });
};

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
.task-item {
  width: 70%;
  margin: 0 auto;
}

/* Custom input styling */
</style>
