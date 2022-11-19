<template>
  <div>
    <h3>Cv Interactivo</h3>
    <cv-form
      :nombre="nombre"
      :email="email"
      @nombreCambiado="cambiarNombre"
      @emailCambiado="cambiarEmail"
    ></cv-form>
    <cv-preview :nombre="nombre" :email="email"></cv-preview>
  </div>
</template>

<script>
import CvForm from './CvForm.vue'
import CvPreview from './CvPreview.vue'
import EventBus from '@/helpers/event-bus'

export default {
  components: { CvForm, CvPreview },
  data() {
    return {
      nombre: 'aaa',
      email: 'bbb',
    }
  },
  methods: {
    cambiarNombre(event) {
      this.nombre = event
    },
    cambiarEmail(event) {
      this.email = event
    },
    resetDatos() {
      this.nombre = ''
      this.email = ''
    }
  },
  created() {
    EventBus.$on('resetForm', () => {
      this.resetDatos()
    })
    // EventBus.$on('resetForm', this.resetDatos)
  }
}
</script>

<style>

</style>