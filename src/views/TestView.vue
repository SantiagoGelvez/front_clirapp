<script setup lang="ts">
import { ref, onMounted, inject } from 'vue'
import type { AxiosInstance } from 'axios';
import Swal from 'sweetalert2';

const message = ref('')
const axiosRequest = inject('axiosRequest') as AxiosInstance

function getMessage() {
    axiosRequest.get('/test-message')
    .then((response) => {
        message.value = response.data.message
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Message retrieved successfully'
        })
    })
}


onMounted(() => {
    getMessage()
})

</script>

<template>
    <main>
        <h1>{{ message }}</h1>
    </main>
</template>