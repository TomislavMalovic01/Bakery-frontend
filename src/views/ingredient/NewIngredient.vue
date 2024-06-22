<script setup lang="ts">
import { IngredientService } from '@/services/ingredient.service';
import { ref } from 'vue';
import { useRouter } from 'vue-router';


const router = useRouter();

const ingredient = ref<any>({
    name: '',
    isVegan: 0 ,
    isVegeterian : 0
});

function saveIngredient() {
    IngredientService.saveIngredient(ingredient.value).then(rsp => {
        router.push({ 
            path: '/ingredient' 
        });
    })
}
</script>

<template>
    <div v-if="ingredient">
        <h1 class="h3">Create Ingredient</h1>
        <RouterLink class="btn btn-danger mb-3" to="/ingredient">
            <i class="fa-solid fa-rotate-left"></i> Return to ingredient list
        </RouterLink> 

        <div class="mb-3">
            <label for="name" class="form-label">Name:</label>
            <input type="text" class="form-control" id="name" v-model="ingredient.name">
        </div>

        <div class="mb-3">
            <label for="isVegan" class="form-label">isVegan:</label>
            <input type="number" class="form-control" id="isVegan" v-model="ingredient.isVegan">
        </div>

        <div class="mb-3">
            <label for="isVegeterian" class="form-label">isVegeterian:</label>
            <input type="number" class="form-control" id="isVegeterian" v-model="ingredient.isVegeterian">
        </div>

        <button type="button" class="btn btn-success" @click="saveIngredient">
            <i class="fa-solid fa-save"></i> Save
        </button>
    </div>
</template>
