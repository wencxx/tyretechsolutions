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
            <NuxtImg src="/logo.png" alt="logo" format="webp" width="190px" densities="x1" />
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
            <Icon name="uil:align-center-alt" class="block lg:hidden text-black text-4xl" />
        </nav>
    </div>
</template>

<script setup>

</script>

<style scoped>
.router-link-active {
    /* background-color: rgb(0 65 194 / 0.9); */
    color: #0041c2;
}
</style>