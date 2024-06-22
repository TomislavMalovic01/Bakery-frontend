import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '@/views/product/ProductView.vue'
import EditProduct from '../views/product/EditProduct.vue'
import NewProduct from '@/views/product/NewProduct.vue'
import IngredientView from '@/views/ingredient/IngredientView.vue'
import EditIngredient from '@/views/ingredient/EditIngredient.vue'
import NewIngredient from '../views/ingredient/NewIngredient.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
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
      path: '/ingredient/new  ',
      name: 'new-ingredient',
      component: NewIngredient,
      props: true
    }
  ]
})

export default router
