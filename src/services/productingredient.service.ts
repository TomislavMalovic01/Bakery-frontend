

import type { ProductIngredientModel } from "@/models/productingredient.model";
import { useAxios } from "./main.service";


export class ProductIngredientService {
    static async getAllProductIngredient() {
        return await useAxios('/productingredient');
    }

    static async deleteProductIngredient(id: number) {
        return await useAxios(`/productingredient/${id}`, 'delete');
    }

    static async getProductIngredientById(id: number) {
        return await useAxios(`/productingredient/${id}`);
    }

    static async updateProductIngredient(productId: number, ingredientId: number, data: any) {
        console.log("FRONT SERVIS", productId, ingredientId, data)
        return await useAxios(`/productingredient/${productId}/${ingredientId}`, 'put', data);
    }

    static async saveProductIngredient(data: any) {
        return await useAxios('/productingredient', 'post', data);
    }

    static async deleteProductIngredientInEdit(productId: number, oldIngredientId: number) {
        return await useAxios(`/productingredient/delete/${productId}/${oldIngredientId}`, 'delete');
    }
}