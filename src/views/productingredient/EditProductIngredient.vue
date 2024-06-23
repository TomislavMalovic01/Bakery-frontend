<script setup lang = "ts">

import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {formatDate} from '@/services/main.service'
import type { ProductIngredientModel } from '@/models/productingredient.model';
import { ProductIngredientService } from '@/services/productingredient.service';
import { IngredientService } from '@/services/ingredient.service';






const route = useRoute()
const router = useRouter()
const id = Number.parseInt(route.params.id as any)

const ingredients = ref<any[]>([]);
  IngredientService.getAllIngredient().then(rsp => {
        ingredients.value = rsp.data;
    });

const productingredient = ref<ProductIngredientModel>()
  ProductIngredientService.getProductIngredientById(id).then(rsp => {
    const data:ProductIngredientModel =  rsp.data;
    productingredient.value = {
        ...data,
        ingredients: data.ingredients.map(ingredient => ({
            ...ingredient,
            oldIngredientId: ingredient.ingredientId
        }))
    };
});

function updateProductIngredient(ingredientId: number, oldIngredientId: number){
    const pi = {productId: id, ingredientId: ingredientId}
    ProductIngredientService.updateProductIngredient(id, oldIngredientId, pi).then(rsp=>{
        router.push({
            path:'/productingredient'
        })
    })
}


async function deleteProductIngredientInEdit(oldIngredientId: number) {
  try {
    await ProductIngredientService.deleteProductIngredientInEdit(id,oldIngredientId);
    if (productingredient.value) {
      productingredient.value.ingredients = productingredient.value.ingredients.filter(t => t.ingredientId !== oldIngredientId);
    }
  } catch (error) {
    console.error("Error deleting product ingredient:", error);
  }
}






</script>

<template>
    <div v-if = "productingredient">
        <h1 class="h3">Edit Product</h1>
        <RouterLink class="btn btn-danger mb-3" to="/productingredient">
                <i class="fa-solid fa-rotate-left"></i> Return to product ingredient
    </RouterLink> 
  <div class="mb-3">
    <label for="productId" class="form-label">Product : </label>
    <input type="text" class="form-control" id="productId" :value="productingredient.productName" disabled >
  </div>

  <div class="container mt-4">
  <div class="card mb-3" v-for="i in productingredient.ingredients" :key="i.ingredientId">
    <div class="card-body">
      <h5 class="card-title">Update Ingredient</h5>
      <div class="form-group">
        <label for="ingredient" class="form-label">Ingredient</label>
        <div class="d-flex">
          <select class="form-select me-2" id="ingredient" v-model="i.ingredientId">
            <option :value="0">Select Ingredient</option>
            <option v-for="ingredient in ingredients" :value="ingredient.ingredientId">{{ ingredient.name }}</option>
          </select>
          <button type="button" class="btn btn-success" @click="updateProductIngredient(i.ingredientId, i.oldIngredientId!)">
            <i class="fa-solid fa-save"></i> Save
          </button>

          <button type="button" class="btn btn-danger ms-2" @click="deleteProductIngredientInEdit(i.oldIngredientId!)">
            <i class="fa-solid fa-trash"></i> Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>


</template>
