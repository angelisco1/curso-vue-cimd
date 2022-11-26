<template>
  <teleport to="#modal">
    <div class="backdrop">
      <div class="modal">
        <button type="button" @click="cerrar">X</button>
        <hr>
        <slot />
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['cerrar'])

const cerrar = () => {
  emit('cerrar')
}

</script>

<style scoped>
.backdrop {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  position: relative;
  width: 70vw;
  height: 60vh;
  background-color: white;
}
</style>