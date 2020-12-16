import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://api-systemfegllc.herokuapp.com',
    // baseURL: 'http://3.130.116.57:4200',
    // baseURL: 'https://3.130.116.57:4200',
})

export default api;