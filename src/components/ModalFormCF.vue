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




                     
                     <div class="column is-6">
                        <input class="input" type="text" v-model="name" :placeholder="form.labelname" />
                     </div>
                     <div class="column is-6">
                        <div class="select">
                           <select v-model="town" :placeholder="form.labeltown">
                              <option value="">{{ form.labeltown }}</option>
                              <option value="Abington">Abington</option>
                              <option value="Acton">Acton</option>
                              <option value="Agawam">Agawam</option>
                              <option value="Amherst">Amherst</option>
                              <option value="Andover">Andover</option>
                              <option value="Arlington">Arlington</option>
                              <option value="Attleboro">Attleboro</option>
                              <option value="Barnstable">Barnstable</option>
                              <option value="Belmont">Belmont</option>
                              <option value="Beverly">Beverly</option>
                              <option value="Billerica">Billerica</option>
                              <option value="Boston">Boston</option>
                              <option value="Braintree">Braintree</option>
                              <option value="Brockton">Brockton</option>
                              <option value="Brookline">Brookline</option>
                              <option value="Burlington">Burlington</option>
                              <option value="Cambridge">Cambridge</option>
                              <option value="Canton">Canton</option>
                              <option value="Chelmsford">Chelmsford</option>
                              <option value="Chelsea">Chelsea</option>
                              <option value="Chicopee">Chicopee</option>
                              <option value="Danvers">Danvers</option>
                              <option value="Dartmouth">Dartmouth</option>
                              <option value="Dedham">Dedham</option>
                              <option value="Dracut">Dracut</option>
                              <option value="Easton">Easton</option>
                              <option value="Everett">Everett</option>
                              <option value="Fall River">Fall River</option>
                              <option value="Falmouth">Falmouth</option>
                              <option value="Fitchburg">Fitchburg</option>
                              <option value="Framingham">Framingham</option>
                              <option value="Franklin">Franklin</option>
                              <option value="Gardner">Gardner</option>
                              <option value="Gloucester">Gloucester</option>
                              <option value="Haverhill">Haverhill</option>
                              <option value="Holyoke">Holyoke</option>
                              <option value="Lawrence">Lawrence</option>
                              <option value="Leominster">Leominster</option>
                              <option value="Lexington">Lexington</option>
                              <option value="Lowell">Lowell</option>
                              <option value="Lynn">Lynn</option>
                              <option value="Malden">Malden</option>
                              <option value="Marlborough">Marlborough</option>
                              <option value="Medford">Medford</option>
                              <option value="Melrose">Melrose</option>
                              <option value="Methuen">Methuen</option>
                              <option value="Milton">Milton</option>
                              <option value="Natick">Natick</option>
                              <option value="Needham">Needham</option>
                              <option value="New Bedford">New Bedford</option>
                              <option value="Newton">Newton</option>
                              <option value="North Adams">North Adams</option>
                              <option value="North Andover">North Andover</option>
                              <option value="North Attleboro">North Attleboro</option>
                              <option value="Northampton">Northampton</option>
                              <option value="Peabody">Peabody</option>
                              <option value="Pittsfield">Pittsfield</option>
                              <option value="Plymouth">Plymouth</option>
                              <option value="Quincy">Quincy</option>
                              <option value="Randolph">Randolph</option>
                              <option value="Revere">Revere</option>
                              <option value="Salem">Salem</option>
                              <option value="Saugus">Saugus</option>
                              <option value="Shrewsbury">Shrewsbury</option>
                              <option value="Somerville">Somerville</option>
                              <option value="Springfield">Springfield</option>
                              <option value="Stoughton">Stoughton</option>
                              <option value="Taunton">Taunton</option>
                              <option value="Tewksbury">Tewksbury</option>
                              <option value="Wakefield">Wakefield</option>
                              <option value="Waltham">Waltham</option>
                              <option value="Watertown">Watertown</option>
                              <option value="Wellesley">Wellesley</option>
                              <option value="West Springfield">West Springfield</option>
                              <option value="Westfield">Westfield</option>
                              <option value="Weymouth">Weymouth</option>
                              <option value="Woburn">Woburn</option>
                              <option value="Worcester">Worcester</option>
                           </select>
                        </div>
                     </div>
                     <div class="column is-12">
                        <input class="input" type="text" v-model="phone" :placeholder="form.labelphone" />
                     </div>
                     <div class="column is-12">
                        <input class="input" type="email" v-model="email" :placeholder="form.labelemail" />
                     </div>
                     <div class="column is-6">
                        <div class="select">

                           <select v-model="eligible" :placeholder="form.labeleligible">
                              <option value="">{{ form.labeleligible }}</option>
                              <option value="Yes">Yes</option>
                              <option value="No">No</option>
                              <option value="Not Sure">Not Sure</option>
                           </select>
                        </div>
                     </div>
                     <div class="column is-6">
                        <div class="select">

                           <select v-model="relation" :placeholder="form.labelrelation">
                              <option value="">{{ form.labelrelation }}</option>
                              <option value="Daughter">Daughter</option>
                              <option value="Son">Son</option>
                              <option value="Spouse">Spouse</option>
                              <option value="Mother">Mother</option>
                              <option value="Father">Father</option>
                              <option value="Grandchild">Grandchild</option>
                              <option value="Sister">Sister</option>
                              <option value="Brother">Brother</option>
                              <option value="Patient">Patient</option>
           
                              <option value="Other">Other</option>
                           </select>
                        </div>
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
   labeltown: idioma.value === '/en' ? "Select your Town" : "Seleccione su Ciudad",
   labelname: idioma.value === '/en' ? "Name" : "Nombre",
   labelphone: idioma.value === '/en' ? "Phone" : "Teléfono",
   labelemail: idioma.value === '/en' ? "Email" : "Correo electrónico",
   labelmsj: idioma.value === '/en' ? "Comments" : "Comentarios",
   labelbtn: idioma.value === '/en' ? "Send Message" : "Enviar Mensaje",
   labelrelation: idioma.value === '/en' ? "What's your relationship?" : "¿Cuál es su relación?",
   labeleligible: idioma.value === '/en' ? "Is eligible for Medicaid?" : "¿Elegible para Medicaid?"
})

const town = ref('')
const name = ref('')
const phone = ref('')
const email = ref('')
// const message = ref('')
const eligible = ref('')
const relation = ref('')
const yourname = ref('')
const youremail = ref('')
const showNotif = ref(false)
const notifText = ref('')
const isSubmitting = ref(false)

const handleSubmit = async () => {
   if (yourname.value || youremail.value) return
   isSubmitting.value = true
   const body = `<h3>Contact details</h3>
<p><b>${form.value.labeltown}:</b> ${town.value}</p>
<p><b>${form.value.labelname}:</b> ${name.value}</p>
<p><b>${form.value.labelphone}:</b> ${phone.value}</p>
<p><b>${form.value.labelemail}:</b> ${email.value}</p>
<p><b>${form.value.labeleligible}:</b> ${eligible.value}</p>
<p><b>${form.value.labelrelation}:</b> ${relation.value}</p>
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
      eligible.value = ''
      relation.value = ''
      isSubmitting.value = false
   }, 2000)
}

</script>

<style>
.input::placeholder,
.textarea::placeholder,
.select::placeholder {
   opacity: 1; 
   color: #666;
}

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
