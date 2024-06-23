
import type { UserModel } from "@/models/user.model";
import { useAxios } from "./main.service";


export class UserService {
    static async getAllUser() {
        return await useAxios('/user');
    }

    static async deleteUser(id: number) {
        return await useAxios(`/user/${id}`, 'delete');
    }

    static async getUserById(id: number) {
        return await useAxios(`/user/${id}`);
    }

    static async updateUser(id: number, data : UserModel | undefined) {
        return await useAxios(`/user/${id}`, 'put', data );
    }

    static async saveUser(data : any) {
        return await useAxios('/user', 'post', data );
    }

}