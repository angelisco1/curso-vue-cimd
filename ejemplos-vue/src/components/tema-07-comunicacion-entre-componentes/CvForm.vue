<template>
  <div>
    <h4>Cv Form</h4>
    <div>
      <label for="nombre">Nombre:</label>
      <input type="text" id="nombre" v-model="nombreForm">
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" :value="email" @input="emitirCambioEmail">
    </div>
  </div>
</template>

<script>
export default {
  props: ['nombre', 'email'],
  emits: ['nombreCambiado', 'emailCambiado'],
  computed: {
    nombreForm: {
      get() {
        return this.nombre
      },
      set(val) {
        this.$emit('nombreCambiado', val)
      }
    }
  },
  methods: {
    emitirCambioEmail(event) {
      this.$emit('emailCambiado', event.target.value)
    },
  }
}
</script>

<style>

</style>