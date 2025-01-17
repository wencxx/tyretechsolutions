<template>
  <div class="font-Inter min-h-screen w-full px-5 md:px-10 xl:px-0">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <div class="elfsight-app-3ae9413e-0d01-4379-8b75-e2d7b2989bdb !fixed" data-elfsight-app-lazy></div>
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
  title: 'TireTech Solutions',
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/logo.png' },
  ],
})
</script>