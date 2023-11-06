<template>
    <main style="min-height: 50vh; margin-top: 2rem;">
        <div class="container">
            <h1 class="title">{{$t("summaryPage.title")}}</h1>
             <table class="table is-fullwidth">
                <thead>
                    <tr>
                        <th></th>                 
                        <th class="text-center">{{ $t("summaryPage.value") }}</th>
                    </tr>
                </thead>
                <tbody>
              <tr>
                <td >{{ $t("summaryPage.tasks") }}</td>
                <td class="text-center">{{ tasks.length }}</td>
              </tr>
              <tr>
                <td>{{ $t("summaryPage.completedTasks") }}</td>
                <td class="text-center">{{ completedTasks.length }}</td>
              </tr>
              <tr>
                <td>{{ $t("summaryPage.incompletedTasks") }}</td>
                <td class="text-center">{{ uncompletedTasks.length }}</td>
              </tr>
              <tr>
                <td>{{ $t("summaryPage.completedPercentage") }}</td>
                <td class="text-center">{{percentageOfCompletedTasks()}}%</td>
              </tr>

              <!-- <tr>
                <td>Number of Overdue Tasks</td>
                <td>{{ overdueTasks.length }}</td>
              </tr>
              <tr>
                <td>Percentage of Overdue Tasks</td>
                <td>{{ (overdueTasks.length / tasks.length * 100).toFixed(2) }}%</td>
              </tr> -->
            </tbody>
            </table>
        </div>
    </main>
</template>

<script setup>
import {useTaskStore} from '../stores/task'

const {tasks, completedTasks, uncompletedTasks} = useTaskStore();

const percentageOfCompletedTasks = () => {
  if (tasks.length === 0) return '0,00';
  return `${((completedTasks.length / tasks.length) * 100).toFixed(2)}`;
}

</script>