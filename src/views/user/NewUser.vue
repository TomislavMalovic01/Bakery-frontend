<script setup lang="ts">
import { UserService } from '@/services/user.service';
import { ref } from 'vue';
import { useRouter } from 'vue-router';


const router = useRouter();

const user = ref<any>({
    username: '',
    password: ''
});

function saveUser() {
    UserService.saveUser(user.value).then(rsp => {
        router.push({ 
            path: '/user' 
        });
    })
}
</script>

<template>
    <div v-if="user">
        <h1 class="h3">Create User</h1>
        <RouterLink class="btn btn-danger mb-3" to="/user">
            <i class="fa-solid fa-rotate-left"></i> Return to User
        </RouterLink> 

        <div class="mb-3">
            <label for="username" class="form-label">Username:</label>
            <input type="text" class="form-control" id="username" v-model="user.username">
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password:</label>
            <input type="text" class="form-control" id="password" v-model="user.password">
        </div>

        <button type="button" class="btn btn-success" @click="saveUser">
            <i class="fa-solid fa-save"></i> Save
        </button>
    </div>
</template>
