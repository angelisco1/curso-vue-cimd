<template>
  <div>
    <p>Cuenta: {{cuenta}}</p>
    <button type="button" @click="cambiarCuenta">Incrementar</button>


    <button type="button" @click="emiteResetForm">Resetear formulario</button>


  </div>
</template>

<script>
import EventBus from '@/helpers/event-bus'

export default {
  props: ['cuenta'],
  emits: ['incrementaCuenta'],
  methods: {
    cambiarCuenta() {
      // '@incrementaCuenta'
      // $event -> this.cuenta + 1
      this.$emit('incrementaCuenta', this.cuenta + 1)
    },
    emiteResetForm() {
      EventBus.$emit('resetForm')
    }
  }
}
</script>

<style>

</style>