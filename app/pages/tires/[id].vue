<template>
    <div class="w-full max-w-7xl mx-auto min-h-[88dvh] px-5 py-5 lg:pt-0 font-Inter">
        <div class="w-full h-[88dvh] flex flex-col lg:flex-row items-center gap-5" :class="{ 'lg:h-[75dvh]': sizes.length }">
            <div v-if="tireDetails?.imageUrl" class="lg:w-1/2 flex items-center justify-center">
                <NuxtImg :src="tireDetails?.imageUrl" densities="x1" format="webp" class="w-3/4 aspect-square" />
            </div>
            <div v-else class="lg:w-1/2 flex items-center justify-center">
                <div class="w-3/4 aspect-square animate-pulse rounded-md bg-gray-200"></div>
            </div>
            <div v-if="tireDetails" class="lg:w-1/2 p-10 flex flex-col justify-center bg-gray-100 rounded shadow">
                <NuxtImg :src="`/brands/${tireDetails.brand}.png`" format="webp" densities="x1" width="130px" />
                <div class="space-y-3 mt-7 mb-3">
                    <h1 class="text-2xl tracking-wide uppercase">Product Information</h1>
                </div>
                <ul class="space-y-2">
                    <li v-if="tireDetails.name" class="text-xl font-semibold grid grid-cols-2 gap-x-5">Name: <span class="font-normal text-gray-700 capitalize">{{ tireDetails?.name }}</span></li>
                    <li v-if="tireDetails.size" class="text-xl font-semibold grid grid-cols-2 gap-x-5">Size: <span class="font-normal text-gray-700 capitalize">{{ tireDetails?.size }}</span></li>
                    <li v-if="tireDetails.speedIndex" class="text-xl font-semibold grid grid-cols-2 gap-x-5">Load / Speed Index: <span class="font-normal text-gray-700 capitalize">{{ tireDetails?.speedIndex }}</span></li>
                    <li v-if="tireDetails.origin" class="text-xl font-semibold grid grid-cols-2 gap-x-5">Origin: <span class="font-normal text-gray-700 capitalize">{{ tireDetails?.origin }}</span></li>
                    <li v-if="tireDetails.year" class="text-xl font-semibold grid grid-cols-2 gap-x-5">Manufacturer Year: <span class="font-normal text-gray-700 capitalize">{{ tireDetails?.year }}</span></li>
                    <li v-if="tireDetails.warranty" class="text-xl font-semibold grid grid-cols-2 gap-x-5">Warranty: <span class="font-normal text-gray-700 capitalize">{{ tireDetails?.warranty }}</span></li>
                    <li v-if="tireDetails.sku" class="text-xl font-semibold grid grid-cols-2 gap-x-5">SKU: <span class="font-normal text-gray-700 capitalize">{{ tireDetails?.sku }}</span></li>
                </ul>
                <a href="https://wa.me/1234567890" target="_blank" class="w-fit mx-auto bg-blueberry text-white px-7 py-1 rounded-full text-xl hover:bg-blue-700 mt-10">Inquire Now</a>
            </div>
            <div v-else class="lg:w-1/2 p-10 flex flex-col justify-center gap-y-5 bg-gray-100 rounded shadow">
                <div class="space-y-6">
                    <div class="w-1/4 h-9 bg-gray-200 animate-pulse rounded-md"></div>
                    <div class="space-y-0.5">
                        <div class="w-1/2 h-10 bg-gray-200 animate-pulse rounded-md"></div>
                    </div>
                </div>
                <ul class="space-y-2">
                    <li class="text-xl font-semibold grid grid-cols-2 gap-x-5"><spann>Name:</spann> <div class="w-1/2 h-7 bg-gray-200 animate-pulse rounded-md"></div></li>
                    <li class="text-xl font-semibold grid grid-cols-2 gap-x-5"><spann>Size:</spann> <div class="w-1/2 h-7 bg-gray-200 animate-pulse rounded-md"></div></li>
                    <li class="text-xl font-semibold grid grid-cols-2 gap-x-5"><spann>Load / Speed Index:</spann> <div class="w-1/2 h-7 bg-gray-200 animate-pulse rounded-md"></div></li>
                    <li class="text-xl font-semibold grid grid-cols-2 gap-x-5"><spann>Origin:</spann> <div class="w-1/2 h-7 bg-gray-200 animate-pulse rounded-md"></div></li>
                    <li class="text-xl font-semibold grid grid-cols-2 gap-x-5"><spann>Manufacturer Year:</spann> <div class="w-1/2 h-7 bg-gray-200 animate-pulse rounded-md"></div></li>
                    <li class="text-xl font-semibold grid grid-cols-2 gap-x-5"><spann>Warranty:</spann> <div class="w-1/2 h-7 bg-gray-200 animate-pulse rounded-md"></div></li>
                    <li class="text-xl font-semibold grid grid-cols-2 gap-x-5"><spann>SKU:</spann> <div class="w-1/2 h-7 bg-gray-200 animate-pulse rounded-md"></div></li>
                </ul>
                <a v-if="tireDetails" href="https://wa.me/1234567890" target="_blank" class="w-fit mx-auto bg-blueberry text-white px-7 py-1 rounded-full text-xl hover:bg-blue-700">Inquire Now</a>
                <div class="h-10 w-1/3 mx-auto bg-gray-200 animate-pulse rounded-full"></div>
            </div>
        </div>
        <div v-if="sizes.length" class="w-full p-5 space-y-5 mt-14 flex flex-col lg:mt-0">
            <h1 class="text-center font-bold tracking-wide font-Inter text-3xl lg:text-4xl uppercase">Tires of size <span class="text-blueberry">{{ tireDetails?.size }}</span></h1>
            <div class="w-full h-fit grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div v-for="tire in sizes" :key="tire.id" class="border rounded-md hover:shadow-md w-full cursor-pointer p-5 space-y-5">
                    <NuxtImg :src="tire.imageUrl" alt="tire" class="w-full" format="webp" densities="x1" />
                    <div class="flex flex-col just gap-y-3">
                        <div>
                            <NuxtImg :src="`/brands/${tire.brand}.png`" format="webp" width="100px" class="rounded-sm mx-auto" />
                            <h2 class="text-center font-semibold uppercase tracking-wide line-clamp-1">{{ tire.name }}</h2>
                        </div>
                        <p class="text-gray-500 text-center line-clamp-3">{{ tire.size }}</p>
                        <div class="flex justify-end">
                            <NuxtLink :to="`/tires/${tire.id}`" class="text-sm bg-blueberry text-white px-3 rounded py-1 hover:bg-blue-700">More Details</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <NuxtLink :to="`/tires?size=${tireDetails?.size}`" class="bg-blueberry text-white px-3 rounded py-1 hover:bg-blue-700 mx-auto !mt-10">See all {{ tireDetails?.size }}</NuxtLink>
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
const sizes = computed(() => tireStore.tireSizes)

onMounted(() => {
    tireStore.getTireDetails(id)
})

</script>
<style scoped>

</style>