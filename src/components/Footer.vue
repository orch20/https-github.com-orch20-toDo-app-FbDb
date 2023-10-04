<template>
    <footer class="footer fixed-bottom ">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3 ">
            <li class="nav-item">
                <router-link :to="{ name: 'policy' }" class="nav-link px-2  me-2 text-muted">Privacy</router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{ name: 'faq' }" class="nav-link px-2 me-2 text-muted">FAQs</router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{name: 'about'}" class="nav-link px-2 me-2 text-muted">About</router-link>
            </li>
        </ul>
        <p class="text-center text-muted">&copy; 2023 ToDoList</p>
    </footer>
</template>

<style>
    footer {
    box-sizing: border-box;
            }
    footer .nav-link.active {
    border-bottom: 2px solid 
    }     
</style>