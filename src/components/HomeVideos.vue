<template>
  <section class="section">
    <div class="container has-text-white">
      <div class="block has-text-centered">

        <h3 class="title" v-if="lang == 'es'">Aliados en la Media</h3>
        
        <h3 class="title" v-else>Partners in the Media</h3>

      </div>

      <div class="columns is-multiline is-centered">
        <div
          v-for="video in videos"
          :key="video.id.videoId"
          class="column is-4 my-5"
        >
          <LiteYouTubeEmbed
            :id="video.snippet.resourceId.videoId"
            :title="video.snippet.title"
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
import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
import 'vue-lite-youtube-embed/style.css'

const props = defineProps({
  lang: {
    type: String,
    default: 'en'
  }
});

const apiKey = import.meta.env.PUBLIC_YOUTUBE_API_KEY;

const playlistId = props.lang == "es" ? "PLnKieTyBOHbMTVtLiMpJ_GM7fhKdDoUN3" : "PLnKieTyBOHbMJTy7QtuL7zEPGECDd4IfI";
let videos = [];

const response = await fetch(
  `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${playlistId}&key=${apiKey}&part=snippet,id&maxResults=3`
);
const data = await response.json();
videos = data.items

</script>


