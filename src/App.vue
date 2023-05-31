<template>
  <main>
    <!-- heading -->
    <header>
      <img src="./assets/pinia-logo.svg" alt="">
      <h1>Pinia Tasks</h1>
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

    <!-- loading -->

    <div class="loading" v-if="loading">Loading tasks...</div>

    <!--All tasks list -->
    <div class="task-list" v-if="filter === 'all'">
      <p>You have {{ totalCount }} tasks left to do</p>
      <div v-for="task in tasks" :key="task.id"> <!-- Aqui estamos usando el estado tasks que contiene todas las tareas-->
      <TaskDetails :task="task"/>
    </div>
    </div>

        <!-- favs tasks list -->
      <div class="task-list" v-if="filter === 'favs'">
        <p>You have {{ favCount }} fav tasks left to do</p>
        <div v-for="task in favs" :key="task.id"> <!-- Aqui estamos usando el getter favs que contiene las tareas favoritas-->
        <TaskDetails :task="task"/>
      </div>
      </div>

      <!-- <button @click="taskStore.$reset">Reset state </button>         -->
      <!-- Se puede resetear los estados del store usando $reset, descomentar el boton y probar-->



  </main>

</template>



<script>
import { storeToRefs } from 'pinia';
import TaskDetails from './components/TaskDetails.vue'
import TaskForm from './components/TaskForm.vue'
import { useTaskStore } from './store/TaskStore';
import { ref } from 'vue'

export default {
  components: { TaskDetails, TaskForm},
  setup() {
    const taskStore = useTaskStore()

    // store to refs, Creates an object of references with all the state, getters, and plugin-added state properties of the store. Similar to toRefs() but specifically designed for Pinia stores so methods and non reactive properties are completely ignored. The param to pass is a store — store to extract the refs from
    // Para llamar a las acciones se debe realizar de forma habitual ejemplo: taskStore.addTask

    const {tasks, loading, favs, totalCount, favCount} = storeToRefs(taskStore)

    //fetch tasks

    taskStore.getTasks()

    const filter = ref('all')

    return {
      taskStore, filter , tasks, loading, favs, totalCount, favCount
    }
  }
}

</script>