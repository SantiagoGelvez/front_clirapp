<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const isActive = (to: string) => {
    return route.path === to
}
</script>

<template>
    <header>
        <nav class="navbar bg-dark" data-bs-theme="dark">
            <div class="container">
                <div class="d-flex">
                    <RouterLink to="/" class="navbar-brand">CliraApp</RouterLink>
                    
                    <ul class="navbar-nav flex-row mb-2 mb-lg-0">
                        <li class="nav-item px-2 mx-1"><RouterLink to="/" class="nav-link" :class="{ active: isActive('/') }">Home</RouterLink></li>
                        <li class="nav-item px-2 mx-1"><RouterLink to="/test" class="nav-link" :class="{ active: isActive('/test') }">Test</RouterLink></li>
                    </ul>
                </div>
                
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
    
                <div class="nav-item">
                    <a class="dropdown-toggle text-success" data-bs-toggle="dropdown" aria-expanded="false">
                        Profile name
                    </a>
    
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li><button class="dropdown-item" type="button">Profile</button></li>
                        <li><button class="dropdown-item" type="button">Logout</button></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>