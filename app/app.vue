<template>
  <div class="font-Inter w-full max-w-7xl min-h-screen container px-5 md:px-10 lg:px-0">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <div class="elfsight-app-3ae9413e-0d01-4379-8b75-e2d7b2989bdb" data-elfsight-app-lazy></div>
  </div>
</template>

<script setup>
useHead({
  script: [
    {
      src: "https://static.elfsight.com/platform/platform.js",
      async: true,
    }
  ],
  title: 'Tyre Tech Solutions'
})
</script>