<template>
  <main>
    <!-- heading -->
    <header>
      <img src="./assets/pinia-logo.svg" alt="">
      <h1>{{ taskStore.name }}</h1>
    </header>

    <!-- task list -->
    <div class="task-list">
      <div v-for="task in taskStore.tasks" :key="task.id">
      <TaskDetails :task="task"/>
    </div>
    </div>

  </main>

</template>



<script>
import TaskDetails from './components/TaskDetails.vue'
import { useTaskStore } from './store/TaskStore';

export default {
  components: { TaskDetails},
  setup() {
    const taskStore = useTaskStore()

    return {
      taskStore
    }
  }
}

</script>