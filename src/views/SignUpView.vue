<script setup lang="ts">
import { inject } from 'vue'
import Swal from 'sweetalert2'
import type { AxiosInstance } from 'axios'
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()
const axiosRequest = inject('axiosRequest') as AxiosInstance

function alertLoading(action: string) {
    if (action === 'show') {
        Swal.fire({
            title: 'Creating account',
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

function signUpUser(event: Event) {
    alertLoading('show')
    const formData = new FormData(event.target as HTMLFormElement)

    axiosRequest.post('/signup', formData).then((response) => {
        alertLoading('hide')

        Swal.fire({
            icon: 'success',
            title: 'Signup successful',
            html: 'You will be redirected to the login page.',
            timer: 2500
        }).then(() => {
            router.push({ name: 'login' })
        })
    }).catch((error) => {
        alertLoading('hide')

        if (error.response.status === 400) {
            if (error.response.data.email) {
                Swal.fire({
                    icon: 'error',
                    title: 'Signup failed',
                    text: error.response.data.email[0]
                })
            }
        }

        if (error.response.status === 403) {
            Swal.fire({
                icon: 'error',
                title: 'Signup failed',
                text: error.response.data.detail
            })
        }
    })
}
</script>

<template>
    <main class="w-25 form-signin m-auto">
        <form @submit.prevent="signUpUser" class="d-flex flex-column">
            <h1 class="h3 mb-5 text-center">Join us! Create your account</h1>
            
            <div class="form-floating mb-2">
                <input id="email" name="email" type="email" class="form-control" placeholder="name@example.com" required>
                <label for="email">Email address</label>
            </div>

            <div class="d-flex justify-content-between">
                <div class="form-floating mb-2 w-100 me-1">
                    <input id="first_name" name="first_name" type="text" class="form-control" placeholder="First name" required>
                    <label for="first_name">First name</label>
                </div>

                <div class="form-floating mb-2 w-100 ms-1">
                    <input id="last_name" name="last_name" type="text" class="form-control" placeholder="Last name" required>
                    <label for="last_name">Last name</label>
                </div>
            </div>

            <div class="form-floating mb-4">
                <input id="password" name="password" type="password" class="form-control" placeholder="Password" required>
                <label for="password">Password</label>
            </div>
            
            <button type="submit" class="btn btn-primary w-100 py-2 mb-2">Sign Up</button>
        </form>

        <RouterLink to="login" class="text-center"> Already have an account? Login </RouterLink>
    </main>
</template>