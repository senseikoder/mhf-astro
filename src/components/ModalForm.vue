<template>
   <div class="modal" id="modal-form" :class="{ 'is-active': isActive }">
      <div class="modal-background" @click="$emit('close')"></div>
      <div class="modal-card">
         <header class="modal-card-head has-background-info p-3">
            <img :src="'/img/booths-pics/' + logoStand" alt="" width="200" />
            <button class="delete" aria-label="close" @click="$emit('close')"></button>
         </header>
         <div class="modal-card-body">
            <div class="content">
               <form @submit.prevent="handleSubmit" class="p-4">
                  <div class="columns is-multiline">

                     <div class="column is-12 has-text-centered" v-if="phoneNumber">
                        <a href="tel:{{phoneNumber}}" class="button is-primary is-medium is-outlined has-text-primary">
                           Call Us {{ phoneNumber }}</a>
                     </div>


                     <div class="column is-12">
                        <input class="input" type="text" v-model="name" :placeholder="form.labelname" />
                     </div>
                     <div class="column is-12">
                        <input class="input" type="text" v-model="phone" :placeholder="form.labelphone" />
                     </div>
                     <div class="column is-12">
                        <input class="input" type="email" v-model="email" :placeholder="form.labelemail" />
                     </div>
                     <div class="column is-12">
                        <textarea class="textarea" rows="3" v-model="message" :placeholder="form.labelmsj"></textarea>
                     </div>
                     <!-- T a r r i t o d e l i e m -->
                     <div class="fieldset ohnohoney">
                        <label for="yourname"></label>
                        <input autocomplete="off" type="text" id="yourname" v-model="yourname"
                           placeholder="Your name here" />
                        <label for="youremail"></label>
                        <input autocomplete="off" type="email" id="youremail" v-model="youremail"
                           placeholder="Your e-mail here" />
                     </div>
                     <div class="column is-12">
                        <div class="mt-10">
                           <button class="button is-primary has-text-white" :class="{ 'is-loading': isSubmitting }"
                              :disabled="isSubmitting">
                              {{ form.labelbtn }}
                           </button>
                        </div>
                     </div>
                  </div>
               </form>

               <div class="notification animated fadeInUp" :class="{ 'is-hidden': !showNotif }">
                  <button class="delete" @click="showNotif = false"></button>
                  <span class="text">{{ notifText }}</span>
               </div>
            </div>
         </div>
         <footer class="modal-card-foot"></footer>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
   </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
   isActive: {
      type: Boolean,
      default: false
   },
   emailAccount: String,
   emailSubject: String,
   phoneNumber: String,
   logoStand: String
});

const idioma = computed(() => {
   if (typeof window !== 'undefined') {
      return window.location.pathname.startsWith('/en') ? '/en' : ''
   }
   return ''
})

const emit = defineEmits(['close']);

const form = ref({
   labelname: idioma.value === '/en' ? "Name" : "Nombre",
   labelphone: idioma.value === '/en' ? "Phone" : "Teléfono",
   labelemail: idioma.value === '/en' ? "Email" : "Correo electrónico",
   labelmsj: idioma.value === '/en' ? "Comments" : "Comentarios",
   labelbtn: idioma.value === '/en' ? "Send Message" : "Enviar Mensaje",
})

const name = ref('')
const phone = ref('')
const email = ref('')
const message = ref('')
const yourname = ref('')
const youremail = ref('')
const showNotif = ref(false)
const notifText = ref('')
const isSubmitting = ref(false)

const handleSubmit = async () => {
   if (yourname.value || youremail.value) return
   isSubmitting.value = true
   const body = `<h3>Contact details</h3>
<p><b>Name:</b> ${name.value}</p>
<p><b>Contact Phone:</b> ${phone.value}</p>
<p><b>Email:</b> ${email.value}</p>
<p><b>Message:</b> ${message.value}</p>
<br><br>
<p>Message was sent from myhealthfair.com</p>`
   try {
      const res = await fetch('/api/sendEmail.json', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({
            to: props.emailAccount,
            from: 'info@miferiadesalud.com',
            html: body,
            subject: props.emailSubject
         })
      })
      if (res.ok) {
         if (idioma.value === '/en') {
            notifText.value = 'Your message was sent! 👍'
         } else {
            notifText.value = 'Tu mensaje fue enviado! 👍'
         }
         showNotif.value = true
      } else {
         notifText.value = 'Oh sorry 🙁'
         showNotif.value = true
      }
   } catch (error) {
      console.error(error)
      notifText.value = 'Oh sorry 🙁'
      showNotif.value = true
   }
   setTimeout(() => {
      showNotif.value = false
      name.value = ''
      phone.value = ''
      email.value = ''
      message.value = ''
      isSubmitting.value = false
   }, 2000)
}

</script>

<style>
.modal-card-head {
   justify-content: center;
}

.delete {
   position: absolute;
   right: 10px;
   top: 10px;
}
</style>



<style>
.ohnohoney {
   opacity: 0;
   position: absolute;
   top: 0;
   left: 0;
   height: 0;
   width: 0;
   z-index: -1;
}

.notification {
   width: 300px;
   position: absolute;
   bottom: 3rem;
   right: 3rem;
}
</style>
