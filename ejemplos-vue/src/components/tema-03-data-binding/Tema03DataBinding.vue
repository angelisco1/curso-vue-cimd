<template>
  <div>
    <h2>Data Binding</h2>

    <h3>String Interpolation</h3>
    <p>El nombre es: {{nombre}}</p>
    <p>El nombre es: {{nombre ? nombre : '...'}}</p>

    <h3>Property Binding</h3>
    <input type="text" v-bind:value="nombre">
    <input type="text" :value="nombre" @input="cambiarNombre">
    <!-- <input type="text" :value="nombre" @keyup="cambiarNombre"> -->
    <!-- <input type="text" :value="nombre" @change="cambiarNombre"> -->
    <!-- <input type="text" :value="nombre" @keydown="cambiarNombre"> -->
    <!-- <input type="text" :value="nombre" @keypress="cambiarNombre"> -->

    <h3>Event Binding</h3>
    <button type="button" v-on:click="resetNombre">Resetear nombre</button>
    <button type="button" @click="cambiarNombreA('Sara', $event)">Cambiar nombre a Sara</button>

    <h3>Two Way Binding</h3>
    <input type="text" v-model="nombre">

  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: 'Charly'
    }
  },
  methods: {
    resetNombre(event) {
      console.log(event)
      this.nombre = ''
    },
    cambiarNombre(e) {
      this.nombre = e.target.value
    },
    cambiarNombreA(nuevoNombre, event) {
      console.log(event)
      this.nombre = nuevoNombre
    }
  }
}
</script>