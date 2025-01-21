<template>
    <div class="w-full max-w-7xl mx-auto min-h-[88dvh] flex flex-col lg:flex-row items-center gap-5 px-5 lg:px-0">
        <div class="lg:w-1/2 flex items-center justify-center">
            <NuxtImg src="/tires/DURATRAC-RT_17_25.png" densities="x1" format="webp" class="w-3/4 aspect-square" />
        </div>
        <div class="lg:w-1/2 p-10 flex flex-col justify-center gap-y-10 bg-gray-100 rounded shadow">
            <div class="space-y-3">
                <h1 class="font-bold text-xl tracking-wide">Wrangler Duratrac RT</h1>
                <p class="text-lg text-gray-500">The ultimate choice for all-terrain thrill-seekers. Conquer rugged paths, explore the wild, and repeat the excitement.</p>
            </div>
            <ul class="space-y-2">
                <li class="text-xl font-semibold">Brand: <span class="font-normal text-gray-700">Goodyear</span></li>
                <li class="text-xl font-semibold">Size: <span class="font-normal text-gray-700">RA  1907</span></li>
                <li class="text-xl font-semibold">Origin: <span class="font-normal text-gray-700">Korea</span></li>
                <li class="text-xl font-semibold">Warranty: <span class="font-normal text-gray-700">7 years warranty</span></li>
                <li class="text-xl font-semibold">Price: <span class="font-normal text-gray-700">Php  100</span></li>
            </ul>
            <a href="https://wa.me/1234567890" target="_blank" class="w-fit mx-auto bg-blueberry text-white px-7 py-1 rounded-full text-xl hover:bg-blue-700">Inquire Now</a>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'custom',
})
</script>