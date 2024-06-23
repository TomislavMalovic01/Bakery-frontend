<script setup lang="ts">
import { CategoryService } from '@/services/category.service copy';
import { ref } from 'vue';
import { useRouter } from 'vue-router';


const router = useRouter();

const category = ref<any>({
    name: '',
});

function saveCategory() {
    CategoryService.saveCategory(category.value).then(rsp => {
        router.push({ 
            path: '/category' 
        });
    })
}
</script>

<template>
    <div v-if="category">
        <h1 class="h3">Create Category</h1>
        <RouterLink class="btn btn-danger mb-3" to="/category">
            <i class="fa-solid fa-rotate-left"></i> Return to ingredient list
        </RouterLink> 

        <div class="mb-3">
            <label for="name" class="form-label">Name:</label>
            <input type="text" class="form-control" id="name" v-model="category.name">
        </div>

        <button type="button" class="btn btn-success" @click="saveCategory">
            <i class="fa-solid fa-save"></i> Save
        </button>
    </div>
</template>
