<template>
  <a
    :href="whatsappLink"
    target="_blank"
    aria-label="Enviar mensaje por WhatsApp"
    class="back-top-btn"
    :class="{ active: isActive }"
  >
    <ion-icon name="logo-whatsapp" aria-hidden="true"></ion-icon>
  </a>
</template>

<script>
export default {
  name: "WhatsAppButton",
  data() {
    return {
      isActive: false,
      offset: 200,
      phoneNumber: "+34672523511",
      message: "Hola quiero participar de las olimpiadas rurais 2025",
    };
  },
  computed: {
    whatsappLink() {
      const encodedMessage = encodeURIComponent(this.message);
      const number = this.phoneNumber.replace(/\D/g, ""); // solo números
      return `https://wa.me/${number}?text=${encodedMessage}`;
    },
  },
  methods: {
    handleScroll() {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      this.isActive = scrollPosition > this.offset;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll();
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.back-top-btn {
  position: fixed;
  bottom: 10px;
  right: 20px;
  background-color: #25d366; /* Verde WhatsApp */
  color: white;
  padding: 12px;
  border-radius: 50%;
  box-shadow: var(--shadow-2);
  z-index: 4;
  opacity: 0;
  visibility: hidden;
  transition: var(--transition-1);
  font-size: 60px;
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
