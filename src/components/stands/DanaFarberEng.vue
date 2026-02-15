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
      <image x="200" y="450" :href="'/img/booths-pics/' + booth.logo" width="220" />

      <!-- Brochure -->
      <a href="/docs-booths/brochure-danaf-ENG.pdf" target="_blank" class="brochure">
        <image x="91" y="550" :href="'/img/booths-pics/' + booth.btn1" width="200" />
      </a>

      <!-- Contact desktop -->
      <a @click="$emit('open-form', emailAccount, subject, null, booth.logo)" class="is-hidden-mobile contacto" target="_blank">
        <image x="302" y="550" :href="'/img/booths-pics/' + booth.btn2" width="200" />
      </a>

      <!-- Contact -->
      <a href="mailto:dfci_communitybenefits@dfci.harvard.edu" class="is-hidden-desktop contacto" target="_blank">
        <image x="302" y="550" :href="'/img/booths-pics/' + booth.btn2" width="200" />
      </a>
    </svg>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const booth = ref({
  image: "bg-dana-farber.webp",
  logo: "dana-farber-logo.webp",
  btn1: "brochure.svg",
  btn2: "contact.svg",
  videoID: "6KDuxJ9NXs4" // ID del video de YouTube
});

const emailAccount = "dfci_communitybenefits@dfci.harvard.edu";
const subject = "New Contact Request - Dana Farber";

</script>