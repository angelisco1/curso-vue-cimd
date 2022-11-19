<template>
  <div>
    <h2>Comunicación entre componentes</h2>

    <cmp-hijo
      :cuenta="cuenta"
      @incrementaCuenta="incrementar"></cmp-hijo>
  </div>
</template>

<script>
import CmpHijo from './CmpHijo.vue'

export default {
  components: { CmpHijo },
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