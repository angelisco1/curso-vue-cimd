<template>
  <div class="acordeon">
    <div class="acordeon-header" @click="toggleCerrado">
      <!-- <h3>{{titulo}}</h3> -->
      <slot name="header">
        <p>Título</p>
      </slot>
    </div>
    <div class="acordeon-content" :class="{cerrado: estaCerrado}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['titulo'],
  data() {
    return {
      estaCerrado: false
    }
  },
  methods: {
    toggleCerrado() {
      this.estaCerrado = !this.estaCerrado
    }
  }
}
</script>

<style>
.acordeon {
  border: 1px solid black;
  border-radius: 10px;
}

.acordeon-header {
  /* font-weight: bolder; */
  text-align: center;
  border-bottom: 1px solid black;
}

.acordeon-content {
  padding: 10px;
  overflow: hidden;
}

.acordeon-content.cerrado {
  height: 0;
  padding: 1px;
}
</style>