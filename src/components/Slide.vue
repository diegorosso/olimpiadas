<template>
  <div class="hero-container">
    <swiper
      :modules="[Autoplay, Pagination, Navigation]"
      :slides-per-view="1"
      :loop="true"
      :pagination="{ clickable: true }"
      :navigation="true"
      :autoplay="{ delay: 5000, disableOnInteraction: false }"
      class="hero-slider"
    >
      <swiper-slide v-for="(image, index) in images" :key="index">
        <div class="slide" :style="{ backgroundImage: `url(${image})` }">
<!--           <div class="overlay">
            <h1 class="title">Olimpiadas Rurais</h1>
            <p class="subtitle">¡Vive la emoción del deporte rural!</p>
          </div> -->
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import slide1 from "@/assets/imagenes/fotos/pruebas/Final/final1.webp";
import slide2 from "@/assets/imagenes/fotos/pruebas/Final/final2.webp";
import slide3 from "@/assets/imagenes/fotos/pruebas/Final/final3.webp";
import slide4 from "@/assets/imagenes/fotos/pruebas/Final/final4.webp";
import slide5 from "@/assets/imagenes/fotos/pruebas/Final/final5.webp";
import slide6 from "@/assets/imagenes/fotos/pruebas/Final/final6.webp";
import slide7 from "@/assets/imagenes/fotos/pruebas/Final/final7.webp";
import slide8 from "@/assets/imagenes/fotos/pruebas/Final/final8.webp";

// Imágenes del carrusel (ajusta las rutas según tu proyecto)
const images = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8];
</script>

<style scoped>
.hero-container {
  width: 100%;
  height: 100vh;
  position: relative;
}

.hero-slider {
  width: 100%;
  height: 100%;
}

.slide {
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  position: relative;
}

.overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  padding: 20px 40px;
  border-radius: 10px;
}

.title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 1.5rem;
}

/* Estilo para las flechas de navegación */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: white !important; /* Cambia el color de las flechas a blanco */
}

/* Estilo para los puntos de paginación */
:deep(.swiper-pagination-bullet) {
  background-color: white !important; /* Cambia el color de los puntos a blanco */
}

/* Si quieres que el punto activo sea más visible */
:deep(.swiper-pagination-bullet-active) {
  background-color: white !important;
  opacity: 1; /* Asegura que el color se vea bien */
}
</style>
