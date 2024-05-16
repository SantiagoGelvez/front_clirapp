<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
	<div class="wrapper">
		<Navbar />
		<RouterView />
		<Footer />
	</div>
</template>

<style scoped>
.wrapper {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}
</style>