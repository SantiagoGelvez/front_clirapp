<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const isActive = (to: string) => {
    return route.path === to
}
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div class="container-fluid">
            <div class="d-flex">
                <RouterLink to="/" class="navbar-brand">Clirapp</RouterLink>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item"><RouterLink to="/" class="nav-link" :class="{ active: isActive('/') }">Home</RouterLink></li>
                    </ul>
                    
                </div>
            </div>
            
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>

            <div class="nav-item">
                <a class="dropdown-toggle nav-link" data-bs-toggle="dropdown" aria-expanded="false">
                    Profile name
                </a>

                <ul class="dropdown-menu dropdown-menu-end">
                    <li><button class="dropdown-item" type="button">Profile</button></li>
                    <li><button class="dropdown-item" type="button">Logout</button></li>
                </ul>
            </div>
        </div>
    </nav>
</template>