<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <div class="container py-2">
            <a href="#" class="navbar-brand">
                <span>ToDo</span>
                <strong>List</strong>
            </a>
            <p>{{useAuthStore.user}}</p>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse  show" id="navbarNav">
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
                            <router-link  :to="{ name: 'login' }"  class="btn btn-outline-secondary ms-2">Login</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link  :to="{ name: 'register' }" class="btn btn-danger ms-2">Register</router-link>
                        </li>
                    </template>
                    <template v-else>
                        <!-- <li class="nav-item" >
                            
                        </li> -->
                        <li class="nav-item dropdown" >
                            <a class="nav-link dropdown-toggle" :class="toggleClass" @click.prevent="toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {{store.user.name}}
                            </a>
                            <ul class="dropdown-menu" :class="toggleClass" v-show="isOpen">
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


const router = useRouter();
const store = useAuthStore();
const isOpen = ref(false);

const toggle = () => isOpen.value = !isOpen.value;
const toggleClass = computed(() => isOpen.value ? 'show' : '');


const logout = async () => {
    await store.handelLogout();
    isOpen.value = false;
    router.push({ name: 'login' });
}
    

</script>