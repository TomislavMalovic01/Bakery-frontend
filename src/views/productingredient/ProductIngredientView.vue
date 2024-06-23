<script setup lang="ts"> //vue setup se zove ovaj nacin pisanje koda
import type { ProductIngredientModel } from '@/models/productingredient.model';
import { ProductIngredientService } from '@/services/productingredient.service';

import { ref } from 'vue';
//routert link se tretira kao a tag
const productingredient = ref<ProductIngredientModel[]>()
    ProductIngredientService.getAllProductIngredient().then(rsp=>productingredient.value = rsp.data)
     async function removeProductIngredient (model : ProductIngredientModel ){
     await ProductIngredientService.deleteProductIngredient(model.productId)
     productingredient.value = productingredient.value?.filter(t => t.productId !== model.productId)
    }
</script>


<template>
   <div v-if="productingredient">
    <h1 class="h3">Product Ingredient</h1>
    <RouterLink class="btn btn-success mb-3" to="/productingredient/new">
                <i class="fa-solid fa-plus"></i> Add new Product Ingredient
    </RouterLink> 
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Product name</th>
      <th scope="col">Inrgedients name</th>
      <th scope="col">Options</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="t in productingredient"> 
      <td>{{(t.productName)}}</td>
      <td><span v-for="(ingredient) in t.ingredients">
        {{ ingredient.name + " "}} </span></td>
      <td>
        <div class="btn-group"> 
            <RouterLink class="btn btn-sm btn-primary" :to="`/productingredient/${t.productId}`">
                <i class="fa-solid fa-circle-info"></i>
            </RouterLink>  
            <button type="button" class="btn btn-sm btn-danger ms-2" @click="removeProductIngredient(t)">
                <i class="fa-solid fa-trash"></i>
            </button>
             
        </div>
      </td>
    </tr>
    
  </tbody>
</table>
   </div>
 

</template>


