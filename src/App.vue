<template>
  <main>
    <!-- heading -->
    <header>
      <img src="./assets/pinia-logo.svg" alt="">
      <h1>{{ taskStore.name }}</h1>
    </header>

    <!-- New task form -->

    <div class="new-task-form">
      <TaskForm />
    </div>

    <!-- filter -->
    <nav class="filter">
      <button @click="filter = 'all' "> All tasks</button> <!-- Al hacer click la variable reactiva filter toma como valor all y por lo tanto muestra todas las tareas porque se relaciona con el v-if All task list-->
      <button @click="filter = 'favs' "> Fav tasks</button> <!-- Al hacer click la variable reactiva filter toma como valor favs y por lo tanto muestra solo las tareas favoritas porque se relaciona con el v-if favs task list-->
    </nav>

    <!--All tasks list -->
    <div class="task-list" v-if="filter === 'all'">
      <p>You have {{ taskStore.totalCount }} tasks left to do</p>
      <div v-for="task in taskStore.tasks" :key="task.id"> <!-- Aqui estamos usando el estado tasks que contiene todas las tareas-->
      <TaskDetails :task="task"/>
    </div>
    </div>

        <!-- favs tasks list -->
      <div class="task-list" v-if="filter === 'favs'">
        <p>You have {{ taskStore.favCount }} fav tasks left to do</p>
        <div v-for="task in taskStore.favs" :key="task.id"> <!-- Aqui estamos usando el getter favs que contiene las tareas favoritas-->
        <TaskDetails :task="task"/>
      </div>
      </div>

  </main>

</template>



<script>
import TaskDetails from './components/TaskDetails.vue'
import TaskForm from './components/TaskForm.vue'
import { useTaskStore } from './store/TaskStore';
import { ref } from 'vue'

export default {
  components: { TaskDetails, TaskForm},
  setup() {
    const taskStore = useTaskStore()

    const filter = ref('all')

    return {
      taskStore, filter
    }
  }
}

</script>