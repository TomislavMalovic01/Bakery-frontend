<script setup lang = "ts">
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {formatDate} from '@/services/main.service'
import type { CategoryModel } from '@/models/category.model';
import { CategoryService } from '@/services/category.service copy';






const route = useRoute()
const router = useRouter()
const id = Number.parseInt(route.params.id as any)

const category = ref<CategoryModel>()
CategoryService.getCategoryById(id).then(rsp => category.value = rsp.data)

function updateCategory(){
    CategoryService.updateCategory(id , category.value).then(rsp=>{
        router.push({
            path:'/category'
        })
    })
}


</script>

<template>
    <div v-if = "category">
        <h1 class="h3">Edit Category</h1>
        <RouterLink class="btn btn-danger mb-3" to="/category">
                <i class="fa-solid fa-rotate-left"></i> Return to Category list
    </RouterLink> 
        <div class="mb-3">
    <label for="id" class="form-label">Id : </label>
    <input type="number" class="form-control" id="id" :value="category.categoryId"  disabled>
  </div>

  <div class="mb-3">
    <label for="name" class="form-label">Name : </label>
    <input type="text" class="form-control" id="name" v-model="category.name"  >
  </div>

  <div class="mb-3">
    <label for="created" class="form-label">createdAt : </label>
    <input type="text" class="form-control" id="created" :value="formatDate(category.createdAt)"  disabled>
  </div>

  <div class="mb-3">
    <label for="updated" class="form-label">updatedAt : </label>
    <input type="text" class="form-control" id="updated" :value="formatDate(category.updatedAt)"  disabled>
  </div>

  <button type="button" class="btn btn-success" @click="updateCategory">
    <i class="fa-solid fa-save"></i> Save
  </button>
  
    </div>


    {{ category }}
</template>
