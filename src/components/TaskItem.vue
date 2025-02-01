<template>
    <li class="flex justify-between items-center p-2 border-b">
        <span :class="{ 'line-through': task.completed }">{{ task.text }}</span>
        <div>
            <button @click="toggleCompletion" class="text-blue-500 hover:text-blue-700 mr-2">
                Complete
            </button>
            <button @click="removeTask" class="text-red-500 hover:text-red-700">
                Delete
            </button>
        </div>
    </li>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
    task: { text: string; completed: boolean };
    index: number;
}>();

const emit = defineEmits(['toggle-task', 'remove-task']);

const toggleCompletion = () => {
    emit('toggle-task', props.index);
};

const removeTask = () => {
    emit('remove-task', props.index);
};
</script>
