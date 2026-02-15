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
      <image x="200" y="460" :href="'/img/booths-pics/' + booth.logo" width="220" />

      <!-- Brochure -->
      <a href="/docs-booths/brochure-careforth-ENG.pdf" target="_blank" class="brochure">
        <image x="100" y="550" :href="'/img/booths-pics/' + booth.btn1" width="200" />
      </a>

      <!-- Contacto desktop-->

      <a @click="$emit('open-form', emailAccount, subject, phoneNumber, booth.logo)" class="is-hidden-mobile contacto">
        <image x="310" y="550" :href="'/img/booths-pics/' + booth.btn2" width="200" />
      </a>

      <!-- Contacto mobile-->
      <a :href="'tel:' + phoneNumber" class="is-hidden-desktop contacto" target="_blank">
        <image x="310" y="550" :href="'/img/booths-pics/' + booth.btn2" width="200" />
      </a>
      

    </svg>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const booth = ref({
  image: "bg-careforth.webp",
  logo: "logo-careforth.webp",
  btn1: "brochure.svg",
  btn2: "contact.svg",
  videoID: "XTQ7T812phw" // ID del video de YouTube
});

const emailAccount = "cfelix@careforth.com";
const subject = "New Contact Request - Careforth";
const phoneNumber = "978-989-3211";

</script>

