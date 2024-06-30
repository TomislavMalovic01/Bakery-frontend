<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import { AuthService } from './services/auth.service';

const router = useRouter();
const route = useRoute();

function logout() {
  AuthService.clearAuth();
  router.push({
    path: '/admin-panel/login',
  });
}

// Funkcija za proveru da li trenutni put sadrži "admin-panel"
function isAdminPanel() {
  return route.path.includes('/admin-panel');
}
</script>

<template>
<div class="container">
  <nav class="navbar navbar-expand-lg" v-if="isAdminPanel()">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="#">
        <i class="fa-solid fa-bread-slice"></i> Bakery
      </RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText" v-if="AuthService.hasAuth()">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/admin-panel/product">Product</RouterLink>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Other
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li class="nav-item">
                <RouterLink class="nav-link" to="/admin-panel/ingredient">Ingredient</RouterLink>
              </li>
              <li><hr class="dropdown-divider"></li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/admin-panel/category">Category</RouterLink>
              </li>
              <li><hr class="dropdown-divider"></li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/admin-panel/productingredient">Product Ingredients</RouterLink>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <button type="button" class="nav-link" @click="logout">Logout</button>
          </li>
        </ul>
        <span class="navbar-text">
          User : {{ AuthService.getUsername() }}
        </span>
      </div>
    </div>
  </nav>
  <RouterView :key="$route.fullPath" />
</div>
</template>

<style>
.input-search {
  max-width: 200px;
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
  gap: 10px;
}
</style>


