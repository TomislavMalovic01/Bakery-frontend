<script setup lang="ts">
import { ProductService } from '@/services/product.service';
import { ref } from 'vue';
import { useRouter } from 'vue-router';


const router = useRouter();

const product = ref<any>({
    name: '',
    description: '',
    price: 0,
    energyValiue: 0 ,
    categoryId : 0,
    image:''
});

function saveProduct() {
    ProductService.saveProduct(product.value).then(rsp => {
        router.push({ 
            path: '/admin-panel/product' 
        });
    })
}
</script>

<template>
    <div v-if="product">
        <h1 class="h3">Create Product</h1>
        <RouterLink class="btn btn-danger mb-3" to="/admin-panel/product">
            <i class="fa-solid fa-rotate-left"></i> Return to product list
        </RouterLink> 

        <div class="mb-3">
            <label for="name" class="form-label">Name:</label>
            <input type="text" class="form-control" id="name" v-model="product.name">
        </div>

        <div class="mb-3">
            <label for="description" class="form-label">Description:</label>
            <input type="text" class="form-control" id="description" v-model="product.description">
        </div>

        <div class="mb-3">
            <label for="price" class="form-label">Price:</label>
            <input type="text" class="form-control" id="price" v-model="product.price">
        </div>

        <div class="mb-3">
            <label for="energyValiue" class="form-label">Energy Valiue:</label>
            <input type="text" class="form-control" id="energyValiue" v-model="product.energyValiue">
        </div>

        <div class="mb-3">
            <label for="unit" class="form-label">unit Valiue:</label>
            <input type="text" class="form-control" id="unit" v-model="product.unit">
        </div>

        <div class="mb-3">
            <label for="categoryId" class="form-label">Category:</label>
            <select class="form-control" id="categoryId" v-model="product.categoryId">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
                </select>
        </div>

        <div class="mb-3">
            <label for="image-url" class="form-label">Image Url</label>
            <input type="text" class="form-control" id="image-url" v-model="product.image">
        </div>

        <div class="mb-3">
            <img :src="product.image">
        </div>

        

        <button type="button" class="btn btn-success" @click="saveProduct">
            <i class="fa-solid fa-save"></i> Save
        </button>
    </div>
</template>
