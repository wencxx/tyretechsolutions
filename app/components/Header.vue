<template>
    <div class="h-[12dvh]">
        <nav class="h-full flex items-center justify-between lg:justify-center gap-x-10">
            <ul class="hidden lg:flex items-center gap-x-5 text-lg text-black">
                <li>
                    <NuxtLink to="" class="py-1 px-3 rounded hover:bg-blueberry/90 hover:text-white">Tyres Brand</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/tyres" class="py-1 px-3 rounded hover:bg-blueberry/90 hover:text-white">Tyres</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/" class="py-1 px-3 rounded hover:bg-blueberry/90 hover:text-white">Home</NuxtLink>
                </li>
            </ul>
            <img src="/logo.png" alt="logo" class="h-24 lg:h-28">
            <ul class="hidden lg:flex items-center gap-x-5 text-lg text-black">
                <li>
                    <NuxtLink to="/" class="py-1 px-3 rounded hover:bg-blueberry/90 hover:text-white">Batteries</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/" class="py-1 px-3 rounded hover:bg-blueberry/90 hover:text-white">About Us</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/" class="py-1 px-3 rounded hover:bg-blueberry/90 hover:text-white">Contact Us</NuxtLink>
                </li>
            </ul>
            <Icon name="uil:align-center-alt" class="block lg:hidden text-black text-4xl" />
        </nav>
    </div>
</template>

<script setup>

</script>

<style scoped>
.router-link-active {
    background-color: rgb(0 65 194 / 0.9);
    color: white;
}
</style>