<template>
    <main style="min-height: 50vh; margin-top: 2rem;">
            <div class="container">
                <div class="row" style="height: calc(100vh - 220px); overflow-y: auto;">
                    <div class="col-md-8 offset-md-2">
                        <!-- Add new Task -->
                        <NewTask/>
                        <!-- List of tasks -->
                        <TasksList 
                        :tasks="uncompletedTasks"
                        />
                        <div class="text-center my-3" v-show="showToggleCompletedBtn">
                            <button class="btn btn-sm btn-secondary"
                             @click="$event=> showCompletedTasks = !showCompletedTasks">
                                {{ showCompletedTasks ? $t("button.hide") : $t("button.show") }} {{$t("button.completed")}}
                            </button>
                        </div>
                        <TasksList 
                        :tasks="completedTasks" 
                        :show="completedTaskVisible && showCompletedTasks"
                        />
                        
                    </div>
                </div>
            </div>
        </main>
</template>

<script setup>
import { ref, computed  } from 'vue';
import TasksList from '../components/tasks/TasksList.vue'
import NewTask from '../components/tasks/NewTask.vue'
import { useTaskStore } from '../stores/task'
import { storeToRefs } from 'pinia'

const store = useTaskStore();

const { completedTasks, uncompletedTasks } = storeToRefs(store);
// const {fetchAllTasks } = store



// onMounted(async () => {
//     await fetchAllTasks ()   
// });

const showToggleCompletedBtn = computed(
    () => uncompletedTasks.value.length > 0 && completedTasks.value.length > 0);
const completedTaskVisible = computed(
    () => uncompletedTasks.value.length === 0 || completedTasks.value.length > 0)

const showCompletedTasks = ref(false || completedTaskVisible.value);
    </script>
