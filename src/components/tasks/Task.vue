<template>
    <li class="list-group-item py-3">
        <div class="d-flex justify-content-start align-items-center">
            <input 
            class="form-check-input mt-0" 
            type="checkbox" 
            :class="completedClass" 
            :checked="task.is_completed"
            @change="markTaskAsCompleted"
            />
            <div class="ms-2 flex-grow-1" 
            :class="completedClass" 
            title="Double click the text to edit or remove"
            @dblclick="$event => isEdit=true">
                <div  class="relative" v-if="isEdit">
                    <input class="editable-task" 
                        type="text" 
                        v-focus
                        @keyup.esc="undo" 
                        @keyup.enter="updateTask"
                        v-model="editingTask"
                        v-on-click-outside="onClickOutsideHandler"
                    />
                </div>
                <span v-else>{{ task.name }}</span>
            </div>
            <div class="task-date left">{{formattedDate.value}}</div>
        </div>
        <TaskActions 
            @edit="$event=>isEdit = true" 
            @remove="removeTask"

        v-show="!isEdit" />
    </li>
</template>

<script setup>
import { computed, ref} from 'vue';
import TaskActions from './TaskActions.vue';
import { useTaskStore } from '../../stores/task';
import { useDateFormat} from '@vueuse/core'
import { vOnClickOutside } from '@vueuse/components'
import Swal from 'sweetalert2'

const store = useTaskStore();

const { handelUpdatedTask, handelCompletedTask, handelRemovedTask } = store;

const isEdit = ref(false);
const completedClass = computed(() => props.task.is_completed ? 'completed' : '');
const editingTask = ref(props.task.name);

const vFocus = {
    mounted: (el) => el.focus(),
};

const updateTask = async () => {
    const updatedTask = {
        ...props.task,
        name: editingTask.value
        
    }
    isEdit.value = false;
    await handelUpdatedTask(updatedTask);
    
}

const undo = () => { 
    isEdit.value = false;
    editingTask.value = props.task.name;
}

const markTaskAsCompleted = async () => { 
    const updatedTask = {
        ...props.task,
        is_completed: !props.task.is_completed
    }
    await handelCompletedTask(updatedTask);
    
}

const removeTask = async () => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#6c757d',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            handelRemovedTask(props.task);
           
        }
    })
        
}

const formattedDate = computed(() => {
    return useDateFormat(props.task.date, 'DD.MM.YY HH:mm:ss')
})

// save the task on click outside

const onClickOutsideHandler = () => {
    updateTask()
}
 
    const props = defineProps (
        {
            task: {
                type: Object,
                // required: true
            }
        })

</script>