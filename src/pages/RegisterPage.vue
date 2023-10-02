<template>
    <main class="auth-wrapper">
        <form class="auth-form" @submit.prevent="handleSubmit">
            <h1>
                <span>ToDo</span>
                <strong>List</strong>
            </h1>
            <h2 class="h3 mb-4 fw-normal">Please sign up</h2>
             <div class="form-floating mb-2">
                <input type="name" class="form-control" :class="{ 'is-invalid': false }" id="name" v-model="form.name"  placeholder="Your name" autocomplete="given-name" />
                <label for="name">Name</label>
            </div>
            <div class="form-floating mb-2">
                <input type="email" class="form-control" :class="{ 'is-invalid': errors.email && errors.email[0] }" id="email" v-model="form.email"  placeholder="name@example.com" autocomplete="email" />
                <label for="email">Email</label>
                
            </div>
            <div class="form-floating mb-3">
                <input type="password" class="form-control" id="password" :class="{ 'is-invalid': errors.password && errors.password[0] }" v-model="form.password"  placeholder="Password" autocomplete="new-password"/>
                <label for="password">Password</label>
                
            </div>
            <div class="form-floating mb-3">
                <input type="password" class="form-control" :class="{ 'is-invalid': form.passwordNotMatch }" id="password_confirmation" v-model="form.password_confirmation"
                    placeholder="Password Confirmation" autocomplete="new-password" />
                <label for="password_confirmation">Password Confirmation</label>
            </div>
            <button class="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
            <ErrorAuthMessage :errorMessage="form.errorMessage" v-if="errors.message || form.passwordNotMatch"/>
        </form>
    </main>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { reactive } from 'vue';
import { storeToRefs } from 'pinia';
import { useAuthStore } from '../stores/auth';
import ErrorAuthMessage from '../components/ErrorAuthMessage.vue';

const router = useRouter();
const store = useAuthStore();
const { isLoggedIn, errors } = storeToRefs(store);
const { handelRegister } = store;

const form = reactive({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    passwordNotMatch: false,
    errorMessage: ''
    
});


const handleSubmit = async () => {
    formConfirmation();
    await handelRegister(form);
    if (isLoggedIn.value) {
        router.push({ name: 'tasks' });
        form.passwordNotMatch = false
    }

}

const formConfirmation = () => {
    form.passwordNotMatch = false
    form.errorMessage = ''

    if (!form.name) {
        form.errorMessage = 'Name is required';
        return
    }

    if (form.password_confirmation !== form.password) {
        form.passwordNotMatch = true
        form.errorMessage = 'Password confirmation does not match';
        return
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
</style>