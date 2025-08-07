<template>
   <section class="section banner is-small">
      <div class="is-overlay"></div>
      <div class="container">
         <h2 class="title has-text-light has-text-centered my-6">
            {{ lang === 'es' ? 'Recientes Vlogs de Salud' : 'Latest Health Vlogs' }}
         </h2>

         <div class="columns is-multiline is-variable is-8">
            <div v-for="post in posts" :key="post.id" class="column is-4">
               <div class="card">
                  <div class="card-content">
                     <a :href="`${urlLang}/blog/${post.slug}`">
                        <img width="720" height="360"
                           :src="post._embedded?.['wp:featuredmedia']['0'].media_details.sizes.medium_large.source_url + '.webp' || placeholder"
                           :alt="post.title.rendered" loading="lazy" />
                        <h4 class="title is-5" v-html="post.title.rendered"></h4>
                     </a>
                     <div class="my-4 has-text-black" v-html="post.excerpt.rendered"></div>
                     <p class="date mt-3">
                        <small>
                           {{ new Date(post.date).toLocaleDateString(props.lang, {
                              year: 'numeric', month: 'long', day:
                           'numeric' }) }}
                        </small>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import placeholder from '../images/placeholder.png';

const props = defineProps({
   lang: {
      type: String,
      default: 'es'
   }
});

const wpurl = import.meta.env.PUBLIC_WP_URL;
const urlLang = props.lang === "es" ? "" : "/en";
const posts = ref([]);

onMounted(async () => {
   try {
      const res = await fetch(`${wpurl}/posts?per_page=3&lang=${props.lang}&_embed`, {
         cache: "no-store"
      });
      posts.value = await res.json();
   } catch (error) {
      console.error('Error fetching posts:', error);
   }
});
</script>

<style scoped>
.banner {
   background: url("../images/banner-about.webp") center / cover no-repeat;
   position: relative;
}

.is-overlay {
   background-color: #0577b5d1;
}

.card {
   height: 100%;
   display: flex;
   flex-direction: column;
}

.card-content {
   flex-grow: 1;
   display: flex;
   flex-direction: column;
}


img {
   width: 100%;
   height: auto;
   margin-bottom: 1rem;
   border-radius: 4px;
}

.date {
   margin-top: auto;
   padding-top: .5rem;
   border-top: 1px solid #eee;
}
</style>