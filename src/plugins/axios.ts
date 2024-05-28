import axios from 'axios';
import Swal from 'sweetalert2';

const api = axios.create({
    baseURL: 'http://localhost:8002/apiv1',
});

api.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (error.code === 'ERR_NETWORK') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'We have a problem with the network, please try again later',
        })
    } else if (error.response.status === 500) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'We have a problem with the server, please try again later',
        })
    }
    
    return Promise.reject(error);
})

export default api