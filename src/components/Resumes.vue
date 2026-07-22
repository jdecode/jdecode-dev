<script setup>
  // Each page is one AI-generated take on the same CV. Version labels (V1…V8)
  // signal they are variations, not different documents.
  const pages = [
    { v: 'V1', label: 'Overview',          file: 'profile' },
    { v: 'V2', label: 'Blueprint',         file: 'blueprint' },
    { v: 'V3', label: 'Field Survey',      file: 'field-survey' },
    { v: 'V4', label: 'Engineering Atlas', file: 'engineering-atlas' },
    { v: 'V5', label: 'Agency',            file: 'agency' },
    { v: 'V6', label: 'Creative II',       file: 'creative-v2' },
    { v: 'V7', label: 'Creative III',      file: 'creative-v3' },
    { v: 'V8', label: 'Creative RPG',      file: 'creative-rpg' },
  ];
</script>

<template>
  <section class="mt-24 mb-6 w-full max-w-5xl px-6 text-center">
    <h2 class="text-2xl text-orange-500">
      AI-generated résumé &amp; profile experiments
    </h2>
    <p class="mx-auto mt-4 max-w-2xl text-sm text-gray-400 leading-relaxed">
      Eight AI-generated takes on the same career — each a different visual style of one CV,
      built with the help of various large language models
      (<span class="text-orange-500">Claude</span>,
      <span class="text-orange-500">Gemini</span>,
      <span class="text-orange-500">GPT</span> and others).
      Tap any preview to open the full page in a new tab.
    </p>

    <div class="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
      <a
        v-for="page in pages"
        :key="page.file"
        :href="`/resume/${page.file}.html`"
        target="_blank"
        rel="noopener noreferrer"
        title="[new tab]"
        class="group block">
        <div class="overflow-hidden rounded-md border border-gray-700 bg-gray-800 transition-colors group-hover:border-orange-500">
          <img
            :src="`/resume/thumbs/${page.file}.webp`"
            :alt="`${page.v}: ${page.label} — AI-generated résumé preview`"
            loading="lazy"
            width="900"
            height="562"
            class="aspect-[16/10] w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]" />
        </div>
        <p class="mt-2 text-sm text-gray-500 transition-colors group-hover:text-orange-400">
          <span class="text-gray-600">{{ page.v }} :</span> {{ page.label }}
        </p>
      </a>
    </div>

    <p class="mt-8 text-xs italic text-gray-500">
      AI-generated · content reviewed by me · client and project names intentionally
      anonymised.
    </p>
  </section>
</template>
