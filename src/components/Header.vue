<script setup>
    const technologies = [
      'laravel',
      'postgres',
      'tailwind',
      'docker',
      'vue',
      'phpstorm',
      'github',
      'google-cloud',
      'terraform'
    ];

</script>
<template>
  <a href="/" class="hidden">
    <img src="/jdecode-dev.svg" class="logo w-24 h-24" alt="jdecode.dev" />
  </a>
  <div class="pt-10 text-5xl flex justify-center">
    <div>
      <span class="text-orange-600 text-7xl">J</span>
      <span>A</span>
      <span>G</span>
    </div>
    <div>
      <span class="text-orange-600 text-7xl">D</span>
      <span>E</span>
      <span>E</span>
      <span>P</span>
    </div>
  </div>
  <div class="pt-10 text-7xl flex justify-center">
    <div>
      <span class="text-orange-600">SINGH</span>
    </div>
  </div>
  <div class="pt-10 mt-5 text-4xl flex flex-col justify-center text-center gap-5">
    <p>
      <span class="text-orange-500">PHP</span> programmer since <span class="text-orange-500">2006</span>
    </p>
    <p>
      Creating websites in <span class="text-orange-500">Javascript since 2002</span>
    </p>
    <p>
      <span class="text-orange-500">NOT</span> a full-stack developer
    </p>
    <p class="text-2xl mt-5 italic grid grid-cols-3 gap-y-4 mt-12">
      <span v-for="technology in technologies" :key="technology" class="even:text-orange-500">
        {{ technology }}
      </span>
    </p>
  </div>
</template>

