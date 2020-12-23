import axios from 'axios';

const token = localStorage.getItem('token')

export const api = axios.create({
    baseURL: 'https://api.systemfeg.com',
    // baseURL: 'https://api-systemfegllc.herokuapp.com',
    headers: {'Authorization': `Bearer ${token}`}
})

export default api;