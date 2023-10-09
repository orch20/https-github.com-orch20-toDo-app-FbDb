<template>
    <div class="toggle-container" :class="{ 'night': isNight }" @click="toggle">
        <div class="toggle-ball"></div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const isNight = ref(false) 


const toggle = () => isNight.value = !isNight.value
</script>

<style scoped>
.toggle-container {
    width: 60px;
    height: 30px;
    border-radius: 15px;
    background-color: #ddd;
    position: relative;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.toggle-container.night {
    background-color: #333;
}

.toggle-ball {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    top: 3px;
    left: 3px;
    transition: transform 0.3s ease;
}

.toggle-container.night .toggle-ball {
    transform: translateX(30px);
    background-color: #333;
}
</style>
