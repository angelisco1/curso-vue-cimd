<template>
  <div>
    <p>Cuenta: {{cuenta}}</p>
    <button type="button" @click="incrementar">Incrementar</button>
  </div>
</template>

<script>
export default {
  props: ['cuenta'],
  emits: ['incrementaCuenta'],
  methods: {
    incrementar() {
      // '@incrementaCuenta'
      // $event -> this.cuenta + 1
      this.$emit('incrementaCuenta', this.cuenta + 1)
    }
  }
}
</script>

<style>

</style>