<script setup lang="ts">
import { ref, onMounted, inject } from 'vue'
import type { AxiosInstance } from 'axios';
import Swal from 'sweetalert2';
import { Modal } from 'bootstrap'

const message = ref('')
const axiosRequest = inject('axiosRequest') as AxiosInstance
let exampleModal: Modal | null = null

onMounted(() => {
    getMessage()
    const modalElement = document.getElementById('exampleModal')
    if (modalElement) {
        exampleModal = new Modal(modalElement)
        exampleModal.show()
    }
})

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

function saveChanges() {
    Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Changes saved successfully'
    }).then(() => {
        if (exampleModal) {
            exampleModal.hide()
        }
    })
}

</script>

<template>
    <main>
        <h1>{{ message }}</h1>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
        </button>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                ...
            </div>
            <div class="modal-footer d-grid col-6 mx-auto gap-2">
                <button class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button @click="saveChanges" class="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
        </div>
    </main>
</template>