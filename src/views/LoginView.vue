<script setup lang="ts">
import {AuthService} from '@/services/auth.service'
import  {login} from '@/services/main.service'
import{useRouter} from 'vue-router'
import{ref} from 'vue'

const username = ref<string>('')
const password = ref<string>('')
const router = useRouter()
async function doLogin(){
    try{
    if(username.value == '') return
    if(password.value == '') return
    const rsp = await login(username.value, password.value)
    AuthService.saveAuth(rsp.data)
    router.push({
        path:'/'
    })
} catch(e){
    alert(e)
}
}

</script>

<template>
     <div class="login-container">
    <div class="login-form">
      <h2 class="text-center mb-4">Admin login</h2>
      <form v-on:submit.prevent="doLogin">
        <div class="mb-3">
          <label for="username" class="form-label">Username</label>
          <input type="text" class="form-control" id="username" v-model="username" placeholder="Enter your username">
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" id="password" v-model="password" placeholder="Enter your password">
        </div>
        <button type="submit" class="btn btn-primary w-100">Submit</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('@/assets/slikaLogin.png');
  background-size: cover;
  background-position: center;
}

.login-form {
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #004085;
}
</style>
