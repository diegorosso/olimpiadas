<script setup>
import Header from "./components/Header.vue";
</script>

<template>
  <!-- El Header siempre se muestra -->
  <Header />

  <!-- Muestra el contenido según la ruta -->
  <router-view />
</template>