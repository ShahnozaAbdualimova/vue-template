<template>
    <div class="mt-4 flex items-center space-x-2">
        <input v-model="newTask" type="text" placeholder="New task" class="border p-2 w-full" @keyup.enter="addTask" />
        <button @click="addTask" class="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
            Add
        </button>
    </div>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from 'vue';

const newTask = ref('');
const emit = defineEmits(['add-task']);

const addTask = () => {
    if (newTask.value.trim() !== '') {
        emit('add-task', newTask.value);
        newTask.value = '';
    }
};
</script>
