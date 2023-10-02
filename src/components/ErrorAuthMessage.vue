<template>
    <p class="typewriter mt-3">{{ errorMessage ||store.errorDescription }}</p>
</template>

<script setup>
import { useAuthStore } from '../stores/auth';
const store = useAuthStore();

defineProps({
    errorMessage: {
        type: String,

    }
})
</script>    

<style scoped>
/* Animation */
.typewriter {
    margin: 0 auto;
    color: red;
    white-space: nowrap;
    overflow: hidden;
    animation: animated-text 2s steps(30, end) 1s 1 normal both;
}

/* text animation */

@keyframes animated-text {
    from {
        width: 0;
    }

    to {
        width: 100%;
    }
}</style>