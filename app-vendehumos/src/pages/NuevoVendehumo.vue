<template>
  <div>
    <h2>Añade un vendehumo</h2>

    <form @submit.prevent="guardar">
      <div>
        <label for="nombre">Nombre:</label>
        <input type="text" v-model="nombre">
        <ul v-if="erroresNombre.length > 0">
          <li v-for="error in erroresNombre" :key="error.name">{{error.msg}}</li>
        </ul>
      </div>

      <div>
        <label for="categoria">Categoría:</label>
        <select v-model="categoria">
          <option value="select">Select an option</option>
          <option value="trading">Trading</option>
          <option value="crypto">Crypto</option>
          <option value="horoscopo">Horoscopo</option>
          <option value="dropshipping">Dropshipping</option>
        </select>
        <component :is="categoriaSeleccionada"></component>

        <ul v-if="erroresCategoria.length > 0">
          <li v-for="error in erroresCategoria" :key="error.name">{{error.msg}}</li>
        </ul>
      </div>

      <button type="submit">Añadir</button>
    </form>

    <Suspense>
      <Modal v-if="mostrarModal" @cerrar="cerrarModal">
        <p>Vendehumo creado</p>
      </Modal>

      <template #fallback>
        <spinner></spinner>
      </template>
    </Suspense>

  </div>
</template>

<script setup>
import { ref, computed, defineAsyncComponent } from 'vue';
import { useInputField } from '@/hooks/useInputField';
import { useRouter } from 'vue-router';
import VendehumosService from '@/services/vendehumos.service'
import Trading from '@/components/Trading.vue'
import Crypto from '@/components/Crypto.vue'
import Dropshipping from '@/components/Dropshipping.vue'
import Horoscopo from '@/components/Horoscopo.vue'
import Select from '@/components/Select.vue'
import Spinner from '@/components/Spinner.vue'
// import Modal from '@/components/Modal.vue'

const Modal = defineAsyncComponent(() => import('@/components/Modal.vue'))

const router = useRouter()

const mostrarModal = ref(false)
const abrirModal = () => {
  mostrarModal.value = true
}
const cerrarModal = () => {
  mostrarModal.value = false
  router.push({name: 'vendehumos'})
}

// const nombre = ref('')
// const categoria = ref('')
const [nombre, erroresNombre] = useInputField('aaaa', { minLength: 6, withMayus: true })
const [categoria, erroresCategoria] = useInputField('select', { esCategoriaValida: ['trading', 'crypto', 'horoscopo', 'dropshipping'] })

const votos = ref(0)
const id = ref(Math.random().toString().slice(2))

const categoriaSeleccionada = computed(() => {
  switch (categoria.value) {
    case 'select':
      return Select;
    case 'dropshipping':
      return Dropshipping;
    case 'crypto':
      return Crypto;
    case 'trading':
      return Trading;
    case 'horoscopo':
      return Horoscopo;
  }
})

// const erroresNombre = ref([])
// const erroresCategoria = ref([])

// watch(nombre, () => {
//   // valides el nombre
// })

// watch(categoria, () => {
//   // valides el nombre
// })

// const nuevoVendehumo = reactive({
//   nombre: '',
//   categoria: '',
//   votos: 0,
//   id: Math.random().toString().slice(2)
// })

const guardar = async () => {
  // console.log(nuevoVendehumo)
  // const resp = await VendehumosService.create(nuevoVendehumo)
  const nuevoVendehumo = {
    nombre: nombre.value,
    categoria: categoria.value,
    id: id.value,
    votos: votos.value
  }
  console.log(nuevoVendehumo)
  const resp = await VendehumosService.create(nuevoVendehumo)
  abrirModal()
}

</script>

<style>

</style>