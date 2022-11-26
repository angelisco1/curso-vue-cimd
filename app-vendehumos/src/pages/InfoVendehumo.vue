<template>
<div>
  <h2>Info del vendehumo {{vendehumoId}}</h2>
</div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const vendehumoId = route.params.vendehumoId

</script>

<style>

</style>