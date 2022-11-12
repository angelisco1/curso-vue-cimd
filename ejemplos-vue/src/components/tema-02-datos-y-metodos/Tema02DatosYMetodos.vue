<template>
  <p>Me llamo {{nombre}} {{apellido}}</p>
</template>

<script>
export default {
  data() {
    return {
      nombre: 'Charly',
      apellido: 'Falco'
    }
  },
  methods: {
    saludar() {
      alert('Hola ' + this.nombre)
    }
  },
  created() {
    this.saludar()
  }
}
</script>