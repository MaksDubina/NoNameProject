import axios from "axios";

const instance = axios.create({
    baseURL: 'http://5.128.129.194:5000/api/users/',
    withCredentials: true,

})

export const projectApi = {
    login() {
        return instance.put('login', {
            "email": "finrisk@inbox.ru",
            "password": "123456"
        })
    }
}