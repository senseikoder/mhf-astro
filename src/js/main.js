document.addEventListener("astro:page-load", () => {

   function scroll() {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY >= 60) {
         navbar.classList.add("is-white");
      } else {
         navbar.classList.remove("is-white");
      }
   }

   function openBurger() {
      const $burger = document.querySelector(".navbar-burger");

      $burger.addEventListener("click", () => {
         const target = $burger.dataset.target
         const $target = document.getElementById(target)

         $burger.classList.toggle("is-active");

         $target.classList.toggle("is-active");
      });
   }

   function openSubmenu(){
      const arrow_down = document.querySelector(".has-dropdown .navbar-link")

      arrow_down.addEventListener("click", () => {

         const $target = document.querySelector('.navbar-dropdown')

         $target.classList.toggle("is-active");
      });
   }


   openBurger();
   openSubmenu();
   scroll();


   
   window.addEventListener("scroll", scroll);
});