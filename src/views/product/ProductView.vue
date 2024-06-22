<script setup lang="ts"> //vue setup se zove ovaj nacin pisanje koda
import type { ProductModel } from '@/models/product.model';
import { formatDate } from '@/services/main.service';
import { ProductService } from '@/services/product.service';

import { ref } from 'vue';
//routert link se tretira kao a tag
    const product = ref<ProductModel[]>()
    ProductService.getAllProduct().then(rsp=>product.value = rsp.data )

     async function removeProduct (model : ProductModel ){
     await ProductService.deleteProduct(model.productId)
     product.value = product.value?.filter(t => t.productId !== model.productId)
    }
</script>


<template>
   <div v-if="product">
    <h1 class="h3">Product</h1>
    <RouterLink class="btn btn-success mb-3" to="/product/new">
                <i class="fa-solid fa-plus"></i> Add new Product
    </RouterLink> 
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">description</th>
      <th scope="col">price</th>
      <th scope="col">energyValiue</th>
      <th scope="col">unit</th>
      <th scope="col">categoryId</th>
      <th scope="col">Created At</th>
      <th scope="col">Updated At</th>
      <th scope="col">Options</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="t in product"> 
      <th scope="row">{{ t.productId }}</th>
      <td>{{t.name}}</td>
      <td>{{(t.description)}}</td>
      <td>{{(t.price)}}</td>
      <td>{{(t.energyValiue)}}</td>
      <td>{{(t.unit)}}</td>
      <td>{{(t.categoryId)}}</td>
      <td>{{formatDate(t.createdAt)}}</td>
      <td>{{formatDate(t.updatedAt)}}</td>
      <td>
        <div class="btn-group"> 
            <RouterLink class="btn btn-sm btn-primary" :to="`/product/${t.productId}`">
                <i class="fa-solid fa-circle-info"></i>
            </RouterLink>  
            <button type="button" class="btn btn-sm btn-danger" @click="removeProduct(t)">
                <i class="fa-solid fa-trash"></i>
            </button>
             
        </div>
      </td>
    </tr>
    
  </tbody>
</table>
   </div>
   <div v-else> Product are beeing loaded... Please wait</div>

</template>



