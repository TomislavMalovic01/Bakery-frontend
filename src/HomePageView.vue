<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const products = ref<any[]>([]); // Čuvamo niz proizvoda

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


</script>

<template>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

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
    

    <div class="main">
        
        <div class="men_text">
            <h1>Get Fresh <span>Food</span><br>in a Easy way</h1>
        </div>
        <div class="main_image">
            <img src="./assets/main_img.png">
        </div>
    </div>

    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet purus nec bibendum ornare. Mauris et tincidunt urna. Donec molestie mollis luctus. Nulla in nisl eget mi faucibus lobortis. Donec vel nunc in urna sodales hendrerit vitae vitae tellus. Nulla velit risus, pharetra a tincidunt nec, feugiat eu dui.
         Aliquam erat volutpat.Nam urna magna, sollicitudin in blandit sit amet, ornare ut velit. Etiam ut pulvinar tortor, eget rutrum neque.
         Vestibulum nec porta odio, sed volutpat diam. Fusce fermentum mauris sem, quis mollis leo consectetur in. Suspendisse at enim viverra, suscipit orci id, aliquam dolor.
          Proin orci magna, efficitur quis lectus vel, vestibulum mattis libero.
    </p>

    <div class="main_btn">
        <a href="#">See Now</a>
        <i class="fa-solid fa-arrow-right"></i>
    </div>
    

</section>



<div class="review" id="Review">
        <h1>Customer<span>Review</span></h1>

        <div class="review_box">
            <div class="review_card">

                <div class="review_profile">
                    <img src="./assets/review1.png">
                </div>

                <div class="review_text">
                    <h2 class="name">John Deo</h2>

                    <div class="review_icon">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                    </div>

                    <div class="review_social">
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-linkedin-in"></i>
                    </div>

                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus quam facere 
                        blanditiis in fugiat tempore necessitatibus aliquid. Id adipisci, rem corrupti 
                        asperiores distinctio delectus quae quia tenetur totam laboriosam quam. Lorem ipsum, 
                        dolor sit amet consectetur adipisicing elit. Dolores soluta ullam ipsa voluptates 
                        repudiandae dignissimos deleniti mollitia eum. Laudantium placeat velit nemo illo 
                        pariatur. 
                    </p>

                </div>

            </div>

            <div class="review_card">

                <div class="review_profile">
                    <img src="./assets/review3.jpeg">
                </div>

                <div class="review_text">
                    <h2 class="name">John Deo</h2>

                    <div class="review_icon">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                    </div>

                    <div class="review_social">
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-linkedin-in"></i>
                    </div>

                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus quam facere 
                        blanditiis in fugiat tempore necessitatibus aliquid. Id adipisci, rem corrupti 
                        asperiores distinctio delectus quae quia tenetur totam laboriosam quam. Lorem ipsum, 
                        dolor sit amet consectetur adipisicing elit. Dolores soluta ullam ipsa voluptates 
                        repudiandae dignissimos deleniti mollitia eum. Laudantium placeat velit nemo illo 
                        pariatur. 
                    </p>

                </div>
                

            </div>

            <div class="review_card">

<div class="review_profile">
    <img src="./assets/chef3.jpg">
</div>

<div class="review_text">
    <h2 class="name">John Deo</h2>

    <div class="review_icon">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>
    </div>

    <div class="review_social">
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-linkedin-in"></i>
    </div>

    <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus quam facere 
        blanditiis in fugiat tempore necessitatibus aliquid. Id adipisci, rem corrupti 
        asperiores distinctio delectus quae quia tenetur totam laboriosam quam. Lorem ipsum, 
        dolor sit amet consectetur adipisicing elit. Dolores soluta ullam ipsa voluptates 
        repudiandae dignissimos deleniti mollitia eum. Laudantium placeat velit nemo illo 
        pariatur.
    </p>

</div>


</div>
        </div>
    </div>


<div class="team">
    <h1>Our<span>Team</span></h1>

    <div class="team_box">
        <div class="profile">
            <img src="./assets/chef1.png">
            <div class="info">
                <h4 class="name">Chef</h4>
                <p class="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div class="team_icon">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                </div>
            </div>
        </div>

        <div class="profile">
            <img src="./assets/chef2.png">
            <div class="info">
                <h4 class="name">Chef</h4>
                <p class="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div class="team_icon">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                </div>
            </div>
        </div>

        <div class="profile">
            <img src="./assets/chef3.jpg">
            <div class="info">
                <h4 class="name">Chef</h4>
                <p class="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div class="team_icon">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                </div>
            </div>
        </div>

        <div class="profile">
            <img src="./assets/chef4.jpg">
            <div class="info">
                <h4 class="name">Chef</h4>
                <p class="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div class="team_icon">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                </div>
            </div>
        </div>
    </div>

</div>


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

<style scoped>


.review{
    width: 100%;
    height: 100vh;
    padding: 70px 0;
}

