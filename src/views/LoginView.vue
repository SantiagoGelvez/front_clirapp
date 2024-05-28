<script setup lang="ts">
import { inject} from 'vue'
import Swal from 'sweetalert2'
import type { AxiosInstance } from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()
const axiosRequest = inject('axiosRequest') as AxiosInstance

function alertLoading(action: string) {
    if (action === 'show') {
        Swal.fire({
            title: 'Logging',
            html: 'Please wait...',
            allowOutsideClick: false,
            allowEscapeKey: false,
            showConfirmButton: false,
            showCancelButton: false
        })
    } else {
        Swal.close()
    }
}

function loginUser(event: Event) {
    alertLoading('show')
    const formData = new FormData(event.target as HTMLFormElement)
    
    axiosRequest.post('/login', formData)
    .then((response) => {
        alertLoading('hide')

        Swal.fire({
            icon: 'success',
            title: 'Login successful',
            html: 'You will be redirected to the home page.',
            timer: 2500
        }).then(() => {
            router.push({ name: 'home' })
        })
    }).catch((error) => {
        if (error.response.status === 403) {
            Swal.fire({
                icon: 'error',
                title: 'Login failed',
                text: error.response.data.detail
            })
        }
    })
}
</script>

<template>
    <main class="w-25 form-signin m-auto">
        <form @submit.prevent="loginUser" class="d-flex flex-column">
            <h1 class="h3 mb-5 text-center">Welcome back! Login to continue</h1>
            
            <div class="form-floating mb-2">
                <input id="email" name="email" type="email" class="form-control" placeholder="name@example.com" required>
                <label for="email">Email address</label>
            </div>

            <div class="form-floating mb-4">
                <input id="password" name="password" type="password" class="form-control" placeholder="Password" required>
                <label for="password">Password</label>
            </div>
            
            <button class="btn btn-primary w-100 py-2 mb-2" type="submit">Login</button>
        </form>
        <RouterLink to="signup" class="text-center">Don't have an account? Sign up</RouterLink>
    </main>
</template>