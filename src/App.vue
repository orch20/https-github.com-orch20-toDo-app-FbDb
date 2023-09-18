<template>
  <NavBar/>
  <!-- <TaskPage/> -->
  <router-view v-slot="{Component}"> 
    <transition name="fade" mode="out-in">
      <component :is="Component"/>
    </transition>
  </router-view>
  <Footer/>
</template>

<script setup>
import { onMounted } from 'vue';
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
import { useAuthStore } from './stores/auth';

const storeAuth = useAuthStore()

onMounted(() => storeAuth.init())
</script>



<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
