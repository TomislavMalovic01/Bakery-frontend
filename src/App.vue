<script setup lang="ts">

</script>

<template>
<div class = "container">
  <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <RouterLink class="navbar-brand" to="/">
      <i class="fa-solid fa-sheet-plastic"></i> PSEP
    </RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <RouterLink class="nav-link" to="/">Home</RouterLink>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li class="nav-item">
          <RouterLink class="nav-link" to="/product">Product</RouterLink>
        </li>
        <li><hr class="dropdown-divider"></li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/ingredient">Ingredient</RouterLink>
        </li>
        <li><hr class="dropdown-divider"></li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/category">Category</RouterLink>
        </li>
        <li><hr class="dropdown-divider"></li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/productingredient">Product Ingredients</RouterLink>
        </li>
            <li><hr class="dropdown-divider"></li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/user">User</RouterLink>
        </li>
          </ul>
        </li>
        

       

       
      </ul>
      <span class="navbar-text">
        Korisnik 123
      </span>
    </div>
  </div>
</nav>
<RouterView />
</div>
 
</template>


