<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue';
</script>

<template>
	<header>
		<Navbar />
	</header>
	<header>
		<img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
		
		<div class="wrapper">
			<HelloWorld msg="You did it!" />
			
			<nav>
				<RouterLink to="/">Home</RouterLink>
				<RouterLink to="/about">About</RouterLink>
				<RouterLink to="/test">Test</RouterLink>
			</nav>
		</div>
	</header>
	
	<RouterView />
</template>