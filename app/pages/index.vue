<template>
    <div class="min-h-[88dvh]">
        <!-- hero -->
        <div class="h-[88dvh] bg-red-500 flex flex-col gap-y-5 items-center justify-center text-white" id="hero">
            <div class="flex flex-wrap justify-center mx-auto gap-5">
                <NuxtImg v-for="brand in brands" :key="brand" :src="`/brands/${brand}.png`" class="w-24" />
            </div>
            <h1 class="text-6xl font-semibold uppercase text-center">TireTech Solutions and autospare parts</h1>
            <NuxtLink to="/tires" class="w-fit flex items-center gap-x-1 mt-5 px-3 py-1 bg-blueberry hover:bg-blue-700">
                <span>Browse Tires</span>
                <Icon name="uil:arrow-right" class="text-3xl" />
            </NuxtLink>
        </div>
        <!-- services -->
        <div class="p-10 w-full max-w-7xl mx-auto gap-y-10 grid md:grid-cols-2 lg:grid-cols-3">
            <div class="fit flex flex-col items-center p-5 gap-y-5">
                <Icon name="lucide-lab:tire" class="text-9xl text-gray-400" />
                <div class="text-center space-y-1">
                    <h1 class="font-bold text-xl tracking-wide">EXACT FITMENTS</h1>
                    <p class="text-sm text-gray-500">A Tire Rack Tire & Wheel Package means you'll get high quality, vehicle-specific wheels and tires that are perfect for your vehicle.</p>
                </div>
            </div>
            <div class="fit flex flex-col items-center p-5 gap-y-5">
                <Icon name="game-icons:tire-iron-cross" class="text-9xl text-gray-400" />
                <div class="text-center space-y-1">
                    <h1 class="font-bold text-xl tracking-wide">INSTALLATION-READY</h1>
                    <p class="text-sm text-gray-500">We do all the work on our end. Your Tire & Wheel Package arrives mounted, balanced and ready for installation.</p>
                </div>
            </div>
            <div class="fit flex flex-col items-center p-5 gap-y-5">
                <Icon name="material-symbols:delivery-truck-speed-outline" class="text-9xl text-gray-400" />
                <div class="text-center space-y-1">
                    <h1 class="font-bold text-xl tracking-wide">Quick Delivery</h1>
                    <p class="text-sm text-gray-500">Tire & Wheel Packages can be delivered straight to your installer, home or office with all necessary installation hardware included.</p>
                </div>
            </div>
        </div>
        <!-- banner -->
        <div class="h-40 bg-blueberry text-white flex flex-col items-center justify-center gap-y-4">
            <h1 class="font-bold uppercase text-2xl">Looking for tires?</h1>
            <p class="text-lg text-gray-100 text-center">Get the perfect tires to keep your vehicle running smoothly!</p>
        </div>
        <!-- tire brans section -->
        <div class="h-fit p-10 w-full max-w-7xl mx-auto text-center space-y-10">
            <div class="space-y-5">
                <h1 class="text-4xl  uppercase font-sans font-bold">Authorized <span class="text-blueberry">Tire brands</span></h1>
                <p class="text-xl font-medium lg:w-3/4 mx-auto">We offer brands to suit every preference and requirement, ranging from globally recognized, award-winning innovators to emerging brands eager to establish themselves in the market.</p>
            </div>
            <div class="flex flex-wrap gap-5 justify-center">
                <NuxtImg v-for="brand in brands" :key="brand" :src="`/brands/${brand}.png`" class="w-44" />
            </div>
            <div>
                <NuxtLink to="/brands" class="bg-blueberry rounded-full py-1 px-4 text-white font-semibold tracking-wide text-lg uppercase hover:bg-blue-700">See All Brands</NuxtLink>
            </div>
        </div>
        <hr>
        <!-- customers feedback -->
        <!-- <div class="h-fit p-10 w-full max-w-7xl mx-auto text-center space-y-10">
            <h1 class="text-4xl  uppercase font-sans font-bold">What our customers <span class="text-blueberry">Says</span></h1>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div class="border p-5 rounded shadow space-y-5 h-fit">
                    <p class="line-clamp-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    <h1 class="font-bold uppercase">Wency Baterna</h1>
                </div>
                <div class="border p-5 rounded shadow space-y-5 h-fit">
                    <p class="line-clamp-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    <h1 class="font-bold uppercase">Wency Baterna</h1>
                </div>
                <div class="border p-5 rounded shadow space-y-5 h-fit">
                    <p class="line-clamp-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    <h1 class="font-bold uppercase">Wency Baterna</h1>
                </div>
                <div class="border p-5 rounded shadow space-y-5 h-fit">
                    <p class="line-clamp-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    <h1 class="font-bold uppercase">Wency Baterna</h1>
                </div>
            </div>
        </div> -->
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