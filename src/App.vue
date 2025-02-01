<template>
    <div class="w-full max-w-md mx-auto p-4">
        <h1 class="text-2xl font-semibold text-center">Task Management</h1>
        <TaskInput @add-task="addTask" />
        <TaskList :tasks="tasks" @toggle-task="toggleTaskCompletion" @remove-task="removeTask" />
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import TaskInput from './components/TaskInput.vue';
import TaskList from './components/TaskList.vue';

// Tasks array
const tasks = ref<{ text: string; completed: boolean }[]>([]);

// Methods
const addTask = (taskText: string) => {
    tasks.value.push({ text: taskText, completed: false });
};

const toggleTaskCompletion = (index: number) => {
    tasks.value[index].completed = !tasks.value[index].completed;
};

const removeTask = (index: number) => {
    tasks.value.splice(index, 1);
};
</script>
