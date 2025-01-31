<script setup>
import { useRoute } from "vue-router";
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import Olimpiadas from "./components/Olimpiadas.vue";
import Evidence from "./components/Evidence.vue";
import Cta from "./components/Cta.vue";
import Blog from "./components/Blog.vue";
import Contact from "./components/Contact.vue";
import Pie from "./components/Pie.vue";
import BackTop from "./components/BackTop.vue";

const route = useRoute();
</script>

<template>
  <!-- Solo muestra el Header si NO está en /galeria -->
  <Header v-if="route.path !== '/galeria'" />

  <!-- Solo muestra la galería si está en /galeria -->
  <router-view v-if="route.path === '/galeria'" />

  <!-- Si NO está en /galeria, muestra el resto de la web -->
  <template v-else>
    <Hero />
    <Olimpiadas />
    <Evidence />
    <Cta />
    <Blog />
    <Contact />
    <Pie />
    <BackTop />
  </template>
</template>
