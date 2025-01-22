<template>
    <div class="w-full max-w-7xl mx-auto min-h-[88dvh] flex flex-col lg:flex-row items-center gap-5 px-5 lg:px-0 py-5 lg:py-0">
        <div v-if="tireDetails?.imageUrl" class="lg:w-1/2 flex items-center justify-center">
            <NuxtImg :src="tireDetails?.imageUrl" densities="x1" format="webp" class="w-3/4 aspect-square" />
        </div>
        <div v-else class="lg:w-1/2 flex items-center justify-center">
            <div class="w-3/4 aspect-square animate-pulse rounded-md bg-gray-200"></div>
        </div>
        <div v-if="tireDetails" class="lg:w-1/2 p-10 flex flex-col justify-center gap-y-10 bg-gray-100 rounded shadow">
            <div class="space-y-3">
                <h1 class="font-bold text-xl tracking-wide">{{ tireDetails?.name }}</h1>
                <p class="text-lg text-gray-500">{{ tireDetails?.description }}</p>
            </div>
            <ul class="space-y-2">
                <li class="text-xl font-semibold">Brand: <span class="font-normal text-gray-700 capitalize">{{ tireDetails?.brand }}</span></li>
                <li class="text-xl font-semibold">Size: <span class="font-normal text-gray-700 capitalize">{{ tireDetails?.size }}</span></li>
                <li class="text-xl font-semibold">Origin: <span class="font-normal text-gray-700 capitalize">{{ tireDetails?.origin }}</span></li>
                <li class="text-xl font-semibold">Warranty: <span class="font-normal text-gray-700 capitalize">{{ tireDetails?.warranty }}</span></li>
            </ul>
            <a href="https://wa.me/1234567890" target="_blank" class="w-fit mx-auto bg-blueberry text-white px-7 py-1 rounded-full text-xl hover:bg-blue-700">Inquire Now</a>
        </div>
        <div v-else class="lg:w-1/2 p-10 flex flex-col justify-center gap-y-10 bg-gray-100 rounded shadow">
            <div class="space-y-3">
                <div class="w-3/4 h-9 bg-gray-200 animate-pulse rounded-md"></div>
                <div class="space-y-0.5">
                    <div class="w-full h-6 bg-gray-200 animate-pulse rounded-md"></div>
                    <div class="w-full h-6 bg-gray-200 animate-pulse rounded-md"></div>
                    <div class="w-full h-6 bg-gray-200 animate-pulse rounded-md"></div>
                </div>
            </div>
            <ul class="space-y-2">
                <li class="text-xl font-semibold flex gap-x-2"><spann>Brand:</spann> <div class="w-1/2 h-7 bg-gray-200 animate-pulse rounded-md"></div></li>
                <li class="text-xl font-semibold flex gap-x-2"><spann>Size:</spann> <div class="w-1/2 h-7 bg-gray-200 animate-pulse rounded-md"></div></li>
                <li class="text-xl font-semibold flex gap-x-2"><spann>Origin:</spann> <div class="w-1/2 h-7 bg-gray-200 animate-pulse rounded-md"></div></li>
                <li class="text-xl font-semibold flex gap-x-2"><spann>Warranty:</spann> <div class="w-1/2 h-7 bg-gray-200 animate-pulse rounded-md"></div></li>
            </ul>
            <a v-if="tireDetails" href="https://wa.me/1234567890" target="_blank" class="w-fit mx-auto bg-blueberry text-white px-7 py-1 rounded-full text-xl hover:bg-blue-700">Inquire Now</a>
            <div class="h-10 w-1/3 mx-auto bg-gray-200 animate-pulse rounded-full"></div>
        </div>
    </div>
</template>

<script setup>
import { useTiresSTore } from '../../stores/tires'

definePageMeta({
    layout: 'custom',
})


const { id } = useRoute().params
const tireStore = useTiresSTore()

const tireDetails = computed(() => tireStore.tireDetails)

onMounted(() => {
    tireStore.getTireDetails(id)
})
</script>