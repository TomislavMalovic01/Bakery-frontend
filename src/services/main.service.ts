import axios from "axios";


const client = axios.create({
    baseURL: 'http://localhost:4000/api',
    headers: {
        'Accept': 'application/json'
    },
    validateStatus: (status) => {
        return status.toString().startsWith('2') //200 su okejj kodovi
    }

})


export async function useAxios(path: string, method = 'get', payload = {}) {
    console.log(path, method, payload)
    return await client.request({
        url: path,
        method: method,
        data: payload
    })
}


export function formatDate(iso: string) {
    if (iso == null) return 'N/A'
    return new Date(iso).toLocaleString('sr-RS')

}



