import { createRouter, createWebHistory } from 'vue-router'
import ProductView from '@/views/product/ProductView.vue'
import EditProduct from '../views/product/EditProduct.vue'
import NewProduct from '@/views/product/NewProduct.vue'
import IngredientView from '@/views/ingredient/IngredientView.vue'
import EditIngredient from '@/views/ingredient/EditIngredient.vue'
import NewIngredient from '../views/ingredient/NewIngredient.vue'
import CategoryView from '@/views/category/CategoryView.vue'
import EditCategory from '@/views/category/EditCategory.vue'
import NewCategory from '@/views/category/NewCategory.vue'
import ProductIngredientView from '@/views/productingredient/ProductIngredientView.vue'
import EditProductIngredient from '@/views/productingredient/EditProductIngredient.vue'
import NewProductIngredient from '@/views/productingredient/NewProductIngredient.vue'
import LoginView from '../views/LoginView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/product',
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/product',
      name: 'product',
      component: ProductView
    },
    {
      path: '/product/:id',
      name: 'edit-product',
      component: EditProduct,
      props: true
    },
    {
      path: '/product/new',
      name: 'new-product',
      component: NewProduct
    },
    {
      path: '/ingredient',
      name: 'ingredient',
      component: IngredientView
    },
    {
      path: '/ingredient/:id',
      name: 'edit-ingredient',
      component: EditIngredient,
      props: true
    },
    {
      path: '/ingredient/new',
      name: 'new-ingredient',
      component: NewIngredient

    },
    {
      path: '/category',
      name: 'category',
      component: CategoryView
    },
    {
      path: '/category/:id',
      name: 'edit-category',
      component: EditCategory,
      props: true
    },
    {
      path: '/category/new',
      name: 'new-category',
      component: NewCategory

    },
    {
      path: '/productingredient',
      name: 'productingredient',
      component: ProductIngredientView
    },
    {
      path: '/productingredient/:id',
      name: 'edit-productingredient',
      component: EditProductIngredient,
      props: true
    },
    {
      path: '/productingredient/new',
      name: 'new-productingredient',
      component: NewProductIngredient

    }




  ]
})

export default router
