<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { ProductService } from './services/product.service';
import router from './router';
import type { ProductModel } from './models/product.model';

const search = ref<string>('');
const products = ref<any[]>([]); // Čuvamo niz proizvoda

function goToProductDetails(product: ProductModel) {
  console.log(product); // Provera objekta product u konzoli
  
  router.push({ name: 'ProductDetails', params: { id: product.toString() } });
}

// Funkcija za dohvatanje proizvoda sa servera
async function fetchProducts() {
    try {
        const response = await fetch('http://localhost:4000/api/product');  
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        products.value = data; // Postavljamo podatke proizvoda u ref promenljivu
    } catch (error) {
        console.error('Error fetching products:', error);
        // Obradite grešku ili prikažite odgovarajuću poruku korisniku
    }
}

onMounted(() => {
    fetchProducts(); // Način da se pozove funkcija za dohvatanje proizvoda kada se komponenta montira

});

const filteredProducts = computed(() => {  //reaguje na svaki put kad promeni search
      return products.value.filter(product=> {
        return product.name.toLowerCase().includes(search.value.toLowerCase());
      });
    });


</script>

<template>
<section>

    <nav>
            <div class="nav-section">
                <ul class="left-links">
                    <li><a href="/productpage">Products</a></li>
                    <li><a href="/homepage">Home</a></li>
                </ul>
                <div class="logo">
                    <img src="./assets/pekara1.png">
                </div>
                <ul class="right-links">
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
    </nav>

<div>
    <div class="input-search">
        <input type="text" class="form-control" id="search-box" v-model="search" />

    </div>
</div>



<div class="menu" id="Menu" >
        <h1>Our<span>Menu</span></h1>

        <div class="menu_box" >
            <div class="menu_card" v-for="product in filteredProducts" :key="product.id">

                <div class="menu_image">
                    <img :src="product.image" :alt="product.name" class="product-image">
                </div>

                <div class="menu_info">
                    <h2>{{ product.name }}</h2>
                    <p>
                        {{ product.description }}
                    </p>
                    <h3>{{product.price}}</h3>
                    <div class="menu_icon">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <a href="#" class="menu_btn" @click.prevent="goToProductDetails(product.productId)">More</a>
                </div>

            </div> 
        </div> 
    </div> 
</section>



<footer class="footer">
  	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">our services</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 				<li><a href="#">affiliate program</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">shipping</a></li>
  	 				<li><a href="#">returns</a></li>
  	 				<li><a href="#">order status</a></li>
  	 				<li><a href="#">payment options</a></li>
  	 			</ul>
  	 		</div>

  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
  	 				<a href="#"><i class="fab fa-facebook-f"></i></a>
  	 				<a href="#"><i class="fab fa-twitter"></i></a>
  	 				<a href="#"><i class="fab fa-instagram"></i></a>
  	 				<a href="#"><i class="fab fa-linkedin-in"></i></a>
  	 			</div>
                
  	 		</div>

            <div class="footer-col">
                <h4>Our location</h4>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45287.428466534846!2d20.401822832472156!3d44.81210539536276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aacf76b2fad%3A0xc9ea0f79c5d3b5cf!2z0KHQutGA0L7QtyDQlNC-0LHRgNCwINCf0LXQutCw0YDQsA!5e0!3m2!1ssr!2srs!4v1719700145753!5m2!1ssr!2srs" width="500" height="350" style="border:15px;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

              
  	 	</div>
  	 </div>
  </footer>
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


.menu{
    width: 100%;
    padding: 70px 0;
}

.menu h1{
    font-size: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
}

.menu h1 span{
    color: #fac031;
    margin-left: 15px;
    font-family: mv boli;
}

.menu h1 span::after{
    content: '';
    width: 100%;
    height: 2px;
    background: #fac031;
    display: block;
    position: relative;
    bottom: 15px;
}

.menu .menu_box{
    width: 95%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 15px;
    
}

.menu .menu_box .menu_card{
    width: 325px;
    height: 480px;
    padding-top: 10px;
    margin-bottom: 20px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    background-color: #24262b;
}

.menu .menu_box .menu_card .menu_image{
    width: 300px;
    height: 245px;
    margin: 0 auto;
    overflow: hidden;
}

.menu .menu_box .menu_card .menu_image img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: 0.3s;
    border-radius: px;
}

.menu .menu_box .menu_card .menu_image:hover img{
    transform: scale(1.1);
}


.menu .menu_box .menu_card .menu_info h2{
    width: 60%;
    text-align: center;
    margin: 10px auto 10px auto;
    font-size: 25px;
    color: #fac031;
}

.menu .menu_box .menu_card .menu_info p{
    text-align: center;
    margin-top: 8px;
    line-height: 21px;
}

.menu .menu_box .menu_card .menu_info h3{
    text-align: center;
    margin-top: 10px;
}

.menu .menu_box .menu_card .menu_info .menu_icon{
    color: #fac031;
    text-align: center;
    margin: 10px 0 10px 0;
}

.menu .menu_box .menu_card .menu_info .menu_btn{
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: white;
    background: #000;
    padding: 8px 10px;
    margin: 0 80px;
    transition: 0.3s;
}


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}

template {
    scroll-behavior: smooth;
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




/*FOOTER ODAVDE POCINJE*/


.footer {
    background-color: #24262b;
    padding: 70px 0;
    width: 100vw; /* Širina footera od kraja do kraja */
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
}

.footer-col {
    width: 25%;
    padding: 0 15px;
}

.footer-col h4 {
    font-size: 18px;
    color: #ffffff;
    text-transform: capitalize;
    margin-bottom: 35px;
    font-weight: 500;
    position: relative;
}

.footer-col h4::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    background-color: #e91e63;
    height: 2px;
    box-sizing: border-box;
    width: 50px;
}

.footer-col ul li:not(:last-child) {
    margin-bottom: 10px;
}

.footer-col ul li a {
    font-size: 16px;
    text-transform: capitalize;
    color: #ffffff;
    text-decoration: none;
    font-weight: 300;
    color: #bbbbbb;
    display: block;
    transition: all 0.3s ease;
}

.footer-col ul li a:hover {
    color: #ffffff;
    padding-left: 8px;
}

.footer-col .social-links a {
    display: inline-block;
    height: 40px;
    width: 40px;
    background-color: rgba(255,255,255,0.2);
    margin: 0 10px 10px 0;
    text-align: center;
    line-height: 40px;
    border-radius: 50%;
    color: #ffffff;
    transition: all 0.5s ease;
}

.footer-col .social-links a:hover {
    color: #24262b;
    background-color: #ffffff;
}

/*responsive*/
@media (max-width: 767px) {
    .footer-col {
        width: 50%;
        margin-bottom: 30px;
    }
}

@media (max-width: 574px) {
    .footer-col {
        width: 100%;
    }
}

</style>

