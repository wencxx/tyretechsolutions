<template>
    <div class="py-10 space-y-10 w-full max-w-7xl mx-auto px-5 md:px-10 xl:px-0 min-h-[88dvh]">
        <h1 class="font-bold text-3xl uppercase tracking-wide text-center">Check out our tires</h1>
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
                        <button class="flex items-center justify-between w-full" @click="openFilter('tireSize')">
                            <span class="text-lg">Tire Size</span>
                            <Icon name="weui:arrow-filled" class="text-2xl rotate-90 duration-200" :class="{ '!-rotate-90': openedFilter.includes('tireSize') }" />
                        </button>
                        <div v-if="openedFilter.includes('tireSize')" class="pl-2 space-y-1 border-b pb-2">
                            <div v-for="[key, values] in Object.entries(getTireSizes())" :key="key" class="flex items-center gap-x-2">
                                <input :id="key" type="checkbox" :value="key" v-model="sizeFilter">
                                <lable :for="key" class="text-sm">{{ key }} ({{ values }})</lable>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button class="flex items-center justify-between w-full" @click="openFilter('Origins')">
                            <span class="text-lg">Origin</span>
                            <Icon name="weui:arrow-filled" class="text-2xl rotate-90 duration-200" :class="{ '!-rotate-90': openedFilter.includes('Origins') }" />
                        </button>
                        <div v-if="openedFilter.includes('Origins')" class="pl-2 space-y-1 border-b pb-2">
                            <div v-for="[key, values] in Object.entries(getTireOrigin())" :key="key" class="flex items-center gap-x-2">
                                <input :id="key" type="checkbox" :value="key" v-model="originFilter">
                                <label :for="key" class="text-sm">{{ key }} ({{ values }})</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button class="flex items-center justify-between w-full" @click="openFilter('Year')">
                            <span class="text-lg">Year</span>
                            <Icon name="weui:arrow-filled" class="text-2xl rotate-90 duration-200" :class="{ '!-rotate-90': openedFilter.includes('Year') }" />
                        </button>
                        <div v-if="openedFilter.includes('Year')" class="pl-2 space-y-1 border-b pb-2">
                            <div v-for="[key, values] in Object.entries(getYear())" :key="key" class="flex items-center gap-x-2">
                                <input :id="key" type="checkbox" :value="key" v-model="yearFilter">
                                <label :for="key" class="text-sm">{{ key }} ({{ values }})</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button class="flex items-center justify-between w-full" @click="openFilter('Warranty')">
                            <span class="text-lg">Warranty</span>
                            <Icon name="weui:arrow-filled" class="text-2xl rotate-90 duration-200" :class="{ '!-rotate-90': openedFilter.includes('Warranty') }" />
                        </button>
                        <div v-if="openedFilter.includes('Warranty')" class="pl-2 space-y-1 border-b pb-2">
                            <div v-for="[key, values] in Object.entries(getTireWarranty())" :key="key" class="flex items-center gap-x-2">
                                <input :id="key" type="checkbox" :value="key" v-model="warrantyFilter">
                                <label :for="key" class="text-sm">{{ key }} ({{ values }})</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- products -->
            <div v-if="!loading" class="w-full lg:w-10/12">
                <div v-if="filteredTires.length" class="w-full grid grid-cols-2 lg:grid-cols-3 gap-5">
                    <div v-for="tire in filteredTires" :key="tire.id" class="border rounded-md hover:shadow-md cursor-pointer p-5 space-y-5">
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
                    <button v-if="totalItems > filteredTires.length" class="mx-auto w-fit bg-blueberry rounded-full py-1 px-3 text-white hover:bg-blue-700 col-span-2 lg:col-span-3" @click="showMore">Show more</button>
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

const query = useRoute().query

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

const brands = ['goodyear', 'bridgestone', 'michelin', 'pirelli', 'kumho', 'nexen', 'roadstone', 'otani', 'armstrong', 'dunlop', 'yokohama', 'maxxis', 'continental', 'tracmax', 'falken', 'cooper' ]

const tires = computed(() => tireStore.tires)

onMounted(() => {
    getTires()

    if(query.size){
        sizeFilter.value.push(query.size)
    }
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

const searchQuery = ref('');
const brandFilter = ref([]);
const sizeFilter = ref([]);
const originFilter = ref([]);
const yearFilter = ref([]);
const warrantyFilter = ref([]);

const itemsShowing = ref(6)
const totalItems = ref('')

const filteredTires = computed(() => {
    const searchQueryLower = searchQuery.value.toLowerCase();

    if (!searchQuery.value && brandFilter.value.length === 0 && sizeFilter.value.length === 0 && originFilter.value.length === 0 && warrantyFilter.value.length === 0 && yearFilter.value.length === 0) {
        totalItems.value = tires.value.length
        return tires.value.slice(0, itemsShowing.value);
    }

    const filteredLists =  tires.value.filter(tire => {
        const matchesSearchQuery = searchQuery.value
            ? (tire.size?.toLowerCase().includes(searchQueryLower) ||
               tire.brand?.toLowerCase().includes(searchQueryLower) ||
               tire.name?.toLowerCase().includes(searchQueryLower) ||
               tire.origin?.toLowerCase().includes(searchQueryLower) ||
               tire.warranty?.toLowerCase().includes(searchQueryLower))
            : true;

        const matchesBrandFilter = brandFilter.value.length > 0
            ? brandFilter.value.includes(tire.brand?.toLowerCase())
            : true;

        const matchesSizeFilter = sizeFilter.value.length > 0
            ? sizeFilter.value.includes(tire.size)
            : true;

        const matchesOriginFilter = originFilter.value.length > 0
            ? originFilter.value.includes(tire.origin)
            : true;

        const matchesYearFilter = yearFilter.value.length > 0
            ? yearFilter.value.includes(tire.year)
            : true;

        const matchesWarrantyFilter = warrantyFilter.value.length > 0
            ? warrantyFilter.value.includes(tire.warranty)
            : true;

        return matchesSearchQuery && matchesBrandFilter && matchesSizeFilter && matchesOriginFilter && matchesWarrantyFilter && matchesYearFilter;
    });

    totalItems.value = filteredLists.length
    return filteredLists.slice(0, itemsShowing.value)
});


const showMore = () => {
    itemsShowing.value += 6
}

const countBrand = (brand) => {
    const brandLists = tires.value.filter(tire => tire.brand === brand)

    return brandLists.length
}

const getTireSizes = () => {
    let tireSizes = {}

    for(let tire of tires.value){
        if(tireSizes[tire.size]){
            tireSizes[tire.size] ++
        }else{
            tireSizes[tire.size] = 1
        }
    }

    return tireSizes
}

const getTireOrigin = () => {
     let tireOrigins = {}

     for(let tire of tires.value){
        if(tireOrigins[tire.origin]){
            tireOrigins[tire.origin]++
        }else{
            if(tire.origin){
                tireOrigins[tire.origin] = 1
            }
        }
     }

     return tireOrigins
}

const getYear = () => {
    let tireYear = {}

    for(let tire of tires.value){
        if(tireYear[tire.year]){
            tireYear[tire.year]++
        }else{
            tireYear[tire.year] = 1
        }
    }
    
    return tireYear
}

const getTireWarranty = () => {
    let tireWarranty = {}

    for(let tire of tires.value){
        if(tireWarranty[tire.warranty]){
            tireWarranty[tire.warranty]++
        }else{
            tireWarranty[tire.warranty] = 1
        }
    }
    
    return tireWarranty
}
</script>