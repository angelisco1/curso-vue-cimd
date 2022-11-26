<template>
  <div>
    <h2>Editar vendehumo</h2>

    <form @submit.prevent="guardar">
      <div>
        <label for="nombre">Nombre:</label>
        <input type="text" v-model="vendehumoEditar.nombre">
      </div>

      <div>
        <label for="categoria">Categoría:</label>
        <select v-model="vendehumoEditar.categoria">
          <option value="trading">Trading</option>
          <option value="crypto">Crypto</option>
          <option value="horoscopo">Horoscopo</option>
          <option value="dropshipping">Dropshipping</option>
        </select>
      </div>

      <button type="submit">Editar</button>
    </form>
  </div>
</template>

<script setup>
import { onMounted, reactive } from '@vue/runtime-core'
import { useRoute, useRouter } from 'vue-router'
import VendehumosService from '@/services/vendehumos.service'

const router = useRouter()
const route = useRoute()
// console.log({route})
const vendehumoId = route.params.vendehumoId
const vendehumoEditar = reactive({
  nombre: '',
  id: '',
  categoria: '',
  votos: 0
})

onMounted(async () => {
  const resp = await VendehumosService.findById(vendehumoId)
  const vendehumo = resp.data
  vendehumoEditar.nombre = vendehumo.nombre
  vendehumoEditar.categoria = vendehumo.categoria
  vendehumoEditar.votos = vendehumo.votos
  vendehumoEditar.id = vendehumo.id
})

const guardar = async () => {
  await VendehumosService.update(vendehumoEditar)
  router.push({
    name: 'info-vendehumo',
    params: {vendehumoId: vendehumoId}
  })
}

</script>

<style>

</style>