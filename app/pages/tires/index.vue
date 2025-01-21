<template>
    <div class="py-10 space-y-10 w-full max-w-7xl mx-auto px-5 md:px-10 xl:px-0 min-h-[88dvh]">
        <h1 class="font-bold text-3xl uppercase tracking-wide text-center">Check out our tires</h1>
        <!-- search bar -->
        <div class="flex justify-end">
            <div class="flex items-center border w-full lg:w-1/4 py-1 px-2 rounded focus-within:outline focus-within:outline-2 focus-within:outline-blueberry">
                <input type="text" class="focus:outline-none w-full">
                <Icon name="uil:search" class=" text-black text-2xl" />
            </div>
        </div>
        <!-- filter in mobile -->
        <div class="flex justify-end lg:hidden">
            <button class="flex items-center gap-x-2 border rounded px-3">
                <span class="text-lg font-semibold tracking-wide">Filter</span>
                <Icon name="uil:filter" class="text-2xl" />
            </button>
        </div>
        <!-- contents -->
        <div class="w-full flex gap-5">
            <!-- filter -->
            <div class="h-fit pb-5 w-2/12 space-y-5 hidden lg:block">
                <h2 class="font-semibold text-lg tracking-wide">Filter Options</h2>
                <div class="space-y-2">
                    <div>
                        <button class="flex items-center justify-between w-full" @click="openFilter('Brands')">
                            <span class="text-lg">Brands</span>
                            <Icon name="weui:arrow-filled" class="text-2xl rotate-90 duration-200" :class="{ '!-rotate-90': openedFilter.includes('Brands') }" />
                        </button>
                        <div v-if="openedFilter.includes('Brands')" class="pl-2 space-y-1 border-b pb-2">
                            <div class="flex items-center gap-x-2">
                                <input type="checkbox">
                                <span class="text-sm">Goodyear</span>
                            </div>
                            <div class="flex items-center gap-x-2">
                                <input type="checkbox">
                                <span class="text-sm">Goodrich</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button class="flex items-center justify-between w-full" @click="openFilter('tireSize')">
                            <span class="text-lg">Tire Size</span>
                            <Icon name="weui:arrow-filled" class="text-2xl rotate-90 duration-200" :class="{ '!-rotate-90': openedFilter.includes('tireSize') }" />
                        </button>
                        <div v-if="openedFilter.includes('tireSize')" class="pl-2 space-y-1 border-b pb-2">
                            <div class="flex items-center gap-x-2">
                                <input type="checkbox">
                                <span class="text-sm">145 R12</span>
                            </div>
                            <div class="flex items-center gap-x-2">
                                <input type="checkbox">
                                <span class="text-sm">155 R12</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button class="flex items-center justify-between w-full" @click="openFilter('Origins')">
                            <span class="text-lg">Origin</span>
                            <Icon name="weui:arrow-filled" class="text-2xl rotate-90 duration-200" :class="{ '!-rotate-90': openedFilter.includes('Origins') }" />
                        </button>
                        <div v-if="openedFilter.includes('Origins')" class="pl-2 space-y-1 border-b pb-2">
                            <div class="flex items-center gap-x-2">
                                <input type="checkbox">
                                <span class="text-sm">Korea</span>
                            </div>
                            <div class="flex items-center gap-x-2">
                                <input type="checkbox">
                                <span class="text-sm">Indonesia</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button class="flex items-center justify-between w-full" @click="openFilter('Warranty')">
                            <span class="text-lg">Warranty</span>
                            <Icon name="weui:arrow-filled" class="text-2xl rotate-90 duration-200" :class="{ '!-rotate-90': openedFilter.includes('Warranty') }" />
                        </button>
                        <div v-if="openedFilter.includes('Warranty')" class="pl-2 space-y-1 border-b pb-2">
                            <div class="flex items-center gap-x-2">
                                <input type="checkbox">
                                <span class="text-sm">2years warranty</span>
                            </div>
                            <div class="flex items-center gap-x-2">
                                <input type="checkbox">
                                <span class="text-sm">5years warranty</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- products -->
            <div v-if="!loading" class="w-full lg:w-10/12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div v-for="tire in tires" :key="tire.id" class="border rounded-md hover:shadow-md cursor-pointer p-5 space-y-5">
                    <NuxtImg src="/tires/DURATRAC-RT_17_25.png" alt="tire" class="w-full" format="webp" densities="x1" />
                    <div class="flex flex-col gap-y-3">
                        <div>
                            <NuxtImg :src="`/brands/${tire.brand}.png`" format="webp" width="100px" class="rounded-sm mx-auto" />
                            <h2 class="text-center font-semibold uppercase tracking-wide line-clamp-1">{{ tire.name }}</h2>
                        </div>
                        <p class="text-gray-500 text-center text-sm line-clamp-3">{{ tire.description }}</p>
                        <div class="flex justify-end">
                            <NuxtLink :to="`/tires/${1}`" class="text-sm bg-blueberry text-white px-3 rounded py-1 hover:bg-blue-700">More Details</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="w-full lg:w-10/12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div v-for="skeleton in 5" :key="skeleton" class="border rounded-md hover:shadow-md cursor-pointer p-5 space-y-5">
                    <div class="w-full aspect-square animate-pulse rounded bg-gray-200"></div>
                    <div class="flex flex-col gap-y-3">
                        <div class="space-y-1">
                            <div class="bg-gray-200 rounded animate-pulse w-1/2 h-8 mx-auto"></div>
                            <div class="bg-gray-200 rounded animate-pulse w-3/4 h-6 mx-auto"></div>
                        </div>
                        <div class="bg-gray-200 rounded animate-pulse w-3/4 h-10 mx-auto"></div>
                        <div class="flex justify-end">
                            <div class="bg-gray-200 rounded animate-pulse w-1/3 h-8"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useTiresSTore } from '../../stores/tires'

const tireStore = useTiresSTore()

// open filter function
const openedFilter = ref([]) 

const openFilter = (filter) => {
    if(openedFilter.value.includes(filter)){
        const filterIndex = openedFilter.value.indexOf(filter)
        openedFilter.value.splice(filterIndex, 1)
    }else{
        openedFilter.value.push(filter)
    }
}

const tires = computed(() => tireStore.tires)

onMounted(() => {
    getTires()
})

const loading = ref(false)

const getTires = async () => {
    try {
        loading.value = true
        await tireStore.getTires()
    } catch (error) {
        console.log(error)
    } finally {
        loading.value = false
    }
}
</script>