import axios from 'axios';

export const api = axios.create({
    // baseURL: 'http://3.130.116.57:4200',
    baseURL: 'https://api-systemfegllc.herokuapp.com',
})

export default api;