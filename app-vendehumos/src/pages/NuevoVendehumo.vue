<template>
  <div>
    <h2>Añade un vendehumo</h2>

    <form @submit.prevent="guardar">
      <div>
        <label for="nombre">Nombre:</label>
        <input type="text" v-model="nuevoVendehumo.nombre">
      </div>

      <div>
        <label for="categoria">Categoría:</label>
        <select v-model="nuevoVendehumo.categoria">
          <option value="trading">Trading</option>
          <option value="crypto">Crypto</option>
          <option value="horoscopo">Horoscopo</option>
          <option value="dropshipping">Dropshipping</option>
        </select>
      </div>

      <button type="submit">Añadir</button>
    </form>

  </div>
</template>

<script setup>
import axios from 'axios';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const nuevoVendehumo = reactive({
  nombre: '',
  categoria: '',
  votos: 0,
  id: Math.random().toString().slice(2)
})

const guardar = async () => {
  console.log(nuevoVendehumo)
  const resp = await axios.post('http://localhost:3000/vendehumos', nuevoVendehumo)
  console.log(resp)
  router.push('/')
}

</script>

<style>

</style>