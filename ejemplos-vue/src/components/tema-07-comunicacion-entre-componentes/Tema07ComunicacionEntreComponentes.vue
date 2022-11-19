<template>
  <div>
    <h2>Comunicación entre componentes</h2>

    <cmp-hijo
      :cuenta="cuenta"
      @incrementaCuenta="incrementar"></cmp-hijo>

    <cv-interactivo></cv-interactivo>
  </div>
</template>

<script>
import CmpHijo from './CmpHijo.vue'
import CvInteractivo from './CvInteractivo.vue'

export default {
  components: { CmpHijo, CvInteractivo },
  data() {
    return {
      cuenta: 0
    }
  },
  methods: {
    incrementar(event) {
      this.cuenta = event
    }
  }
}
</script>

<style>

</style>