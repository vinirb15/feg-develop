import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://api.systemfeg.com',
    // baseURL: 'https://api-systemfegllc.herokuapp.com',
})

export default api;