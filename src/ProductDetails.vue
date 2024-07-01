<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const product = ref<any>(null);

async function fetchProductDetails(id: string) {
  try {
    const response = await fetch(`http://localhost:4000/api/productingredient/${id}`);
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
    <section id="home">
    <nav>
        <div class="nav-section">
            <ul class="left-links">
                <li><a href="/productpage">Products</a></li>
                <li><a href="">Home</a></li>
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

    <div v-if="product">
  <section class="main-wrap">
    <div class="product" v-if="product">
      <div class="image-gallery">
        <img :src="product.image" :alt="product.name" class="product-image">
        <div class="controls"></div>
      </div>
      <div class="product-details">
        <div class="details">
             {{ product.productName }}
        </div>
        <div class="sizes">
            <p>{{ product.description }}</p>
          <form class="form">
            <div class="select-size">
              <p>Energy Value : {{ product.energyValiue }} - kCal</p>
            </div>
          </form>
        </div>
        <div class="ingredients">
            <p>Sastojci koje zadrzi vase odabrano pecivo:</p>
          <table>
            <thead>  
              <tr>
                <th>Sastojci</th>
                <th>Vegan</th>
                <th>Vegetarian</th>
              </tr>
            </thead>
            <tbody>
                <tr v-for="(ingredient, index) in product.ingredients" :key="index">
                    <td>{{ ingredient.name }}</td>
                    <td>{{ ingredient.isVegan ? '✔️' : '✖️' }}</td>
                    <td>{{ ingredient.isVegeterian ? '✔️' : '✖️' }}</td>
                  </tr>
            </tbody>
          </table>
        </div>
        
        <div class="sub-btn">
            <a href="/productpage" class="submit">Go back</a>
        </div>
        
      </div>
    </div>
    
  </section>
  
</div>

</section>

<footer class="footer">
  	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>Seeling markets</h4>
  	 			<ul>
  	 				<li><a href="#"> Zemun</a></li>
  	 				<li><a href="#"> Novi Beoagrad</a></li>
  	 				<li><a href="#"> Vozdovac</a></li>
  	 				<li><a href="#"> Zvezdara</a></li>
                    <li><a href="#"> Zemun polje</a></li>
                    <li><a href="#"> Novi Sad</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4></h4>
  	 			<ul>
  	 				<li><a href="#">Phone : </a> +381 51 961 630</li>
  	 				<li><a href="#">Location : </a> Nikola Pasica 16,78000 Beograd, Srbija</li>
  	 				<li><a href="#">EMAIL : </a>office@pekarabeograd.com</li>
  	 			
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
                <h4>Our Location</h4>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45287.428466534846!2d20.401822832472156!3d44.81210539536276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aacf76b2fad%3A0xc9ea0f79c5d3b5cf!2z0KHQutGA0L7QtyDQlNC-0LHRgNCwINCf0LXQutCw0YDQsA!5e0!3m2!1ssr!2srs!4v1719700145753!5m2!1ssr!2srs" width="500" height="350" style="border:15px;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

              
  	 	</div>
  	 </div>
  </footer>










  
</template>

  <style scoped="drugi">


.submit {
  display: inline-block;
  padding: 10px 20px;
  color: white;
  background-color: #007bff;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  transition: 0.3s;
}

.submit:hover {
  background-color: #0056b3;
}


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









body {
  background-image: url('/path/to/your/background-image.jpg');
  background-size: cover; /* Sliku prilagodi veličini ekrana */
  background-repeat: no-repeat; /* Spreči ponavljanje slike */
  background-position: center; /* Centriraj sliku */
}




.main-wrap {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('./assets/slikaPozadina3.jpg');
}

.main-wrap .product {
  width: 90%;
  max-width: 900px;
  display: flex;
  background-color: #24262b;
  border-radius: 20px;
}

.main-wrap .product .image-gallery {
  flex-basis: 47%;
  transform: scale(1.05);
  position: relative;

}

.main-wrap .product .image-gallery img {
  width: 100%;
  height: 100%;
  border-radius: 50px;
}

.main-wrap .product .product-details {
  flex-basis: 53%;
  box-shadow: -10px 5px 10px 10px rgba(0, 0, 0, 0.1);
  padding: 40px 30px 40px 40px;
  border-radius: 20px;
}

.main-wrap .product .product-details .details {
  margin-bottom: 20px;
}

.main-wrap .product .product-details .details h2,
.main-wrap .product .product-details .details h3,
.main-wrap .product .product-details .details p {
  color: white;
}

.main-wrap .product .product-details .sizes {
  margin-bottom: 20px;
}

.main-wrap .product .product-details .sizes .form .select-size h3 {
  color: white;
}

.main-wrap .product .product-details .ingredients table {
  width: 100%;
  border-collapse: collapse;
}

.main-wrap .product .product-details .ingredients th,
.main-wrap .product .product-details .ingredients td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  color: white;
}

.main-wrap .product .product-details .quantity {
  margin-bottom: 50px;
}

.main-wrap .product .product-details .quantity h3 {
  color: white;
}

.main-wrap .product .product-details .quantity input {
  background: #e8e8e8;
  border: 0;
  outline: 0;
  padding: 2px 2px 2px 15px;
  border-radius: 12px;
  width: 50px;
}

.main-wrap .product .product-details .sub-btn {
  padding: 0 30px;
}

.main-wrap .product .product-details .sub-btn .submit {
  width: 100%;
  margin-top:20px;
  padding: 10px;
  border: 0;
  outline: 0;
  background: #ab8322;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  border-radius: 30px;
  box-shadow: 0 10px 10px rgba(201, 154, 38, 0.20);
  cursor: pointer;
  transition: .4s linear;
  position: relative;
  overflow: hidden;
}



.main-wrap .product .product-details .sub-btn .submit::before {
  content: '';
  position: absolute;
  left: -100%;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  transform: rotate(-45deg);
}

.main-wrap .product .product-details .sub-btn .submit:hover::before {
  animation: light .4s linear forwards;
}

@keyframes light {
  100% {
    left: 100%;
  }
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
  

  