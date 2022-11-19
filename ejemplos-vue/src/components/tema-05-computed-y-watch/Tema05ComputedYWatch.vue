<template>
  <div>
    <h2>Computed properties</h2>
    <p>{{apellido}}, {{nombre}}</p>
    <p>{{nombreCompleto}}</p>
    <p>{{nombreCompletoUppercase}}</p>
    <p>{{getNombreCompleto()}}</p>

    <input type="text" v-model="nombre">
    <p>Error: {{error}}</p>

    <input type="text" v-model="apellido">
    <input type="number" v-model="edad">

    <!-- <input type="text" @change="nombreCompleto=$event.target.value"> -->
    <input type="text" v-model="nombreCompleto">
    <h2>Watch</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: 'Charly',
      apellido: 'Falco',
      edad: 38,
      error: null,
    }
  },
  computed: {
    // nombreCompleto() {
    //   console.log('[COMPUTED]')
    //   return `${this.nombre} ${this.apellido}`
    // },
    nombreCompleto: {
      get() {
        return `${this.nombre} ${this.apellido}`
      },
      set(val) {
        const [n, ...apellidos] = val.split(' ')
        this.nombre = n
        this.apellido = apellidos.join(' ')
      }
    },
    nombreCompletoUppercase() {
      return this.nombreCompleto.toUpperCase()
    },
  },
  methods: {
    getNombreCompleto() {
      console.log('[METHODS]')
      return `${this.nombre} ${this.apellido}`
    }
  },
  watch: {
    nombre(currentVal, oldVal) {
      // POST /check-valid-name
      setTimeout(() => {
        const nombresValidos = ['robb', 'arya', 'bran', 'rickon', 'sansa']
        this.error = null
        if (!nombresValidos.includes(currentVal.toLowerCase())) {
          this.error = `El nombre ${currentVal} no es valido...`
        }
      }, 1500)
    }
  }
}
</script>

<style>

</style>