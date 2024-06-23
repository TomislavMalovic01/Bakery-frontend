import type { IngredientModel } from "./ingredient.model"
import type { ProductModel } from "./product.model"

export interface ProductIngredientModel{
    productId : number
    ingredientId: number
    createdAt : string
    updatedAt : string
    product: ProductModel
    ingredient : IngredientModel
    productName : string
    name: string
    ingredients : IngredientModel[]
    oldIngredientId : number
}