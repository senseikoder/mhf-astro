<template>
  <section class="section">
    <div class="container has-text-white is-fullhd">
      <div class="block has-text-centered">
        <h3 class="title" v-if="lang == 'es'">Aliados en la Media</h3>
        <h3 class="title" v-else>Partners in the Media</h3>
      </div>

      <div class="videos-carousel">
        <div class="carousel-cell" v-for="video in videos" :key="video.id.videoId">

            <LiteYouTubeEmbed
              :id="video.snippet.resourceId.videoId"
              :title="video.snippet.title"
              aspect-height="9"
              aspect-width="16"
            ></LiteYouTubeEmbed>
            <h3 class="title is-5 my-4 has-text-centered">
              <span v-html="video.snippet.title"></span>
            </h3>
    
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import LiteYouTubeEmbed from 'vue-lite-youtube-embed';
import 'vue-lite-youtube-embed/style.css';

const props = defineProps({
  lang: {
    type: String,
    default: 'en'
  },
  videos: {
    type: Array,
    required: true,
    default: () => []
  }
});

const flickity = ref(null);

onMounted(() => {
  // Solo se ejecuta en el cliente
  if (typeof window !== 'undefined') {
    import('flickity').then(FlickityModule => {
      const Flickity = FlickityModule.default || FlickityModule;

      flickity.value = new Flickity('.videos-carousel', {
 
        contain: true,
        pageDots: true,
        prevNextButtons: true,
        wrapAround: true,
        autoPlay: 5000,
        pauseAutoPlayOnHover: true,
        imagesLoaded: true,
        groupCells: 1,
        adaptiveHeight: true
      });
    });
  }
});

onUnmounted(() => {
  if (flickity.value) {
    flickity.value.destroy();
  }
});

const apiKey = import.meta.env.PUBLIC_YOUTUBE_API_KEY;

const playlistId = props.lang == "es" ? "PLnKieTyBOHbMTVtLiMpJ_GM7fhKdDoUN3" : "PLnKieTyBOHbMJTy7QtuL7zEPGECDd4IfI";
let videos = [];

const response = await fetch(
  `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${playlistId}&key=${apiKey}&part=snippet,id&maxResults=6`
);
const data = await response.json();
videos = data.items

</script>

<style scoped>
.videos-carousel {
  width: 100%;
  margin: 0 auto;
  outline: none;
}

.carousel-cell {
  width: 100%;
  padding: 0 15px;
  box-sizing: border-box;
}

.video-container {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin: 10px;
  padding: 15px;
}

.video-container:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
}

/* Estilos para los controles de navegación */
:deep(.flickity-prev-next-button) {
  background: rgba(255, 255, 255, 0.8);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

:deep(.flickity-prev-next-button:hover) {
  background: #fff;
}

:deep(.flickity-prev-next-button.previous) {
  left: 10px;
}

:deep(.flickity-prev-next-button.next) {
  right: 10px;
}

:deep(.flickity-page-dots) {
  bottom: -30px;
}

:deep(.flickity-page-dots .dot) {
  background: #666;
  opacity: 0.5;
  transition: all 0.3s ease;
}

:deep(.flickity-page-dots .dot.is-selected) {
  background: #fff;
  opacity: 1;
}

/* Ajustes responsivos */
@media (min-width: 768px) {
  .carousel-cell {
    width: 50%;
  }
}

@media (min-width: 1024px) {
  .carousel-cell {
    width: 33.333%;
  }
}
</style>


