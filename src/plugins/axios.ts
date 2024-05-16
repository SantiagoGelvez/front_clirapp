import axios from 'axios';
import Swal from 'sweetalert2';

const api = axios.create({
    baseURL: 'http://localhost:8000/apiv1',
});

api.interceptors.response.use(
    response => response,
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // Do something
                    break;
                case 500:
                    // Do something
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'We are sorry, but something went wrong on our side. Please try again later.',
                    })
                    break;
                default:
                    break;
            }
        }
        
        return Promise.reject(error)
    }
)

export default api