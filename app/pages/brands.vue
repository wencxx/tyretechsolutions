<template>
    <div class="py-10 space-y-20 w-full max-w-7xl mx-auto h-[88dvh]">
        <h1 class="font-bold text-3xl uppercase tracking-wide text-center">Tyre Brands</h1>
        <!-- contents -->
        <div class="w-full flex flex-wrap gap-20">
            <NuxtImg v-for="brand in brands" :key="brand" :src="`/brands/${brand}.png`" densities="x1" width="180px" class="hover:grayscale cursor-pointer" />
        </div>
    </div>
</template>

<script setup lang="ts">
const brands = ['goodyear', 'bridgestone', 'michelin', 'pirelli', 'kumho', 'nexen', 'roadstone', 'otani', 'armstrong', 'dunlop', 'yokohama', 'maxxis', 'continental', 'tracmax', 'falken', 'cooper' ]
</script>