<template>
    <div class="h-[12dvh] sticky top-0 left-0 bg-white z-50 px-5 md:px-10 xl:px-0">
        <nav class="h-full flex items-center justify-between lg:justify-center gap-x-10">
            <ul class="hidden lg:flex items-center gap-x-5 text-lg text-black">
                <li>
                    <NuxtLink to="/brands" class="py-1 px-3 rounded hover:text-blueberry">Tires Brand</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/tires" class="py-1 px-3 rounded hover:text-blueberry">Tires</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/" class="py-1 px-3 rounded hover:text-blueberry">Home</NuxtLink>
                </li>
            </ul>
            <NuxtLink to="/"  class="z-50">
                <NuxtImg src="/logo.png" alt="logo" format="webp" width="190px" densities="x1" />
            </NuxtLink>
            <ul class="hidden lg:flex items-center gap-x-5 text-lg text-black">
                <li>
                    <NuxtLink to="/" class="py-1 px-3 rounded hover:text-blueberry">Batteries</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/" class="py-1 px-3 rounded hover:text-blueberry">About Us</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/" class="py-1 px-3 rounded hover:text-blueberry">Contact Us</NuxtLink>
                </li>
            </ul>
            <Icon v-if="!openSideBar" name="uil:align-center-alt" class="block lg:hidden text-black text-4xl cursor-pointer" @click="openSideBar = true" />
            <Icon v-else name="material-symbols:close-rounded" class="block lg:hidden text-black text-4xl cursor-pointer" @click="openSideBar = false" />
        </nav>
        <!-- sidebar for mobile -->
        <nav class="block lg:hidden w-2/3 md:w-2/5 h-screen absolute top-0 left-0 bg-white shadow -translate-x-full duration-300 py-[12dvh]" :class="{ '!translate-x-0': openSideBar }">
            <ul class="py-5 space-y-1">
                <li>
                    <NuxtLink to="/" class="py-1 px-5 rounded hover:bg-gray-300 w-full flex text-xl">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/tires" class="py-1 px-5 rounded hover:bg-gray-300 w-full flex text-xl">Tires</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/brands" class="py-1 px-5 rounded hover:bg-gray-300 w-full flex text-xl">Tire Brands</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/" class="py-1 px-5 rounded hover:bg-gray-300 w-full flex text-xl">Batteries</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/" class="py-1 px-5 rounded hover:bg-gray-300 w-full flex text-xl">Contact Us</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/" class="py-1 px-5 rounded hover:bg-gray-300 w-full flex text-xl">About Us</NuxtLink>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>
const openSideBar = ref(false)

const route = useRoute()

watch(() => route.fullPath, (newVal) => {
    if(newVal){
        openSideBar.value = false
    }
})
</script>

<style scoped>
.router-link-active {
    /* background-color: rgb(0 65 194 / 0.9); */
    color: #0041c2;
}
</style>