<script setup lang="ts"> //vue setup se zove ovaj nacin pisanje koda
import type { IngredientModel } from '@/models/ingredient.model';
import { IngredientService } from '@/services/ingredient.service';
import { formatDate } from '@/services/main.service';


import { ref } from 'vue';
//routert link se tretira kao a tag
    const ingredient = ref<IngredientModel[]>()
    IngredientService.getAllIngredient().then(rsp=>ingredient.value = rsp.data )

     async function removeIngredient (model : IngredientModel ){
     await IngredientService.deleteIngredient(model.ingredientId)
     ingredient.value = ingredient.value?.filter(t => t.ingredientId !== model.ingredientId)
    }
</script>


<template>
   <div v-if="ingredient">
    <h1 class="h3">Ingredient</h1>
    <RouterLink class="btn btn-success mb-3" to="/ingredient/new">
                <i class="fa-solid fa-plus"></i> Add new Ingredient
    </RouterLink> 
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Is Vegan</th>
      <th scope="col">Is vegeterian</th>
      <th scope="col">createdAt</th>
      <th scope="col">updatedAt</th>
      <th scope="col">option</th>

    </tr>
  </thead>
  <tbody>
    <tr v-for="t in ingredient"> 
      <th scope="row">{{ t.ingredientId }}</th>
      <td>{{t.name}}</td>
      <td>{{ t.isVegan ? 'Yes' : 'No' }}</td>
      <td>{{ t.isVegeterian ? 'Yes' : 'No' }}</td>
      <td>{{formatDate(t.createdAt)}}</td>
      <td>{{formatDate(t.updatedAt)}}</td>
      <td>
        <div class="btn-group"> 
            <RouterLink class="btn btn-sm btn-primary" :to="`/ingredient/${t.ingredientId}`">
                <i class="fa-solid fa-circle-info"></i>
            </RouterLink>  
            <button type="button" class="btn btn-sm btn-danger" @click="removeIngredient(t)">
                <i class="fa-solid fa-trash"></i>
            </button>
             
        </div>
      </td>
    </tr>
    
  </tbody>
</table>
   </div>
   <div v-else> Ingredient are beeing loaded... Please wait</div>

</template>



