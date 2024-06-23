<script setup lang = "ts">
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {formatDate} from '@/services/main.service'
import type { UserModel } from '@/models/user.model';
import { UserService } from '@/services/user.service';






const route = useRoute()
const router = useRouter()
const id = Number.parseInt(route.params.id as any)

const user = ref<UserModel>()
UserService.getUserById(id).then(rsp => user.value = rsp.data)

function updateUser(){
    UserService.updateUser(id , user.value).then(rsp=>{
        router.push({
            path:'/user'
        })
    })
}


</script>

<template>
    <div v-if = "user">
        <h1 class="h3">Edit User</h1>
        <RouterLink class="btn btn-danger mb-3" to="/user">
                <i class="fa-solid fa-rotate-left"></i> Return to Category list
    </RouterLink> 
        <div class="mb-3">
    <label for="id" class="form-label">Id : </label>
    <input type="number" class="form-control" id="id" :value="user.userId"  disabled>
  </div>

  <div class="mb-3">
    <label for="username" class="form-label">Username : </label>
    <input type="text" class="form-control" id="username" v-model="user.username"  >
  </div>

  <div class="mb-3">
    <label for="password" class="form-label">Password : </label>
    <input type="text" class="form-control" id="password" v-model="user.password"  >
  </div>

  <div class="mb-3">
    <label for="created" class="form-label">createdAt : </label>
    <input type="text" class="form-control" id="created" :value="formatDate(user.createdAt)"  disabled>
  </div>

  <div class="mb-3">
    <label for="updated" class="form-label">updatedAt : </label>
    <input type="text" class="form-control" id="updated" :value="formatDate(user.updatedAt)"  disabled>
  </div>

  <button type="button" class="btn btn-success" @click="updateUser">
    <i class="fa-solid fa-save"></i> Save
  </button>
  
    </div>


    {{ user }}
</template>
