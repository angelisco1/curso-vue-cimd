<template>
  <div>
    <h2>Propiedades</h2>
    <sugus sabor="limón"></sugus>
    <!-- <sugus sabor="fresa" color="black"></sugus> -->
    <sugus color="red" sabor="fresa"></sugus>
    <sugus color="blue" sabor="piña"></sugus>
    <sugus color="orange" sabor="naranja"></sugus>
  </div>
</template>

<script>
import Sugus from './Sugus.vue'

export default {
  components: {
    Sugus
  }
}
</script>

<style>

</style>