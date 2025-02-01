<template>
    <div class="max-w-md mx-auto mt-10 p-5 bg-white rounded-lg shadow-lg">
        <h1 class="text-2xl font-bold text-center mb-4">Task Manager</h1>
        <div class="flex gap-2 mb-4">
            <input v-model="newTask" @keyup.enter="addTask" placeholder="Add a new task"
                class="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <button @click="addTask" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Add</button>
        </div>
        <ul>
            <li v-for="(task, index) in tasks" :key="index" class="flex justify-between items-center p-2 border-b">
                <span :class="{ 'line-through text-gray-400': task.completed }" @click="toggleTask(index)"
                    class="cursor-pointer">
                    {{ task.text }}
                </span>
                <button @click="removeTask(index)" class="text-red-500 hover:text-red-700">&times;</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newTask: "",
            tasks: []
        };
    },
    methods: {
        addTask() {
            if (this.newTask.trim() !== "") {
                this.tasks.push({ text: this.newTask, completed: false });
                this.newTask = "";
            }
        },
        toggleTask(index) {
            this.tasks[index].completed = !this.tasks[index].completed;
        },
        removeTask(index) {
            this.tasks.splice(index, 1);
        }
    }
};
</script>
