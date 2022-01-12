import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3333',
    auth: {
        username: process.env.VUE_APP_USERNAME,
        password: process.env.VUE_APP_PASSWORD,
    }
})

export default api