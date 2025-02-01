<template>
    <ul class="mt-4">
        <TaskItem v-for="(task, index) in tasks" :key="index" :task="task" :index="index"
            @toggle-task="emit('toggle-task', index)" @remove-task="emit('remove-task', index)" />
    </ul>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';
import TaskItem from './TaskItem.vue';

// Props
defineProps<{
    tasks: { text: string; completed: boolean }[];
}>();

// Emits
const emit = defineEmits(['toggle-task', 'remove-task']);
</script>
