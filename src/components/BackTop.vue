<template>
    <a
      href="#top"
      aria-label="back to top"
      data-back-top-btn
      class="back-top-btn"
      v-bind:class="{ active: isActive }"
      @click.prevent="scrollToTop"
    >
      <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
    </a>
  </template>
  
  <script>
  export default {
    name: 'BackToTopButton',
    data() {
      return {
        isActive: false,
        offset: 200, // Tamaño desde el que el botón aparecerá (en píxeles)
      };
    },
    methods: {
      handleScroll() {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;
        this.isActive = scrollPosition > this.offset;
      },
      scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
      this.handleScroll(); // Llamar a la función al montar el componente
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll); // Limpiar el event listener cuando el componente se destruya
    },
  };
  </script>
  
  <style scoped>
  .back-top-btn {
    position: fixed;
    bottom: 10px;
    right: 20px;
    background-color: var(--eerie-black);
    color: var(--white-1);
    padding: 12px;
    border-radius: 50%;
    box-shadow: var(--shadow-2);
    z-index: 4;
    opacity: 0;
    visibility: hidden;
    transition: var(--transition-1);
  }
  
  .back-top-btn.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(-10px);
  }
  
  .back-top-btn:is(:hover, :focus) {
    opacity: 0.9;
  }
  </style>
  