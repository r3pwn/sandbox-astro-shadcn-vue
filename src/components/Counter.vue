<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@/components/ui/button'

const count = ref(0);
const add = () => count.value++;
const subtract = () => count.value--;
</script>

<template>
	<div class="counter">
		<Button @click="subtract">-</Button>
		<pre>{{ count }}</pre>
		<Button @click="add">+</Button>
	</div>
	<div class="counter-message">
		<slot />
	</div>
</template>

<style>
.counter {
	display: grid;
	font-size: 2em;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	margin-top: 2em;
	place-items: center;
}

.counter-message {
	text-align: center;
}
</style>
