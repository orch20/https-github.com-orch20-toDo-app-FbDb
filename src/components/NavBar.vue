<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom" >
        <div class="container py-2">
            <a href="#" class="navbar-brand">
                <span>ToDo</span>
                <strong>List</strong>
            </a>
            <p>{{useAuthStore.user}}</p>
            <button @click="toggleMenu" ref="ignoreElRef" class="navbar-toggler" :class="{ collapsed: !isOpenMenu }" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div v-on-click-outside="onClickOutsideHandler" class="collapse navbar-collapse" :class="toggleClassMenu" id="navbarNav">
                <ul  class="navbar-nav" v-if="store.isLoggedIn">
                    <li class="nav-item">
                        <router-link :to="{name:'tasks'}" class="nav-link">{{ $t("navbar.tasks") }}</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'summary'}" class="nav-link">{{ $t("navbar.summary") }}</router-link>
                    </li>
                </ul>
                <ul class="navbar-nav ms-auto">
                    <template v-if="!store.isLoggedIn">
                        <li class="nav-item">
                            <router-link  :to="{ name: 'login' }"  class="btn btn-outline-secondary ms-2 margin-top min-width-38">{{ $t("button.login") }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link  :to="{ name: 'register' }" class="btn btn-outline-secondary ms-2 margin-top min-width-38">{{ $t("button.register") }}</router-link>
                        </li>
                    </template>
                    <template v-else>
                        <li class="nav-item dropdown d-flex flex-column " >
                            <a v-on-click-outside="onClickOutsideHandler" class="ms-auto nav-link dropdown-toggle" :class="toggleClassNameMenu" @click.prevent="toggleNameMenu" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {{store.user.name}}
                            </a>
                            <ul class="dropdown-menu" :class="toggleClassNameMenu" v-show="isOpenNameMenu">
                                <li >
                                    <router-link  :to="{ name: 'logout' }" class="dropdown-item" @click.prevent="logout" >{{ $t("button.logout") }}</router-link>
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
        isOpenNameMenu.value = false
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

.navbar-toggler-icon {
  background-image: none!important;
  background-color: var(--bs-gray-800);
  height: 3px;
  width: 25px;
  margin: 10px 0;
  position: relative;
  transition: all 0.35s ease-out;
  transform-origin: center;
}

.navbar-toggler-icon::before {
  display: block;
  background-color: var(--bs-gray-800);
  height: 3px;
  content: "";
  position: relative;
  top: -7px;
  transition: all 0.15s ease-out;/*taken down to hide quicker*/
  transform-origin: center;
}

.navbar-toggler-icon::after {
  display: block;
  background-color: var(--bs-gray-800);
  height: 3px;
  content: "";
  position: relative;
  top: 4px;
  transition: all 0.35s ease-out;
  transform-origin: center;
}

.navbar-dark .navbar-toggler-icon,
.navbar-dark .navbar-toggler-icon::before,
.navbar-dark .navbar-toggler-icon::after {
  background-color: var(--bs-gray-100);
}

.navbar-toggler:not(.collapsed) .navbar-toggler-icon {
  transform: rotate(45deg);
}

.navbar-toggler:not(.collapsed) .navbar-toggler-icon::before {
  opacity: 0;
}

.navbar-toggler:not(.collapsed) .navbar-toggler-icon::after {
  transform: rotate(-90deg) translateX(7px);
}

/* logout button */
@media (min-width: 992px){
.navbar-expand-lg .navbar-nav .dropdown-menu {
    position: absolute;
}
.dropdown-menu{
    top: 60px
}
}
.dropdown-menu{
    padding: 0px;
    min-width: 4rem
}
.dropdown-item:hover{
    color:red
}

</style>