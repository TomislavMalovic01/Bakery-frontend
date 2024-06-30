<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const product = ref<any>(null);

async function fetchProductDetails(id: string) {
  try {
    const response = await fetch(`http://localhost:4000/api/product/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    product.value = data;
  } catch (error) {
    console.error('Error fetching product details:', error);
  }
}

onMounted(() => {
  fetchProductDetails(route.params.id as string);
});
</script>

<template>
  <div v-if="product">
    <h1>{{ product.name }}</h1>
    <img :src="product.image" :alt="product.name" class="product-image">
    <p>{{ product.description }}</p>
    <h3>{{ product.price }}</h3>

    <section class="main-wrap">
      <div class="product" v-if="product">
        <div class="image-gallery">
          <img :src="product.image" :alt="product.name" class="product-image">
          <div class="controls"></div>
        </div>
        <div class="product-details">
          <div class="details">
            <h2>{{ product.name }}</h2>
            <h3>{{ product.price }}</h3>
            <p>{{ product.description }}</p>
          </div>
          <div class="sizes">
            <form class="form">
              <div class="select-size">
                <h3>Energy Value: {{ product.energyValiue }}</h3>
              </div>
            </form>
          </div>
          <div class="colors">
            <form class="form">
              <div class="select-color">
                <h3>Color:</h3>
                <label for="red">
                  <input type="radio" name="color" id="red">
                  <span class="color-1"></span>
                </label>
                <label for="green">
                  <input type="radio" name="color" id="green">
                  <span class="color-2"></span>
                </label>
                <label for="blue">
                  <input type="radio" name="color" id="blue">
                  <span class="color-3"></span>
                </label>
                <label for="yellow">
                  <input type="radio" name="color" id="yellow">
                  <span class="color-4"></span>
                </label>
              </div>
            </form>
          </div>
          <div class="ingredients">
            <h3>Ingredients:</h3>
            <ul>
              <li v-for="(ingredient, index) in product.ingredients" :key="index">
                <h1>{{ ingredient.name }}</h1>
              </li>
            </ul>
          </div>
          <div class="quantity">
            <div class="select-quantity">
              <h3>Quantity:</h3>
              <input type="number" name="quantity" value="1">
            </div>
          </div>
          <div class="sub-btn">
            <button class="submit">Buy Now</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

  <style scoped="drugi">

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    background-color: #24262b;
}
.main-wrap{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #24262b;
}
.main-wrap .product{
    width: 90%;
    max-width: 900px;
    display: flex;
}
.main-wrap .product .image-gallery{
    flex-basis: 47%;
    transform: scale(1.10);
    position: relative;
    background-color: #24262b;
    
}

.main-wrap .product .image-gallery img{
    width: 100%;
    height: 100%;
    border-radius: 50px;
    
   
}
.main-wrap .product .image-gallery .controls{
    position: absolute;
    bottom: 40px;
    right: 20px;
}
.main-wrap .product .image-gallery .controls .btn{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #24262b;
    display: block;
    margin-bottom: 10px;
    cursor: pointer;
}
.main-wrap .product .image-gallery .controls .btn.active{
    background: #00b4d8;
}
.main-wrap .product .product-details{
    flex-basis: 53%;
    background-color: #24262b;
    box-shadow: -10px 5px 10px 10px rgba(0, 0, 0, 0.1);
    padding: 40px 30px 40px 40px;
}
.main-wrap .product .product-details .details{
    margin-bottom: 20px;
}
.main-wrap .product .product-details .details h2{
    font-size: 25px;
    font-weight: 600;
    line-height: 35px;
    text-transform: capitalize;
    margin-bottom: 10px;
    color: white
}
.main-wrap .product .product-details .details h3{
    font-size: 20px;
    font-weight: 600;
    line-height: 35px;
    margin-bottom: 10px;
    color: white
}
.main-wrap .product .product-details .details p{
    font-size: 15px;
    font-weight: 500;
    line-height: 25px;
    color: white
}
.main-wrap .product .product-details .sizes{
    margin-bottom: 20px;
}
.main-wrap .product .product-details .sizes .form .select-size{
    display: flex;
    align-items: center;
}
.main-wrap .product .product-details .sizes .form .select-size h3{
    width: 100%;
    margin-right: 30px;
    font-size: 20px;
    font-weight: 500;
    color: white
}
.main-wrap .product .product-details .sizes .form .select-size label{
    display: flex;
    align-items: center;
}
.main-wrap .product .product-details .sizes .form .select-size label input{
    display: none;
}
.main-wrap .product .product-details .sizes .form .select-size label span{
    font-size: 18px;
    font-weight: 400;
    line-height: 25px;
    text-transform: uppercase;
    color: white;
    display: inline-block;
    margin-right: 10px;
    cursor: pointer;
}

.main-wrap .product .product-details .colors{
    margin-bottom: 20px;
}
.main-wrap .product .product-details .colors .form .select-color{
    display: flex;
    align-items: center;
}
.main-wrap .product .product-details .colors .form .select-color h3{
    width: 70px;
    margin-right: 30px;
    font-size: 20px;
    font-weight: 500;
    color: white
}
.main-wrap .product .product-details .colors .form .select-color label{
    display: flex;
    align-items: center;
}
.main-wrap .product .product-details .colors .form .select-color input{
    display: none;
}
.main-wrap .product .product-details .colors .form .select-color span{
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin-right: 10px;
    cursor: pointer;
}

.main-wrap .product .product-details .colors .form .select-color label input:checked + span{
    transform: scale(.7);
    box-shadow: 0 0 0 4px #fff, 0 0 0 6px #011627;
}
.main-wrap .product .product-details .quantity{
    margin-bottom: 50px;
}
.main-wrap .product .product-details .quantity .select-quantity{
    display: flex;
    align-items: center;
}
.main-wrap .product .product-details .quantity .select-quantity h3{
    width: 70px;
    margin-right: 30px;
    font-size: 20px;
    font-weight: 500;
    color: white
}
.main-wrap .product .product-details .quantity .select-quantity input{
    background: #e8e8e8;
    border: 0;
    outline: 0;
    padding: 2px 2px 2px 15px;
    border-radius: 12px;
    width: 50px;
}
.main-wrap .product .product-details .sub-btn{
    padding: 0 30px;
}
.main-wrap .product .product-details .sub-btn .submit{
    width: 100%;
    padding: 10px;
    border: 0;
    outline: 0;
    background: #0077b6;
    color: #fff;
    font-size: 15px;
    font-weight: 500;
    border-radius: 30px;
    box-shadow: 0 10px 10px rgba( 85, 63, 240, 0.25 );
    cursor: pointer;
    transition: .4s linear;
    position: relative;
    overflow: hidden;
}
.main-wrap .product .product-details .sub-btn .submit:hover{
    background: #00b4d8;
}
.main-wrap .product .product-details .sub-btn .submit::before{
    content: '';
    position: absolute;
    left: -100%;
    width: 100%;
    height: 100%;
    background: rgba( 255, 255, 255, 0.1 );
    transform: rotate(-45deg);
}
.main-wrap .product .product-details .sub-btn .submit:hover::before{
    animation: light .4s linear forwards;
}








section nav {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    right: 0;
    background:#bf9326;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    z-index: 1000;
    padding: 0 20px;
}

section nav .nav-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 800px; /* Maksimalna širina nav bara */
}

section nav .logo img {
    width: 100px;
    cursor: pointer;
    margin: 6px 0;
}

section nav ul {
    list-style: none;
    display: flex;
    gap: 100px; /* Razmak između linkova */
}

section nav ul.left-links {
    margin-right: auto; /* Pomeri leve linkove u levo */
}

section nav ul.right-links {
    margin-left: auto; /* Pomeri desne linkove u desno */
}

section nav ul li a {
    text-decoration: none;
    color: white;
    font-weight: 500;
    font-size: 19px;
    transition: 0.1s;
}

section nav ul li a::after {
    content: '';
    width: 0;
    height: 2px;
    background: #fac031;
    display: block;
    transition: 0.2s linear;
}

section nav ul li a:hover::after {
    width: 100%;
}

section nav ul li a:hover {
    color: #fac031;
}



</style>
  

  