<template>
  <div class="text-h5 q-mt-lg text-center">Favourite Task</div>
  <div class="q-mt-lg center-div">
    <q-list separator bordered style="width: 70%">
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
            @click.stop="deleteTask(index)"
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

const props = defineProps({
  tasks: Array,
  toggleTask: Function,
  deleteTask: Function,
});

const favoriteTasks = computed(() =>
  props.tasks.filter((task) => task.favorite)
);
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
