<template>
  <div>
    <!-- Versión desktop -->
    <section class="hero is-hidden-touch">
      <div class="hero-body p-0">
        <div class="container is-fluid p-0">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 1920 1080">
            <image width="1920" height="1080" xlink:href="/img/mhf-plaza-2026.webp" />

            <!-- United Health Care -->
            <a @click="openModal('united-health-care')">
              <image xlink:href="/img/booths-pics/btn-uhc.webp" x="1390" y="440" />
            </a>

            <!-- Dana-Farber -->
            <a @click="openModal('dana-farber')">
              <image xlink:href="/img/booths-pics/btn-danaf.webp" x="910" y="550" />
            </a>

            <!-- Alzheimer's Association -->
            <a @click="openModal('alzheimer-assoc')">
              <image xlink:href="/img/booths-pics/btn-aa.webp" x="330" y="440" />
            </a>

            <!-- Ferreras Counseling -->
            <a @click="openModal('ferreras-counseling')">
              <image xlink:href="/img/booths-pics/btn-ferreras.webp" x="660" y="650" />
            </a>

            <!-- Careforth -->
            <a @click="openModal('careforth')">
              <image xlink:href="/img/booths-pics/btn-careforth.webp" x="1150" y="480" />
            </a>

            <!-- Mahda -->
            <a @click="openModal('mahda')">
              <image xlink:href="/img/booths-pics/btn-mahda.webp" x="570" y="370" />
            </a>
          </svg>
        </div>
      </div>
    </section>

    <!-- Versión móvil -->
    <section class="hero-mobile is-hidden-desktop">
      <div class="container">
        <div class="buttons is-centered">
          <a :href="idioma + '/booths/alzheimer-assoc/'" class="button">
            Alzheimer's Association
          </a>
          <a :href="idioma + '/booths/dana-farber/'" class="button">
            Dana-Farber Cancer Institute
          </a>
          <a :href="idioma + '/booths/ferreras-counseling/'" class="button">
            Ferreras Counseling
          </a>
          <a :href="idioma + '/booths/united-health-care/'" class="button">
            United Health Care
          </a>
        </div>
      </div>
    </section>

    <!-- Modal dinámico -->
    <ModalStand v-if="showModal" :isActive="showModal" :currentBooth="currentBooth" @close="closeModal"
      @open-video="openVideoModal" />

    <!-- Modal de video -->
    <ModalVideo v-if="showVideoModal" :isActive="showVideoModal" :videoID="currentVideoID" @close="closeVideoModal" />
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import ModalStand from './ModalStand.vue'
import ModalVideo from './ModalVideo.vue'

export default {
  name: 'HomeFeriaClassic',
  components: {
    ModalStand,
    ModalVideo
  },
  setup() {
    const showModal = ref(false)
    const currentBooth = ref('')
    const showVideoModal = ref(false)
    const currentVideoID = ref('')

    const idioma = computed(() => {
      // Detectar idioma actual (similar a Astro.currentLocale)
      if (typeof window !== 'undefined') {
        return window.location.pathname.startsWith('/en') ? '/en' : ''
      }
      return ''
    })

    const openModal = (booth) => {
      currentBooth.value = booth
      showModal.value = true
    }

    const closeModal = () => {
      showModal.value = false
      currentBooth.value = ''
    }

    const openVideoModal = (videoID) => {
      currentVideoID.value = videoID
      showVideoModal.value = true
    }

    const closeVideoModal = () => {
      showVideoModal.value = false
      currentVideoID.value = ''
    }

    return {
      showModal,
      currentBooth,
      showVideoModal,
      currentVideoID,
      idioma,
      openModal,
      closeModal,
      openVideoModal,
      closeVideoModal
    }
  }
}
</script>

<style scoped>
.hero-mobile {
  background: url("../images/bg-feria.webp") center no-repeat;
  background-size: cover;
}

.hero-mobile .container {
  padding-block: 1rem;
}

.buttons {
  gap: 0.6rem;
}

.hero-mobile .button {
  width: 90%;
  background-color: rgba(255, 255, 255, 0.2);
  text-shadow: 1px 2px 2px #333;
  font-size: large;
  font-weight: 700;
  color: white;
}

.is-overlay {
  background: rgba(121, 171, 236, 0.15);
}

a>image {
  opacity: 0.8;
  width: 125px;
  height: 125px;
  transition: all 0.3s;
}

a>image:hover {
  width: 135px;
  height: 135px;
  opacity: 1;
}

.list,
.list a {
  color: white;
}
</style>
