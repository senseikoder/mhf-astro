<template>
  <div class="modal" :class="{ 'is-active': isActive }">
    <div class="modal-background" @click="$emit('close')"></div>
    <div class="modal-card">
      <header class="modal-card-head has-background-info">
        <!-- <img src="/img/logo-headers.webp" alt="" width="260" /> -->
        <button class="delete" aria-label="close" @click="$emit('close')"></button>
      </header>
      <div class="modal-card-body p-0">
        <div class="content">
          <component :is="currentBoothComponent" v-if="currentBoothComponent" @open-video="openVideoModal" @open-form="openFormModal" />
        </div>
      </div>
      <footer class="modal-card-foot"></footer>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
  </div>

  <!-- Modal de formulario -->
  <ModalForm v-if="showFormModal" :isActive="showFormModal" @close="closeFormModal" :emailAccount="emailAccount" :emailSubject="emailSubject" :phoneNumber="phoneNumber" :logoStand="logoStand" />

  <!-- Modal de video -->
  <ModalVideo v-if="showVideoModal" :isActive="showVideoModal" :videoID="currentVideoID" @close="closeVideoModal" />
</template>

<script>
import { computed, defineAsyncComponent, ref } from 'vue'
import ModalForm from './ModalForm.vue'
import ModalVideo from './ModalVideo.vue'

export default {
  name: 'ModalStand',
  components: {
    ModalForm,
    ModalVideo
  },
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    currentBooth: {
      type: String,
      default: ''
    },
    idioma: {
      type: String,
      default: 'es'
    }
  },
  emits: ['close'],
  setup(props) {
    // Componentes dinámicos para cada stand
    const boothComponents = {
      'united-health-care': defineAsyncComponent(() => import('src/components/stands/UnitedHealthCare.vue')),
      'dana-farber': defineAsyncComponent(() => import('src/components/stands/DanaFarber.vue')),
      'alzheimer-assoc': defineAsyncComponent(() => import('src/components/stands/AlzheimerAssoc.vue')),
      'ferreras-counseling': defineAsyncComponent(() => import('src/components/stands/FerrerasCounseling.vue')),
      'careforth': defineAsyncComponent(() => import('src/components/stands/Careforth.vue')),
      'mahda': defineAsyncComponent(() => import('src/components/stands/Mahda.vue'))
    }

    const boothComponentsEng = {
      'united-health-care': defineAsyncComponent(() => import('src/components/stands/UnitedHealthCareEng.vue')),
      'dana-farber': defineAsyncComponent(() => import('src/components/stands/DanaFarberEng.vue')),
      'alzheimer-assoc': defineAsyncComponent(() => import('src/components/stands/AlzheimerAssocEng.vue')),
      'ferreras-counseling': defineAsyncComponent(() => import('src/components/stands/FerrerasCounselingEng.vue')),
      'careforth': defineAsyncComponent(() => import('src/components/stands/CareforthEng.vue')),
      'mahda': defineAsyncComponent(() => import('src/components/stands/MahdaEng.vue'))
    }

    const currentBoothComponent = computed(() => {
      if (props.idioma === '/en') {
        return boothComponentsEng[props.currentBooth] || null
      }
      return boothComponents[props.currentBooth] || null
    })

    const showFormModal = ref(false)
    const showVideoModal = ref(false)
    const currentVideoID = ref('')
    const emailAccount = ref('')
    const emailSubject = ref('')
    const phoneNumber = ref('')
    const logoStand = ref('')

    const openFormModal = (email, subject, phone, logo) => {
      showFormModal.value = true
      emailAccount.value = email
      emailSubject.value = subject
      phoneNumber.value = phone
      logoStand.value = logo
    }

    const closeFormModal = () => {
      showFormModal.value = false
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
      currentBoothComponent,
      showFormModal,
      openFormModal,
      closeFormModal,
      showVideoModal, 
      currentVideoID,
      emailAccount,
      emailSubject,
      phoneNumber,
      logoStand,
      openVideoModal,
      closeVideoModal
    }
  }
}
</script>

<style scoped>
.modal-card-head {
  justify-content: center;
}

.delete {
  position: absolute;
  right: 10px;
  top: 10px;
}
</style>
