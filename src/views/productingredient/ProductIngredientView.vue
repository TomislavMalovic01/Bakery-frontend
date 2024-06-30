<script setup lang="ts">
import type { ProductIngredientModel } from '@/models/productingredient.model';
import { ProductIngredientService } from '@/services/productingredient.service';
import { ref } from 'vue';

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
    <RouterLink class="btn btn-success mb-3" to="/admin-panel/productingredient/new">
                <i class="fa-solid fa-plus"></i> Add new Product Ingredient
    </RouterLink> 
    <table class="table table-striped table-hover">
  <thead class="table-dark">
    <tr>
      <th scope="col">Product Name</th>
      <th scope="col">Ingredients Name</th>
      <th scope="col">Vegan</th>
      <th scope="col">Vegetarian</th>
      <th scope="col">Options</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="t in productingredient" :key="t.productId">
      <td>{{ t.productName }}</td>
      <td>
        <span v-for="(ingredient, index) in t.ingredients" :key="index">
          {{ ingredient.name }}<span v-if="index < t.ingredients.length - 1">, </span>
        </span>
      </td>
      <td>
        <i class="fa-solid" :class="t.isVegan ? 'fa-check text-success' : 'fa-times text-danger'"></i>
      </td>
      <td>
        <i class="fa-solid" :class="t.isVegeterian ? 'fa-check text-success' : 'fa-times text-danger'"></i>
      </td>
      <td>
        <div class="btn-group">
          <RouterLink class="btn btn-sm btn-primary" :to="`/admin-panel/productingredient/${t.productId}`">
            <i class="fa-solid fa-circle-info"></i> Details
          </RouterLink>
          <button type="button" class="btn btn-sm btn-danger ms-2" @click="removeProductIngredient(t)">
            <i class="fa-solid fa-trash"></i> Delete
          </button>
        </div>
      </td>
    </tr>
  </tbody>
</table>


   </div>
 

</template>


