<template>
  <div class="has-text-centered">

    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 600 780">
      <image width="600" height="780" :href="'/img/booths-bg/' + booth.image" />
      <!-- Video -->
      <a @click="$emit('open-video', booth.videoID)" class="modal-trigger video" style="cursor: pointer;">
        <image x="280" y="145" href="/img/booths-pics/youtube.svg" width="100" />
      </a>


      <!-- Logo -->
      <image x="180" y="450" :href="'/img/booths-pics/' + booth.logo" width="250" />

      <!-- Brochure -->
      <a href="/docs-booths/brochure-mahda.pdf" target="_blank" class="brochure">
        <image x="90" y="530" :href="'/img/booths-pics/' + booth.btn1" width="200" />
      </a>

      <!-- Contacto -->
      <a href="javascript:void(0)" class="modal-trigger contacto" data-target="modal-form">
        <image x="300" y="530" :href="'/img/booths-pics/' + booth.btn2" width="200" />
      </a>
      

    </svg>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const booth = ref({
  image: "bg-MAHDA.webp",
  logo: "logo-mahda.webp",
  btn1: "brochure.svg",
  btn2: "contacto.svg",
  videoID: "xxx" // ID del video de YouTube
});

</script>

