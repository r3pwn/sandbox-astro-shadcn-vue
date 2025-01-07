<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@/components/ui/button'
import { Typography } from './ui/typography';

const count = ref(0);
const add = () => count.value++;
const subtract = () => count.value--;
</script>

<template>
	<div class="grid text-3xl	grid-cols-3	mt-8 place-items-center">
		<Button @click="subtract">-</Button>
		<Typography display="code">{{ count }}</Typography>
		<Button @click="add">+</Button>
	</div>
	<div class="text-center">
		<slot />
	</div>
</template>
