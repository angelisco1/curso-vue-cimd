<template>
  <div>
    <h2>Slots y template</h2>

    <acordeon>
      <template v-slot:header>
        <h3>Lorem ipsum</h3>
      </template>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut illo corporis consequatur debitis necessitatibus at, nobis enim facilis quibusdam nesciunt. Magni minus quasi optio, laudantium blanditiis eum culpa quam! Tempora.</p>
    </acordeon>

    <acordeon>
      <template #header>
        <h4>Lista de la compra</h4>
      </template>
      <ul>
        <li>Tomate</li>
        <li>Patata</li>
        <li>Pollo</li>
      </ul>
    </acordeon>

    <acordeon>
      <!-- <template #header>
        <p>Logo</p>
      </template> -->
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png" width="200" alt="Logo de Vue">
    </acordeon>

    <template v-if="mostrarParrafos">
      <p>1</p>
      <p>2</p>
    </template>

  </div>
</template>

<script>
import Acordeon from "./Acordeon.vue"

export default {
  components: { Acordeon },
  data() {
    return {
      mostrarParrafos: false
    }
  }
}
</script>

<style>

</style>