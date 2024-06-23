
import { useAxios } from "./main.service";
import type { CategoryModel } from "@/models/category.model";

export class CategoryService {
    static async getAllCategory() {
        return await useAxios('/category');
    }

    static async deleteCategory(id: number) {
        return await useAxios(`/category/${id}`, 'delete');
    }

    static async getCategoryById(id: number) {
        return await useAxios(`/category/${id}`);
    }

    static async updateCategory(id: number, data: CategoryModel | undefined) {
        return await useAxios(`/category/${id}`, 'put', data);
    }

    static async saveCategory(data: any) {
        return await useAxios('/category', 'post', data);
    }

}
