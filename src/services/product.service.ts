import type { ProductModel } from "@/models/product.model";
import { useAxios } from "./main.service";

export class ProductService {
    static async getAllProduct() {
        return await useAxios('/product');
    }

    static async deleteProduct(id: number) {
        return await useAxios(`/product/${id}`, 'delete');
    }

    static async getProductById(id: number) {
        return await useAxios(`/product/${id}`);
    }

    static async updateProduct(id: number, data : ProductModel | undefined) {
        return await useAxios(`/product/${id}`, 'put', data );
    }

    static async saveProduct(data : any) {
        return await useAxios('/product', 'post', data );
    }

}
