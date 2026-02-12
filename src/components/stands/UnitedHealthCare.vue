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
      <image x="200" y="440" :href="'/img/booths-pics/' + booth.logo" width="220" />

      <!-- Brochure -->
      <a href="/docs-booths/OneCareBrochure_ES.pdf" target="_blank" class="brochure">
        <image x="100" y="550" :href="'/img/booths-pics/' + booth.btn1" width="200" />
      </a>

      <!-- Contacto -->
      <a href="tel:+1866-325-4811" class="contacto" target="_blank">
        <image x="310" y="550" :href="'/img/booths-pics/' + booth.btn2" width="200" />
      </a>
      

    </svg>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const booth = ref({
  image: "bg-uhc.webp",
  logo: "UHC.webp",
  btn1: "brochure.svg",
  btn2: "contacto.svg",
  videoID: "RR5feG5E3ek" // ID del video de YouTube
});

</script>

