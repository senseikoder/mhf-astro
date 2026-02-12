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
          <component :is="currentBoothComponent" v-if="currentBoothComponent" @open-video="$emit('open-video', $event)" />
        </div>
      </div>
      <footer class="modal-card-foot"></footer>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
  </div>
</template>

<script>
import { computed, defineAsyncComponent } from 'vue'

export default {
  name: 'ModalStand',
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    currentBooth: {
      type: String,
      default: ''
    }
  },
  emits: ['close', 'open-video'],
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

    const currentBoothComponent = computed(() => {
      return boothComponents[props.currentBooth] || null
    })

    return {
      currentBoothComponent
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
