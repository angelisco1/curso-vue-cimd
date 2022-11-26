<template>
  <div>
    <h2>Lista de vendehumos</h2>

    <div v-for="vh in vendehumos" :key="vh.id">
      <p>{{vh.nombre}}</p>
      <router-link :to="{
        name: 'info-vendehumo',
        params: {vendehumoId: vh.id}
      }">Ver +info</router-link>

      <router-link :to="{
        name: 'editar-vendehumo',
        params: {vendehumoId: vh.id}
      }">Editar</router-link>
    </div>

  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import VendehumosService from '@/services/vendehumos.service'

const vendehumos = ref([])

onMounted(async () => {
  const resp = await VendehumosService.findAll()
  vendehumos.value = resp.data
})
</script>

<!-- <script>
import { onMounted, ref } from 'vue';
import axios from 'axios'

export default {
  setup() {
    const vendehumos = ref([])

    onMounted(() => {
      const resp = await axios.get('http://localhost:3000/vendehumos')
      vendehumos.value = resp.data
    })

    return {
      vendehumos
    }
  }
}
</script> -->

<style>

</style>