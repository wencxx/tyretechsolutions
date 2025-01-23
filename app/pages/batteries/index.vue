<template>
    <div class="py-10 space-y-10 w-full max-w-7xl mx-auto px-5 md:px-10 xl:px-0 min-h-[88dvh]">
        <h1 class="font-bold text-3xl uppercase tracking-wide text-center">Check out our batteries</h1>
        <!-- search bar -->
        <div class="flex justify-end">
            <div class="flex items-center border w-full lg:w-1/4 py-1 px-2 rounded focus-within:outline focus-within:outline-2 focus-within:outline-blueberry">
                <input type="text" class="focus:outline-none w-full" v-model="searchQuery">
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
                            <div v-for="brand in brands" :key="brand" class="flex items-center gap-x-2">
                                <input :id="brand" type="checkbox" :value="brand" v-model="brandFilter">
                                <label :for="brand" class="text-sm capitalize">{{ brand }} <span>({{ countBrand(brand) }})</span></label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button class="flex items-center justify-between w-full" @click="openFilter('Warranty')">
                            <span class="text-lg">Warranty</span>
                            <Icon name="weui:arrow-filled" class="text-2xl rotate-90 duration-200" :class="{ '!-rotate-90': openedFilter.includes('Warranty') }" />
                        </button>
                        <div v-if="openedFilter.includes('Warranty')" class="pl-2 space-y-1 border-b pb-2">
                            <div v-for="[key, values] in Object.entries(getBatteryWarranty())" :key="key" class="flex items-center gap-x-2">
                                <input :id="key" type="checkbox" :value="key" v-model="warrantyFilter">
                                <label :for="key" class="text-sm">{{ key }} ({{ values }})</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- products -->
            <div v-if="!loading" class="w-full lg:w-10/12">
                <div v-if="filteredBatteries.length" class="w-full grid grid-cols-2 lg:grid-cols-3 gap-5">
                    <div v-for="battery in filteredBatteries" :key="battery.id" class="border rounded-md hover:shadow-md cursor-pointer p-5 space-y-5">
                        <NuxtImg :src="battery.imageUrl" alt="battery" class="w-full aspect-square" format="webp" densities="x1" />
                        <div class="flex flex-col gap-y-3 justify-between ">
                            <div>
                                <NuxtImg :src="`/brands/${battery.brand}.png`" format="webp" width="100px" class="rounded-sm mx-auto" />
                                <h2 class="text-center font-semibold uppercase tracking-wide line-clamp-1">{{ battery.name }}</h2>
                            </div>
                            <div class="flex justify-end">
                                <NuxtLink :to="`/batteries/${battery.id}`" class="text-sm bg-blueberry text-white px-3 rounded py-1 hover:bg-blue-700">More Details</NuxtLink>
                            </div>
                        </div>
                    </div>

                    <button  v-if="totalItems > filteredBatteries.length" class="mx-auto w-fit bg-blueberry rounded-full py-1 px-3 text-white hover:bg-blue-700 col-span-2 lg:col-span-3" @click="showMore">Show more</button>
                    <p v-else class="text-center col-span-3 uppercase font-semibold tracking-wide">End of lists</p>
                </div>
                <div v-else class="">
                    <h1 class="text-center text-lg uppercase mt-10 font-semibold tracking-wide">No results</h1>
                </div>
            </div>
            <div v-else class="w-full lg:w-10/12 grid grid-cols-2 lg:grid-cols-3 gap-5">
                <div v-for="skeleton in 6" :key="skeleton" class="border rounded-md hover:shadow-md cursor-pointer p-5 space-y-5">
                    <div class="w-full aspect-square animate-pulse rounded bg-gray-200"></div>
                    <div class="flex flex-col gap-y-3">
                        <div class="space-y-1">
                            <div class="bg-gray-200 rounded animate-pulse w-1/2 h-8 mx-auto"></div>
                            <div class="bg-gray-200 rounded animate-pulse w-3/4 h-6 mx-auto"></div>
                        </div>
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
import { useBatteriesStore } from '../../stores/batteries'

const batteryStore = useBatteriesStore()

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

const brands = ['amaron', 'ac delco', 'solite', 'varta']

const batteries = computed(() => batteryStore.batteries)

onMounted(() => {
    getBatteries()
})

const loading = ref(false)

const getBatteries = async () => {
    try {
        loading.value = true
        await batteryStore.getBatteries()
    } catch (error) {
        console.log(error)
    } finally {
        loading.value = false
    }
}

const searchQuery = ref('');
const brandFilter = ref([]);
const warrantyFilter = ref([]);

const itemsShowing = ref(6)
const totalItems = ref('')

const filteredBatteries = computed(() => {
    const searchQueryLower = searchQuery.value.toLowerCase();

    if (!searchQuery.value && brandFilter.value.length === 0 && warrantyFilter.value.length === 0) {
        totalItems.value = batteries.value.length
        return batteries.value.slice(0, itemsShowing.value);
    }

    const filteredLists =  batteries.value.filter(battery => {
        const matchesSearchQuery = searchQuery.value
            ? (battery.brand?.toLowerCase().includes(searchQueryLower) ||
               battery.name?.toLowerCase().includes(searchQueryLower) ||
               battery.warranty?.toLowerCase().includes(searchQueryLower))
            : true;

        const matchesBrandFilter = brandFilter.value.length > 0
            ? brandFilter.value.includes(battery.brand?.toLowerCase())
            : true;

        const matchesWarrantyFilter = warrantyFilter.value.length > 0
            ? warrantyFilter.value.includes(battery.warranty)
            : true;

        return matchesSearchQuery && matchesBrandFilter && matchesWarrantyFilter;
    });

    totalItems.value = filteredLists.length
    return filteredLists.slice(0, itemsShowing.value)
});


const showMore = () => {
    itemsShowing.value += 6
}

const showLess = () => {
    itemsShowing.value -= 6
}

const countBrand = (brand) => {
    const brandLists = batteries.value.filter(battery => battery.brand === brand)

    return brandLists.length
}


const getBatteryWarranty = () => {
    let batteryWarranty = {}

    for(let battery of batteries.value){
        if(batteryWarranty[battery.warranty]){
            batteryWarranty[battery.warranty]++
        }else{
            batteryWarranty[battery.warranty] = 1
        }
    }
    
    return batteryWarranty
}
</script>