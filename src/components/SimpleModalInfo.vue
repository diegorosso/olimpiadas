<!-- src/components/SimpleModalInfo.vue -->
<template>
    <div class="simple-modal-info">
      <h2>{{ title }}</h2>
      <p>{{ message }}</p>
      <button @click="$emit('close')">Cerrar</button>
    </div>
  </template>
  
  <script setup>
  defineProps({
    title: String,
    message: String
  })
  </script>
  
  <style scoped>
  .simple-modal-info {
    padding: 20px;
    background: white;
    border-radius: 8px;
    text-align: center;
  }
  </style>
  