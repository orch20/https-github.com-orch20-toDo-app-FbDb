<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom" >
        <div class="container py-2">
            <a href="#" class="navbar-brand">
                <span>ToDo</span>
                <strong>List</strong>
            </a>
            <p>{{useAuthStore.user}}</p>
            <button @click="toggleMenu" ref="ignoreElRef" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div v-on-click-outside="onClickOutsideHandler" class="collapse navbar-collapse" :class="toggleClassMenu" id="navbarNav">
                <ul  class="navbar-nav" v-if="store.isLoggedIn">
                    <li class="nav-item">
                        <router-link :to="{name:'tasks'}" class="nav-link">Tasks</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'summary'}" class="nav-link">Summary</router-link>
                    </li>
                </ul>
                <ul class="navbar-nav ms-auto">
                    <template v-if="!store.isLoggedIn">
                        <li class="nav-item">
                            <router-link  :to="{ name: 'login' }"  class="btn btn-outline-secondary ms-2 margin-top min-width-38">Login</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link  :to="{ name: 'register' }" class="btn btn-outline-secondary ms-2 margin-top min-width-38">Register</router-link>
                        </li>
                    </template>
                    <template v-else>
                        <!-- <li class="nav-item" >
                            
                        </li> -->
                        <li class="nav-item dropdown" >
                            <a class="nav-link dropdown-toggle" :class="toggleClassNameMenu" @click.prevent="toggleNameMenu" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {{store.user.name}}
                            </a>
                            <ul class="dropdown-menu" :class="toggleClassNameMenu" v-show="isOpenNameMenu">
                                <li>
                                    <router-link  :to="{ name: 'logout' }" class="dropdown-item" @click.prevent="logout" >Logout</router-link>
                                </li>
                                
                            </ul>
                            </li>
                    </template>
                </ul>
            </div>
        </div>
        
    </nav>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';
import { computed, ref } from 'vue';
import { vOnClickOutside } from '@vueuse/components'

const router = useRouter();
const store = useAuthStore();
const isOpenMenu = ref(false);
const isOpenNameMenu = ref(false);
const ignoreElRef = ref()

const toggleMenu = () => isOpenMenu.value = !isOpenMenu.value;
const toggleClassMenu = computed(() => isOpenMenu.value ? 'show' : '');

const toggleNameMenu = () => isOpenNameMenu.value = !isOpenNameMenu.value;
const toggleClassNameMenu = computed(() => isOpenNameMenu.value ? 'show' : '');


const logout = async () => {
    await store.handelLogout();
    isOpenNameMenu.value = false;
    router.push({ name: 'login' });
}

const onClickOutsideHandler = [
    () => {
        isOpenMenu.value = false
    },
    { ignore: [ignoreElRef] }
]
    

</script>

<style scoped>
@media (max-width: 991.98px) {
    .margin-top {
        margin-top: 0.7rem;
    }
    .navbar-nav .nav-item {
    margin-left: auto;
    }
    
}
.min-width-38 {
  min-width: 90px;
}
</style>