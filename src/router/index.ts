import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import ProductView from '@/views/product/ProductView.vue';
import EditProduct from '@/views/product/EditProduct.vue';
import NewProduct from '@/views/product/NewProduct.vue';
import IngredientView from '@/views/ingredient/IngredientView.vue';
import EditIngredient from '@/views/ingredient/EditIngredient.vue';
import NewIngredient from '@/views/ingredient/NewIngredient.vue';
import CategoryView from '@/views/category/CategoryView.vue';
import EditCategory from '@/views/category/EditCategory.vue';
import NewCategory from '@/views/category/NewCategory.vue';
import ProductIngredientView from '@/views/productingredient/ProductIngredientView.vue';
import EditProductIngredient from '@/views/productingredient/EditProductIngredient.vue';
import NewProductIngredient from '@/views/productingredient/NewProductIngredient.vue';
import LoginView from '@/views/LoginView.vue';
import SearchView from '../SearchView.vue'; // Pretpostavka da postoji komponenta SearchView
import { AuthService } from '@/services/auth.service';
import HomePageView from '@/HomePageView.vue';
import ProductDetails from '../ProductDetails.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/productpage', // Redirekcija na /productpage kao početnu rutu
  },
  {
    path: '/productpage',
    name: 'productpage',
    component: SearchView,
    meta: {
      requiresAuth: false, // Dozvoli pristup bez autentifikacije
    },
  },

  {
    path: '/homepage',
    name: 'homepage',
    component: HomePageView,
    meta: {
      requiresAuth: false, // Dozvoli pristup bez autentifikacije
    },
  },

  {
    path: '/productpage/:id',
    name: 'ProductDetails',
    component: ProductDetails,
    props: true,
    meta: {
      requiresAuth: false, // Dozvoli pristup bez autentifikacije
    },
  },
  {
    path: '/admin-panel/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/admin-panel/product',
    name: 'admin-product',
    component: ProductView,
    meta: {
      requiresAuth: true, // Zahteva autentifikaciju za pristup admin panelu
    },
  },
  {
    path: '/admin-panel/product/new',
    name: 'admin-new-product',
    component: NewProduct,
    meta: {
      requiresAuth: true, // Zahteva autentifikaciju za pristup kreiranju novog proizvoda
    },
  },
  {
    path: '/admin-panel/product/:id',
    name: 'admin-edit-product',
    component: EditProduct,
    props: true,
    meta: {
      requiresAuth: true, // Zahteva autentifikaciju za pristup izmeni proizvoda
    },
  },
  {
    path: '/admin-panel/ingredient',
    name: 'admin-ingredient',
    component: IngredientView,
    meta: {
      requiresAuth: true, // Zahteva autentifikaciju za pristup sastojcima
    },
  },
  {
    path: '/admin-panel/ingredient/new',
    name: 'admin-new-ingredient',
    component: NewIngredient,
    meta: {
      requiresAuth: true, // Zahteva autentifikaciju za pristup kreiranju novog sastojka
    },
  },
  {
    path: '/admin-panel/ingredient/:id',
    name: 'admin-edit-ingredient',
    component: EditIngredient,
    props: true,
    meta: {
      requiresAuth: true, // Zahteva autentifikaciju za pristup izmeni sastojka
    },
  },
  {
    path: '/admin-panel/category',
    name: 'admin-category',
    component: CategoryView,
    meta: {
      requiresAuth: true, // Zahteva autentifikaciju za pristup kategorijama
    },
  },
  {
    path: '/admin-panel/category/new',
    name: 'admin-new-category',
    component: NewCategory,
    meta: {
      requiresAuth: true, // Zahteva autentifikaciju za pristup kreiranju nove kategorije
    },
  },
  {
    path: '/admin-panel/category/:id',
    name: 'admin-edit-category',
    component: EditCategory,
    props: true,
    meta: {
      requiresAuth: true, // Zahteva autentifikaciju za pristup izmeni kategorije
    },
  },
  {
    path: '/admin-panel/productingredient',
    name: 'admin-productingredient',
    component: ProductIngredientView,
    meta: {
      requiresAuth: true, // Zahteva autentifikaciju za pristup proizvod-sastojci
    },
  },
  {
    path: '/admin-panel/productingredient/new',
    name: 'admin-new-productingredient',
    component: NewProductIngredient,
    meta: {
      requiresAuth: true, // Zahteva autentifikaciju za pristup kreiranju novog proizvoda-sastojka
    },
  },
  {
    path: '/admin-panel/productingredient/:id',
    name: 'admin-edit-productingredient',
    component: EditProductIngredient,
    props: true,
    meta: {
      requiresAuth: true, // Zahteva autentifikaciju za pristup izmeni proizvoda-sastojka
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, _from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !AuthService.hasAuth()) {
    // Ako ruta zahteva autentifikaciju i korisnik nije autentifikovan, preusmeri ga na /admin-panel/login
    next('/admin-panel/login');
  } else {
    // Inače, dopustite pristup ruti
    next();
  }
});

export default router;
