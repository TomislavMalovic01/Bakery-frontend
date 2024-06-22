<script setup lang = "ts">
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {formatDate} from '@/services/main.service'
import { IngredientService } from '@/services/ingredient.service';
import type { IngredientModel } from '@/models/ingredient.model';






const route = useRoute()
const router = useRouter()
const id = Number.parseInt(route.params.id as any)

const ingredient = ref<IngredientModel>()
IngredientService.getIngredientById(id).then(rsp => ingredient.value = rsp.data)

function updateIngredient(){
    IngredientService.updateIngredient(id , ingredient.value).then(rsp=>{
        router.push({
            path:'/ingredient'
        })
    })
}


</script>

<template>
    <div v-if = "ingredient">
        <h1 class="h3">Edit Ingredient</h1>
        <RouterLink class="btn btn-danger mb-3" to="/ingredient">
                <i class="fa-solid fa-rotate-left"></i> Return to ingredient list
    </RouterLink> 
        <div class="mb-3">
    <label for="id" class="form-label">Id : </label>
    <input type="number" class="form-control" id="id" :value="ingredient.ingredientId"  disabled>
  </div>

  <div class="mb-3">
    <label for="name" class="form-label">Name : </label>
    <input type="text" class="form-control" id="name" v-model="ingredient.name"  >
  </div>

  <div class="mb-3">
    <label for="isVegan" class="form-label">isVegan : </label>
    <input type="number" class="form-control" id="isVegan" v-model="ingredient.isVegan"  >
  </div>

  <div class="mb-3">
    <label for="isVegeterian" class="form-label">isVegeterian : </label>
    <input type="number" class="form-control" id="isVegeterian" v-model="ingredient.isVegeterian"  >
  </div>

  <div class="mb-3">
    <label for="created" class="form-label">createdAt : </label>
    <input type="text" class="form-control" id="created" :value="formatDate(ingredient.createdAt)"  disabled>
  </div>

  <div class="mb-3">
    <label for="updated" class="form-label">updatedAt : </label>
    <input type="text" class="form-control" id="updated" :value="formatDate(ingredient.updatedAt)"  disabled>
  </div>

  <button type="button" class="btn btn-success" @click="updateIngredient">
    <i class="fa-solid fa-save"></i> Save
  </button>
  
    </div>


    {{ ingredient }}
</template>import type { IngredientModel } from '@/models/ingredient.model';
import { IngredientService } from '@/services/ingredient.service';
