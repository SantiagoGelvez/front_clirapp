<script setup lang="ts">

const props = defineProps<{
    text?: string
}>()
</script>

<template>
    <span class="fs-5 fw-semibold mb-3">
        {{ props.text || 'Loading' }}
    </span>

    <div>
        <div class="spinner-border mb-2" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>
