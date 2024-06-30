<script setup lang="ts"> //vue setup se zove ovaj nacin pisanje koda
import type { ProductModel } from '@/models/product.model';
import { formatDate } from '@/services/main.service';
import { ProductService } from '@/services/product.service';

import { ref } from 'vue';
//routert link se tretira kao a tag
    const product = ref<ProductModel[] | undefined>(undefined)
      ProductService.getAllProduct().then(rsp => {
    if (rsp) {
    product.value = rsp.data; // Ovde bi trebalo proveriti da li je rsp definisan pre pristupa rsp.data
    } else {
    console.error('Error: Unexpected response from ProductService.getAllProduct()');
    }
    });

     async function removeProduct (model : ProductModel ){
     await ProductService.deleteProduct(model.productId)
     product.value = product.value?.filter(t => t.productId !== model.productId)
    }
</script>


<template>
   <div v-if="product">
    <h1 class="h3">Product</h1>
    <RouterLink class="btn btn-success mb-3" to="/admin-panel/product/new">
                <i class="fa-solid fa-plus"></i> Add new Product
    </RouterLink> 
    <table class="table table-striped table-hover">
  <thead class="table-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Description</th>
      <th scope="col">Price</th>
      <th scope="col">Energy Value</th>
      <th scope="col">Unit</th>
      <th scope="col">Category ID</th>
      <th scope="col">Created At</th>
      <th scope="col">Updated At</th>
      <th scope="col">Options</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="t in product" :key="t.productId">
      <th scope="row">{{ t.productId }}</th>
      <td>{{ t.name }}</td>
      <td>{{ t.description }}</td>
      <td>{{ t.price + "$"}}</td>
      <td>{{ t.energyValiue }}</td>
      <td>{{ t.unit }}</td>
      <td>{{ t.categoryId }}</td>
      <td>{{ formatDate(t.createdAt) }}</td>
      <td>{{ formatDate(t.updatedAt) }}</td>
      <td>
        <div class="btn-group">
          <RouterLink class="btn btn-sm btn-primary" :to="`/admin-panel/product/${t.productId}`">
            <i class="fa-solid fa-circle-info"></i> Details
          </RouterLink>
          <button type="button" class="btn btn-sm btn-danger ms-2" @click="removeProduct(t)">
            <i class="fa-solid fa-trash"></i> Delete
          </button>
        </div>
      </td>
    </tr>
  </tbody>
</table>

   </div>
   <div v-else> Product are beeing loaded... Please wait</div>

</template>



