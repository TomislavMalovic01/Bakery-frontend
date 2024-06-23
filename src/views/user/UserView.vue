<script setup lang="ts"> //vue setup se zove ovaj nacin pisanje koda
import type { UserModel } from '@/models/user.model';
import { formatDate } from '@/services/main.service';
import { UserService } from '@/services/user.service';


import { ref } from 'vue';
//routert link se tretira kao a tag
    const user = ref<UserModel[]>()
    UserService.getAllUser().then(rsp=>user.value = rsp.data )

     async function removeUser (model : UserModel ){
     await UserService.deleteUser(model.userId)
     user.value = user.value?.filter(t => t.userId !== model.userId)
    }
</script>


<template>
   <div v-if="user">
    <h1 class="h3">User</h1>
    <RouterLink class="btn btn-success mb-3" to="/user/new">
                <i class="fa-solid fa-plus"></i> Add new User
    </RouterLink> 
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Password</th>
      <th scope="col">createdAt</th>
      <th scope="col">updatedAt</th>
      <th scope="col">option</th>

    </tr>
  </thead>
  <tbody>
    <tr v-for="t in user"> 
      <th scope="row">{{ t.userId }}</th>
      <td>{{t.username}}</td>
      <td>{{t.password}}</td>
      <td>{{formatDate(t.createdAt)}}</td>
      <td>{{formatDate(t.updatedAt)}}</td>
      <td>
        <div class="btn-group"> 
            <RouterLink class="btn btn-sm btn-primary" :to="`/user/${t.userId}`">
                <i class="fa-solid fa-circle-info"></i>
            </RouterLink>  
            <button type="button" class="btn btn-sm btn-danger" @click="removeUser(t)">
                <i class="fa-solid fa-trash"></i>
            </button>
             
        </div>
      </td>
    </tr>
    
  </tbody>
</table>
   </div>
   <div v-else> User are beeing loaded... Please wait</div>

</template>



