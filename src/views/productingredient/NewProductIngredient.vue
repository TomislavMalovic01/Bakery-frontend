<script setup lang="ts">
import { IngredientService } from '@/services/ingredient.service';
import { ProductService } from '@/services/product.service';
import { ProductIngredientService } from '@/services/productingredient.service';
import { ref } from 'vue';
import { useRouter } from 'vue-router';


const router = useRouter();

const productingredient = ref<any>({
    productId: 0,
    ingredientId: 0,
    name : "",

});

const products = ref<any[]>([]);
const ingredients = ref<any[]>([]);

    ProductService.getAllProduct().then(rsp => {
        products.value = rsp.data;
    });
    IngredientService.getAllIngredient().then(rsp => {
        ingredients.value = rsp.data;
    });

function saveProductIngredient() {
    ProductIngredientService.saveProductIngredient(productingredient.value).then(rsp => {
        router.push({ 
            path: '/admin-panel/productingredient' 
        });
    })
}
</script>

<template>
    <div v-if="productingredient">
        <h1 class="h3">Create Product Ingredient</h1>
        <RouterLink class="btn btn-danger mb-3" to="/admin-panel/productingredient">
            <i class="fa-solid fa-rotate-left"></i> Return to Product Ingredients
        </RouterLink> 

        <div class="mb-3">
          <label for="product" class="form-label">Product</label>
          <select class="form-select" id="product" v-model="productingredient.productId">
            <option :value="0">Select Product</option>
            <option v-for="product in products" :value="product.productId">{{ product.name }}</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="ingredient" class="form-label">Ingredient</label>
          <select class="form-select" id="ingredient" v-model="productingredient.ingredientId">
            <option :value="0">Select Ingredient</option>
            <option v-for="ingredient in ingredients" :value="ingredient.ingredientId">{{ ingredient.name }}</option>
          </select>
        </div>


        <button type="button" class="btn btn-success" @click="saveProductIngredient">
            <i class="fa-solid fa-save"></i> Save
        </button>
    </div>
</template>
