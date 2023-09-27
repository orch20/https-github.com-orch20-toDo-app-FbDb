<template>
    <div class="relative">
        <input type="text" class="form-control form-control-lg padding-right-lg"
            placeholder="+ Add new task. Press enter to save." 
            @keydown.enter="addNewTask"
            />
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import {useTaskStore} from '../../stores/task';

const store = useTaskStore();
const { handelAddedTask } = store;

const newTask = reactive({
    name: '',
    is_completed: false
});

const addNewTask = async event => {
    if (event.target.value.trim()) {
        newTask.name = event.target.value.trim();
        event.target.value = '';
        await handelAddedTask(newTask)
    }
}

</script>

<style scoped>
.form-control:focus {
  box-shadow: none;
  border-color: olive;
  
}
</style>