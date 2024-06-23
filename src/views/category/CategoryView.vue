<script setup lang="ts"> //vue setup se zove ovaj nacin pisanje koda
import type { CategoryModel } from '@/models/category.model';
import { CategoryService } from '@/services/category.service copy';
import { formatDate } from '@/services/main.service';


import { ref } from 'vue';
//routert link se tretira kao a tag
    const category = ref<CategoryModel[]>()
    CategoryService.getAllCategory().then(rsp=>category.value = rsp.data )

     async function removeCategory (model : CategoryModel ){
     await CategoryService.deleteCategory(model.categoryId)
     category.value = category.value?.filter(t => t.categoryId !== model.categoryId)
    }
</script>


<template>
   <div v-if="category">
    <h1 class="h3">Category</h1>
    <RouterLink class="btn btn-success mb-3" to="/category/new">
                <i class="fa-solid fa-plus"></i> Add new Category
    </RouterLink> 
   <table class="table table-striped table-hover">
  <thead class="table-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Created At</th>
      <th scope="col">Updated At</th>
      <th scope="col">Options</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="t in category" :key="t.categoryId">
      <th scope="row">{{ t.categoryId }}</th>
      <td>{{ t.name }}</td>
      <td>{{ formatDate(t.createdAt) }}</td>
      <td>{{ formatDate(t.updatedAt) }}</td>
      <td>
        <div class="btn-group">
          <RouterLink class="btn btn-sm btn-primary" :to="`/category/${t.categoryId}`">
            <i class="fa-solid fa-circle-info"></i> Details
          </RouterLink>
          <button type="button" class="btn btn-sm btn-danger ms-2" @click="removeCategory(t)">
            <i class="fa-solid fa-trash"></i> Delete
          </button>
        </div>
      </td>
    </tr>
  </tbody>
</table>

   </div>
   <div v-else> Category are beeing loaded... Please wait</div>

</template>



