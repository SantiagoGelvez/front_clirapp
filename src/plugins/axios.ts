import axios from 'axios';
import Swal from 'sweetalert2';

const api = axios.create({
    baseURL: 'http://localhost:8000/apiv1',
});

api.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (error.response.status === 500) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'We have a problem with the server, please try again later',
        })
    }
    
    return Promise.reject(error);
})

export default api