<!-- SimpleModalInfo.vue -->
<template>
  <div class="modal-container">
    <div class="modal-header">
      <h3>{{ modalTitle }}</h3>
    </div>
    <div class="modal-body">
      <p v-if="modalContent">{{ modalContent }}</p>
    </div>
    <div class="modal-footer">
      <button class="btn btn-primary" @click="$emit('back')">Cerrar</button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  modalTitle: String,
  modalContent: String
});
</script>

<style scoped>
.modal-container {
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
  text-align: center;
}
.modal-header h3 {
  margin-bottom: 10px;
}
.modal-footer {
  margin-top: 20px;
}
</style>