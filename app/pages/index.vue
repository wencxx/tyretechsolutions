<template>
    <div class="min-h-[88dvh]">
        <div class="h-[88dvh] bg-red-500 flex flex-col gap-y-5 items-center justify-center text-white" id="hero">
            <div class="flex gap-5">
            <NuxtImg v-for="brand in brands" :key="brand" :src="`/brands/${brand}.png`" class="w-24" />
            </div>
            <h1 class="text-6xl font-semibold uppercase">TireTech Solutions autospare parts</h1>
            <NuxtLink to="/tires" class="w-fit flex items-center gap-x-1 mt-5 px-3 py-1 bg-blueberry hover:bg-blue-700">
                <span>Browse Tires</span>
                <Icon name="uil:arrow-right" class="text-3xl" />
            </NuxtLink>
        </div>
        <div class="h-fit p-10 w-full max-w-7xl mx-auto text-center space-y-10">
            <div class="space-y-5">
                <h1 class="text-4xl  uppercase font-sans font-bold">Authorized <span class="text-blueberry">Tire brands</span></h1>
                <p class="text-xl font-medium w-3/4 mx-auto">We offer brands to suit every preference and requirement, ranging from globally recognized, award-winning innovators to emerging brands eager to establish themselves in the market.</p>
            </div>
            <div class="flex flex-wrap gap-5 justify-center">
                <NuxtImg v-for="brand in brands" :key="brand" :src="`/brands/${brand}.png`" class="w-44" />
            </div>
            <div>
                <NuxtLink to="/brands" class="bg-blueberry rounded-full py-1 px-4 text-white font-semibold tracking-wide text-lg uppercase hover:bg-blue-700">See All Brands</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
const brands = ['goodyear', 'dunlop', 'michelin', 'pirelli','continental', 'armstrong' ]
</script>

<style scoped>
#hero {
    background-image: url('../../public/tirehero.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}
</style>