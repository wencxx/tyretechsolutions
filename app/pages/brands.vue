<template>
    <div class="py-10 space-y-20 w-full max-w-7xl mx-auto min-h-[88dvh]">
        <div class="space-y-2">
            <h1 class="font-bold text-3xl uppercase tracking-wide text-center">Tire Brands</h1>
            <p class="text-center w-3/4 mx-auto text-lg text-gray-500">We offer a wide selection of premium and budget-friendly tires to meet all your needs. We've partnered with top tire brands from around the world to bring you the best and most affordable tire brands in the Dubai.</p>
        </div>
        <!-- contents -->
        <div class="w-full flex flex-wrap gap-20 justify-center">
            <NuxtImg v-for="brand in brands" :key="brand" :src="`/brands/${brand}.png`" densities="x1" width="180px" class="hover:grayscale cursor-pointer" />
        </div>
    </div>
</template>

<script setup lang="ts">
const brands = ['goodyear', 'bridgestone', 'michelin', 'pirelli', 'kumho', 'nexen', 'roadstone', 'otani', 'armstrong', 'dunlop', 'yokohama', 'maxxis', 'continental', 'tracmax', 'falken', 'cooper' ]
</script>