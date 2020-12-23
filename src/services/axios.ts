import axios from 'axios';

var token = localStorage.getItem('token')
function teste() {
    if (token === null || token === undefined) {
        window.location.reload()
    }
    else {
        return token
    }
}
export const api = axios.create({
    baseURL: 'https://api.systemfeg.com',
    // baseURL: 'https://api-systemfegllc.herokuapp.com',
    headers: { 'Authorization': `Bearer ${teste()}` }
})

export default api;