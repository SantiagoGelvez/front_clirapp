<script setup lang="ts">
import { inject } from 'vue'
import type { AxiosInstance } from 'axios'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'

const router = useRouter()
const axiosRequest = inject('axiosRequest') as AxiosInstance

function loginUser(event: Event) {
    const formData = new FormData(event.target as HTMLFormElement)

    axiosRequest.post('/login', formData).then((response) => {
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
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Email address</label>
            </div>

            <div class="form-floating mb-4">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                <label for="floatingPassword">Password</label>
            </div>
            
            <!-- <div class="form-check text-start my-3">
                <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                    Remember me
                </label>
            </div> -->
            <button class="btn btn-primary w-100 py-2" type="submit">Login</button>
        </form>
    </main>
</template>