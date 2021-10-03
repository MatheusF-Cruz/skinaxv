<template>
    <div class="login">
        <LoginForm />
    </div>    
</template>

<script>
import LoginForm from '../components/LoginForm.vue'

export default {
    name: "Login",
    components: {
        LoginForm,
    }
}
</script>

<style scoped>
.login{
    background-color: black !important;
    height: 100%;
    padding-bottom: 30px;
}
</style>