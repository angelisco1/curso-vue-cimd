<template>
  <div>
    <h2>Lista de vendehumos</h2>

    <div v-for="vh in vendehumos" :key="vh.id">
      <p>{{vh.nombre}}</p>
    </div>

  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios'

const vendehumos = ref([])

onMounted(async () => {
  const resp = await axios.get('http://localhost:3000/vendehumos')
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