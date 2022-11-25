<template>
  <div>
    <h2>Composition API</h2>

    <p>Cuenta: {{cuenta}}</p>
    <button type="button" @click="incrementar">+1</button>

    <p>{{nombreCompleto}}</p>
    <input type="text" v-model="nombreCompleto">

    <input type="text" v-model="persona.nombre">
    <input type="text" v-model="persona.apellido">

    <hr>

    <input type="text" v-model="cocktailName">
    <ul>
      <li v-for="cocktail in cocktails" :key="cocktail.idDrink" @click="setId(cocktail.idDrink)">{{cocktail.strDrink}}</li>
    </ul>

    <img v-if="cocktailSelected" :src="cocktailSelected.strDrinkThumb" :alt="cocktailSelected.strDrink" width="200">

  </div>
</template>

<script>
import { ref, reactive, computed, onMounted, watch } from 'vue'

export default {
  setup() {
    const cuenta = ref(0) // .value
    const persona = reactive({nombre: 'Charly', apellido: 'Falco'})

    const cocktailName = ref('')
    const cocktails = ref([])
    const cocktailSelected = ref(null)

    const setCocktails = async (name) => {
      const resp = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
      const datos = await resp.json()
      cocktails.value = datos.drinks
    }

    const setId = async (id) => {
      const resp = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      const datos = await resp.json()
      cocktailSelected.value = datos.drinks[0]
    }

    onMounted(() => {
      setCocktails(cocktailName.value)
    })

    watch(cocktailName, (newName) => {
      setCocktails(newName)
    })

    // const nombreCompleto = computed(() => {
    //   return `${persona.nombre} ${persona.apellido}`
    // })
    const nombreCompleto = computed({
      get() {
        return `${persona.nombre} ${persona.apellido}`
      },
      set(val) {
        const segments = val.split(' ')
        persona.nombre = segments[0]
        if (segments.length > 1) {
          const [, ...apellidos] = segments
          persona.apellido = apellidos.join(' ')
        }
      },
    })

    const incrementar = () => {
      cuenta.value++
    }

    return {
      cuenta,
      persona,
      nombreCompleto,
      cocktails,
      cocktailName,
      incrementar,
      setId,
      cocktailSelected,
    }
  }
}
</script>

<style>

</style>