.review h1{
    font-size: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.review h1 span{
    margin-left: 15px;
    color: #fac031;
    font-family: mv boli;
}

.review h1 span::after{
    content: '';
    width: 100%;
    height: 2px;
    background: #fac031;
    position: relative;
    bottom: 15px;
    display: block;
}

.review .review_box{
    width: 95%;
    margin: 70px auto;
    display: flex;
}

.review .review_box .review_card{
    width: 350px;
    height: 535px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.5);
    border-radius: 8px;
    padding: 8px 20px;
    margin: 0 8px;
    background:#ab8322
    
}

.review .review_box .review_card .review_profile{
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: 0.3s;
}

.review .review_box .review_card:hover .review_profile{
    transform: translateY(-60px);
}

.review .review_box .review_card .review_profile img{
    width: 180px;
    height: 180px;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
    border: 5px solid #cccccc;
}

.review .review_box .review_card .review_text{
    text-align: center;
}

.review .review_box .review_card .review_text .name{
    color: #000;
    transition: 0.3s;
}

.review .review_box .review_card:hover .review_text .name{
    transform: translateY(-50px);
}

.review .review_box .review_card .review_text .review_icon{
    color: #fac031;
    transition: 0.3s;
}

.review .review_box .review_card:hover .review_text .review_icon{
    transform: translateY(-30px);
}

.review .review_box .review_card .review_text .review_social i{
    margin: 5px 1px;
    font-size: 15px;
    opacity: 0;
    cursor: pointer;
    transition: 0.3s;
}

.review .review_box .review_card:hover .review_text .review_social i{
    opacity: 1;
    transform: translateY(-8px);
}

.review .review_box .review_card .review_text p{
    text-align: center;
    line-height: 22px;
    transition: 0.3s;
}

.review .review_box .review_card:hover .review_text p{
    margin-top: 5px;
}


/*koemntari*/















* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}

html, body {
    width: 100%;
    overflow-x: hidden;
}

.container {
    max-width: 1170px;
    margin: auto;
}

.row {
    display: flex;
    flex-wrap: wrap;
}

ul {
    list-style: none;
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

/*header*/

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
    background:#bf9326;
    display: block;
    transition: 0.2s linear;
}

section nav ul li a:hover::after {
    width: 100%;
}

section nav ul li a:hover {
    color: #fac031;
}

section .main{
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;
    top: 130px;
}

    section .main .men_text h1{
    font-size: 60px;
    position: relative;
    top:-80px;
    left: -120px;
    
    }


    section .main .men_text h1 span{
        margin-left:15px;
        color: #fac031;
        font-family: mv boli;
        line-height: 22px;
        font-size: 70px;
        

    }

    section .main .men_text img{
        width: 700px;
        position: relative;
        left: 70px;
    }

    section p{
        width: 650px;
        text-align: justify;
        position: relative;
        left: -100px;
        bottom: 120px;
        line-height: 24px;
    }

    section .main_btn {
        background:#fac031;
        position: relative;
        left: -100px;
        bottom:30px;
        width: 150px;
        cursor: pointer;
        padding: 12px 25px;
    }

    section .main_btn a{
        color: black ;
        margin-right: 5px;
        text-decoration: none;
    }

    section .main_btn i{
        color:black;
        transition: 0.3s;
    }

    section .main_btn:hover i{
        transform: translateX(10px) ;
    }


    /* Tim css */

    .team{
        width: 100%;
        height: 90vh;
        background-size: cover;
        background-position: center;
        
    }

    .team h1{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 55px;
        margin-bottom: -50px;
        margin-top:40px;
    }

    .team h1 span{
        color :#fac031;
        margin-left: 15px;
        font-family: mv boli;
        

    }

    .team h1 span::after{
        content:'';
        width: 100%;
        height: 2px;
        background: #fac031;
        display: block;
        position: relative;
        bottom:10px;
    }

    .team .team_box{
        width: 95%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        
        top:25%;

    }
    

    .team .team_box .profile img{
        width: 250px;
        height: 250px;
        object-fit: cover;
        object-position: center;
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
        z-index: 2;
        transition: 0.4s;


      
    }
    .team .team_box .profile{
        width: 320px;
        height: 320px;
        border-radius: 50%;
        margin:0 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
        transition: 0.4s;

        
    }

    .team .team_box .profile:hover{
      border-radius: 20px;
      height: 300px;
      background: #fac031;
      color: #000;

    }

    .team .team_box .profile:hover img{
        border-radius: 20px;
        margin-top: -230px;
    }

    .team .team_box .profile .info{
        position: absolute;
        text-align: center;
        top:20%;
        transition: 0.4s;
    }

    .team .team_box .profile:hover .info{
        top:50%;
    }

    .team .team_box .profile .info .name{
        color: #fac031;
        margin-top: 10px;
    }

    .team .team_box .profile .info .bio{
        width: 70%;
        text-align: center;
        margin: 0 auto 10px auto;
    }


    .team .team_box .profile .info .team_icon i {
    margin: 0 10px;;
    cursor: pointer;
    transition: 0.3s;

    }

    .team .team_box .profile .info .team_icon i:hover {
    
    color :#fac031;
    }



</style>
