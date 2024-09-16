document.addEventListener("astro:page-load", () => {

   // Función para establecer una cookie con un valor y un tiempo de expiración en días
   function setCookie(name, value, days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      const expires = "expires=" + date.toUTCString();
      document.cookie = name + "=" + value + ";" + expires + ";path=/";
   }

   // Función para obtener el valor de una cookie
   function getCookie(name) {
      const nameEQ = name + "=";
      const ca = document.cookie.split(';');
      for (let i = 0; i < ca.length; i++) {
         let c = ca[i];
         while (c.charAt(0) === ' ') c = c.substring(1, c.length);
         if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
   }

   // Functions to open and close a modal
   function openModal($el) {
      $el.classList.add("is-active");
   }

   function closeModal($el) {
      $el.classList.remove("is-active");
      setCookie('modalClosed', 'true', 1); // 1 día
   }

   function closeAllModals() {
      (document.querySelectorAll(".modal") || []).forEach(($modal) => {
         closeModal($modal);
      });
   }

   // Add a click event on various child elements to close the parent modal
   (
      document.querySelectorAll(
         ".modal-background, .modal-close, .delete",
      ) || []
   ).forEach(($close) => {
      const $target = $close.closest(".modal");

      $close.addEventListener("click", () => {
         closeModal($target);
      });
   });

   // Add a keyboard event to close all modals
   document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
         closeAllModals();
      }
   });

   // Check if the modal should be displayed
   if (!getCookie('modalClosed')) {
      // Load Modal after 4 seconds
      setTimeout(() => {
         const $target = document.getElementById('modal-popup');
         openModal($target);
      }, 7000);
   }
});
