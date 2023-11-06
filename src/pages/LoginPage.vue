<template>
    <main class="auth-wrapper px-4 py-5 my-5 ">
        <form class="auth-form" @submit.prevent="handleSubmit">
            <h1>
                <span>ToDo</span>
                <strong>List</strong>
            </h1>
            <h2 class="h3 mb-4 fw-normal">{{ $t("logPage.login") }}</h2>
            <div class="form-floating mb-2">
                <input type="email" class="form-control" :class="{ 'is-invalid': errors.message }" id="email" v-model="form.email"  placeholder="name@example.com" autocomplete="email" />
                <label for="email">{{ $t("logPage.email") }}</label>
               
            </div>
            <div class="form-floating mb-3">
                <input type="password" class="form-control" id="password" :class="{ 'is-invalid': errors.message }" v-model="form.password"  placeholder="Password" autocomplete="current-password" />
                <label for="password">{{ $t("logPage.password") }}</label>
            </div>
            <ButtonAuth>{{ $t("button.signin") }}</ButtonAuth>
            <ErrorAuthMessage v-if="errors.message"/>
        </form>
    </main>
</template>

<script setup>
import {useRouter} from 'vue-router';
import { reactive } from 'vue';
import { storeToRefs } from 'pinia';
import { useAuthStore } from '../stores/auth';
import ErrorAuthMessage from '../components/ErrorAuthMessage.vue';
import ButtonAuth from './ButtonAuth.vue';

const router = useRouter();
const store = useAuthStore();
const { isLoggedIn, errors} = storeToRefs(store);
const {handelLogin} = store;

const form = reactive({
    email: '',
    password: ''
});


    const handleSubmit = async () => {
        await handelLogin(form);

        if (isLoggedIn.value) {
            router.push({ name: 'tasks' });
        }
        
    }
</script>

<style scoped>
.auth-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 60vh;
    margin-top: 2rem;
}

.auth-form {
    width: 400px;
}


/* Animation */
.typewriter {
color:red;
      white-space: nowrap;
  overflow: hidden; 
  animation: animated-text 2s steps(30,end) 1s 1 normal both;
}

/* text animation */

@keyframes animated-text{
  from{width: 0;}
    to{width: 100%;}
}


</style>