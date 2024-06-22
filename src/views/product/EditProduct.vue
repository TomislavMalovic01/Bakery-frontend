<script setup lang = "ts">
import type { ProductModel } from '@/models/product.model';
import { ProductService } from '@/services/product.service';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {formatDate} from '@/services/main.service'






const route = useRoute()
const router = useRouter()
const id = Number.parseInt(route.params.id as any)

const product = ref<ProductModel>()
ProductService.getProductById(id).then(rsp => product.value = rsp.data)

function updateProduct(){
    ProductService.updateProduct(id , product.value).then(rsp=>{
        router.push({
            path:'/product'
        })
    })
}


</script>

<template>
    <div v-if = "product">
        <h1 class="h3">Edit Product</h1>
        <RouterLink class="btn btn-danger mb-3" to="/product">
                <i class="fa-solid fa-rotate-left"></i> Return to product list
    </RouterLink> 
        <div class="mb-3">
    <label for="id" class="form-label">Id : </label>
    <input type="number" class="form-control" id="id" :value="product.productId"  disabled>
  </div>

  <div class="mb-3">
    <label for="name" class="form-label">Name : </label>
    <input type="text" class="form-control" id="name" v-model="product.name"  >
  </div>

  <div class="mb-3">
    <label for="description" class="form-label">description : </label>
    <input type="text" class="form-control" id="description" v-model="product.description"  >
  </div>

  <div class="mb-3">
    <label for="price" class="form-label">price : </label>
    <input type="number" class="form-control" id="price" v-model="product.price"  >
  </div>

  <div class="mb-3">
    <label for="energyValiue" class="form-label">energyValiue : </label>
    <input type="number" class="form-control" id="energyValiue" v-model="product.energyValiue"  >
  </div>

  <div class="mb-3">
    <label for="unit" class="form-label">unit : </label>
    <input type="text" class="form-control" id="unit" v-model="product.unit"  >
  </div>

  <div class="mb-3">
    <label for="created" class="form-label">createdAt : </label>
    <input type="text" class="form-control" id="created" :value="formatDate(product.createdAt)"  disabled>
  </div>

  <div class="mb-3">
    <label for="updated" class="form-label">updatedAt : </label>
    <input type="text" class="form-control" id="updated" :value="formatDate(product.updatedAt)"  disabled>
  </div>

  <button type="button" class="btn btn-success" @click="updateProduct">
    <i class="fa-solid fa-save"></i> Save
  </button>
  
    </div>


    {{ product }}
</template>