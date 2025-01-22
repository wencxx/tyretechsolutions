<template>
    <div class="py-10 space-y-20 w-full max-w-7xl mx-auto min-h-[88dvh] font-Inter">
        <div class="w-full min-h-[75dvh] flex flex-col lg:flex-row items-center gap-10 p-10">
            <div class="w-5/6 lg:w-3/5 h-4/6 space-y-5">
                <div class="space-y-2">
                    <h4 class="font-semibold text-blueberry text-xl">Contact Us</h4>
                    <h1 class="text-4xl font-bold tracking-wide">Get in touch with us</h1>
                </div>
                <p class="text-gray-600">We’d love to hear from you! Whether you have a question, feedback, or need assistance, our team is here to help. Please fill out the form below with your details and message, and we’ll get back to you as soon as possible.</p>
                <div class="space-y-5 !mt-10">
                    <div class="flex gap-x-6">
                        <div class="bg-blueberry py-2 px-3 w-fit  rounded-md">
                            <Icon name="mingcute:phone-line" class="text-4xl text-white" />
                        </div>
                        <div>
                            <h1 class="font-bold text-xl">Phone Number</h1>
                            <p class="font-medium tracking-wide text-gray-600">09638806212</p>
                        </div>
                    </div>
                    <div class="flex gap-x-6">
                        <div class="bg-blueberry py-2 px-3 w-fit  rounded-md">
                            <Icon name="ic:outline-email" class="text-4xl text-white" />
                        </div>
                        <div>
                            <h1 class="font-bold text-xl">Email</h1>
                            <p class="font-medium tracking-wide text-gray-600">tiretechsolutions@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-5/6 lg:w-2/5 h-fit bg-blueberry rounded-xl text-white p-5 space-y-2">
                <h1 class="font-medium tracking-wide text-xl uppercase">Send us a message</h1>
                <form action="https://formspree.io/f/manqwzyy" method="POST">
                    <div class="space-y-2 ">
                        <label for="email">Your email</label>
                        <input type="email" id="email" name="email" class="border w-full text-black h-10 rounded-md pl-2" placeholder="yourname@awesome.com">
                    </div>
                    <div class="space-y-2 ">
                        <label for="message">Message</label>
                        <textarea id="message" name="message" class="min-h-56 border w-full text-black rounded-md p-2"></textarea>
                    </div>
                    <button class="w-full py-2 rounded-full bg-green-500 mt-2 hover:bg-green-500">Send</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
const brands = ['goodyear', 'bridgestone', 'michelin', 'pirelli', 'kumho', 'nexen', 'roadstone', 'otani', 'armstrong', 'dunlop', 'yokohama', 'maxxis', 'continental', 'tracmax', 'falken', 'cooper' ]
</script>