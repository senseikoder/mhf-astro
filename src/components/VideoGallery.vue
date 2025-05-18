<template>
  <div class="columns is-multiline is-centered">
    <div v-for="video in videos" :key="video.id.videoId" class="column is-4 my-5">
      <LiteYouTubeEmbed :id="video.snippet.resourceId.videoId" :title="video.snippet.title"></LiteYouTubeEmbed>
      <h3 class="title is-5 my-4 has-text-centered">
        <span v-html="video.snippet.title"></span>
      </h3>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
import 'vue-lite-youtube-embed/style.css'

const props = defineProps({
  lang: {
    type: String,
    default: 'en'
  }
});

const apiKey = import.meta.env.PUBLIC_YOUTUBE_API_KEY;
const channelId = "UCNkGAfwzTiXgja3RCqELKyw";
const listId = "UUNkGAfwzTiXgja3RCqELKyw"

const videos = ref([]);
const languageFilter = props.lang === 'en' ? 'english' : 'español';

const fetchVideos = async () => {
  try {
    // const response = await fetch(
    //   `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=30`
    // );
    const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,id&maxResults=25&playlistId=${listId}&key=${apiKey}`)
    const data = await response.json();
    console.log(data);
    
    videos.value = data.items.filter(video => 
      video.snippet.description?.includes(languageFilter)
    );
  } catch (error) {
    console.error('Error fetching videos:', error);
  }
};

onMounted(() => {
  fetchVideos();
});
</script>
