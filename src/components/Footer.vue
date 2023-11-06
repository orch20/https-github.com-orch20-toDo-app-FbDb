<template>
    <footer class="footer fixed-bottom ">
        
        <ul class="nav justify-content-center border-bottom pb-3 mb-3 ">
            <li class="nav-item">
                <router-link :to="{ name: 'policy' }" class="nav-link px-2  me-2 text-muted">{{ $t("footer.privacy") }}</router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{ name: 'faq' }" class="nav-link px-2 me-2 text-muted">{{ $t("footer.faqs") }}</router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{name: 'about'}" class="nav-link px-2 me-2 text-muted">{{ $t("footer.about") }}</router-link>
            </li>
            <!-- <DayNightToggleButton/> -->
        </ul>
        
        <div class="">
            <p class="text-center text-muted inline-block">&copy; 2023 ToDoList <LanguageSwitcher/> </p>
            
        </div>
        
        
        
    </footer>
</template>

<script setup>
// import DayNightToggleButton from './DayNightToggleButton.vue';
import LanguageSwitcher from './LanguageSwitcher.vue';
</script>

<style>
    footer {
    box-sizing: border-box;
            }
    footer .nav-link.active {
    border-bottom: 2px solid 
    }     
</style>