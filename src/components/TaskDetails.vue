<template>
    <div class="task">
        <h3>{{ task.title }}</h3>
        <div class="icons">
            <i 
            class="material-icons"
            @click="taskStore.deleteTask(task.id)"
            >delete</i>
            <i 
            class="material-icons"
            @click="taskStore.toggleFav(task.id)"
            :class="{active: task.isFav}"  
            >favorite</i> <!-- :class="{active: task.isFav}" esta clase se agrega si el valor de isFav es true -->


        </div>
    </div>
</template>

<script setup>
import { useTaskStore } from '../store/TaskStore';

const taskStore = useTaskStore()

defineProps({
    task: Object
})




        


</script>