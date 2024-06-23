import type { IngredientModel } from "@/models/ingredient.model";
import { useAxios } from "./main.service";

export class IngredientService {
    static async getAllIngredient() {
        return await useAxios('/ingredient');
    }

    static async deleteIngredient(id: number) {
        return await useAxios(`/ingredient/${id}`, 'delete');
    }

    static async getIngredientById(id: number) {
        return await useAxios(`/ingredient/${id}`);
    }

    static async updateIngredient(id: number, data: IngredientModel | undefined) {
        return await useAxios(`/ingredient/${id}`, 'put', data);
    }

    static async saveIngredient(data: any) {
        return await useAxios('/ingredient', 'post', data);
    }

}
