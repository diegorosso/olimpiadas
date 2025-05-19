<template>
  <div class="gallery-container" data-aos="fade-up">
    <h1 class="title">Olimpiadas Rurais Galeria</h1>

    <div class="input-container">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Buscar categoría..."
        class="search-input"
      />

      <select v-model="selectedCategory" class="category-select">
        <option value="">Todas las categorías</option>
        <option
          v-for="category in sports"
          :key="category.title"
          :value="category.title"
        >
          {{ category.title }}
        </option>
      </select>
    </div>
    <div class="gallery">
      <div
        v-for="(category, index) in filteredSports"
        :key="index"
        class="gallery-item"
      >
        <h2 class="category-title">{{ category.title }}</h2>
        <swiper
          :modules="[Navigation, Pagination, Autoplay]"
          :slides-per-view="1"
          :space-between="20"
          :navigation="true"
          :pagination="{ clickable: true }"
          :autoplay="{ delay: 5000, disableOnInteraction: false }"
          class="image-slider"
        >
          <swiper-slide
            v-for="(image, imgIndex) in category.images"
            :key="imgIndex"
          >
            <img
              :src="image"
              :alt="category.title"
              class="sport-image"
              loading="lazy"
            />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { ref, computed, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
  AOS.init();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Definir el router
const router = useRouter();
const route = useRoute();

// Función para redirigir al inicio
const goToHome = () => {
  router.push("/"); // Esto llevará al usuario a la ruta raíz (inicio)
};

// Importa automáticamente las imágenes de cada categoría
const lazoModules = import.meta.glob(
  "@/assets/imagenes/fotos/pruebas/Carrera de Lazos/*.webp",
  { eager: true }
);
const carreraSacosModules = import.meta.glob(
  "@/assets/imagenes/fotos/pruebas/Carrera de Sacos/*.webp",
  { eager: true }
);
const carretillaModules = import.meta.glob(
  "@/assets/imagenes/fotos/pruebas/Carretilla/*.webp",
  { eager: true }
);
const cintasModules = import.meta.glob(
  "@/assets/imagenes/fotos/pruebas/Cintas/*.webp",
  { eager: true }
);
const combaModules = import.meta.glob(
  "@/assets/imagenes/fotos/pruebas/Comba/*.webp",
  { eager: true }
);
const cucañaModules = import.meta.glob(
  "@/assets/imagenes/fotos/pruebas/Cucaña/*.webp",
  { eager: true }
);
const cuerdasModules = import.meta.glob(
  "@/assets/imagenes/fotos/pruebas/Cuerdas/*.webp",
  { eager: true }
);
const garroteModules = import.meta.glob(
  "@/assets/imagenes/fotos/pruebas/Garrote/*.webp",
  { eager: true }
);
const adoquinModules = import.meta.glob(
  "@/assets/imagenes/fotos/pruebas/Lanzamiento de adoquin/*.webp",
  { eager: true }
);
const mizosModules = import.meta.glob(
  "@/assets/imagenes/fotos/pruebas/Mizos/*.webp",
  { eager: true }
);
const piolasModules = import.meta.glob(
  "@/assets/imagenes/fotos/pruebas/Piolas/*.webp",
  { eager: true }
);
const rainasModules = import.meta.glob(
  "@/assets/imagenes/fotos/pruebas/Silliña da raiña/*.webp",
  { eager: true }
);
const zancosModules = import.meta.glob(
  "@/assets/imagenes/fotos/pruebas/Zancos/*.webp",
  { eager: true }
);

// Convierte los módulos en arrays de rutas de imágenes
const lazoImages = Object.values(lazoModules).map((img) => img.default);
const carreraSacosImages = Object.values(carreraSacosModules).map(
  (img) => img.default
);
const carretillaImages = Object.values(carretillaModules).map(
  (img) => img.default
);
const cintasllaImages = Object.values(cintasModules).map((img) => img.default);
const combaImages = Object.values(combaModules).map((img) => img.default);
const cucañaImages = Object.values(cucañaModules).map((img) => img.default);
const cuerdasImages = Object.values(cuerdasModules).map((img) => img.default);
const garroteImages = Object.values(garroteModules).map((img) => img.default);
const adoquinImages = Object.values(adoquinModules).map((img) => img.default);
const mizosImages = Object.values(mizosModules).map((img) => img.default);
const piolasImages = Object.values(piolasModules).map((img) => img.default);
const rainasImages = Object.values(rainasModules).map((img) => img.default);
const zancosImages = Object.values(zancosModules).map((img) => img.default);

const sports = ref([
  {
    title: "Carrera de Lazos",
    images: lazoImages,
  },
  {
    title: "Carrera de Sacos",
    images: carreraSacosImages,
  },
  {
    title: "Carretilla",
    images: carretillaImages,
  },
  {
    title: "Cintas",
    images: cintasllaImages,
  },
  {
    title: "Comba",
    images: combaImages,
  },
  {
    title: "Cucaña",
    images: cucañaImages,
  },
  {
    title: "Cuerdas",
    images: cuerdasImages,
  },
  {
    title: "Garrote",
    images: garroteImages,
  },
  {
    title: "Lanzamiento de adoquin",
    images: adoquinImages,
  },
  {
    title: "Mizos",
    images: mizosImages,
  },
  {
    title: "Piolas",
    images: piolasImages,
  },
  {
    title: "Silliña da raiña",
    images: rainasImages,
  },
  {
    title: "Zancos",
    images: zancosImages,
  },
]);

const searchQuery = ref("");
const selectedCategory = ref("");

onMounted(() => {
  if (route.query.prueba) {
    selectedCategory.value = decodeURIComponent(route.query.prueba);
  }
});

const filteredSports = computed(() =>
  sports.value.filter(
    (category) =>
      category.title.toLowerCase().includes(searchQuery.value.toLowerCase()) &&
      (selectedCategory.value === "" ||
        category.title.toLowerCase() === selectedCategory.value.toLowerCase())
  )
);
</script>

<style scoped>
.input-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
  margin-top: 5rem;
}

.gallery {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 20px;
}
.gallery-container {
  max-width: 1000px;
  margin: auto;
  padding: 20px;
  text-align: center;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
}
.title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #222;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.gallery-item {
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}
.search-input,
.category-select {
  width: 100%;
  max-width: 300px;
  padding: 12px;
  border: 2px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  background: #fff;
  transition: border-color 0.3s ease-in-out;
}
.search-input:focus,
.category-select:focus {
  border-color: #007bff;
  outline: none;
}
.category-title {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #333;
  text-transform: capitalize;
}
.image-slider {
  width: 100%;
  max-width: 700px;
  margin: auto;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15);
}
.sport-image {
  width: 100%;
  height: 800px;
  border-radius: 10px;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
}
.sport-image:hover {
  transform: scale(1.05);
}

.back-to-home-btn {
  padding: 10px 20px;
  margin-bottom: 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.back-to-home-btn:hover {
  background-color: #0056b3;
}
</style>
