<template>
  <div id="modal-video" class="modal animated fadeIn" :class="{ 'is-active': isActive }">
    <div class="modal-background" @click="$emit('close')"></div>
    <div class="modal-content">
      <!-- <div class="flex-card video-card"> -->
        <LiteYouTubeEmbed
          v-if="videoID"
          :id="videoID"
          :title="'Video'"
        ></LiteYouTubeEmbed>
      <!-- </div> -->
    </div>
    <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
  </div>
</template>

<script setup>
import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
import 'vue-lite-youtube-embed/style.css'

const props = defineProps({
  isActive: {
    type: Boolean,
    default: false
  },
  videoID: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['close'])
</script>

