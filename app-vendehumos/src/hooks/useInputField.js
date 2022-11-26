import { ref, watch } from 'vue'


const Validations = {
  esCategoriaValida: (value, categoriasValidas) => {
    if (!categoriasValidas.includes(value)) {
      return { name: 'esCategoriaValida', msg: `La categoria ${value} no es una de las siguientes: ${categoriasValidas.join(', ')}` }
    }
    return null
  },
  minLength: (value, length) => {
    if (value.length < length) {
      return { name: 'minLength', msg: `La longitud mínima tiene que ser de ${length} (${value.length}/${length})` }
    }
    return null
  },
  withMayus: (value) => {
    if (value.toLowerCase() === value) {
      return { name: 'withMayus', msg: 'Este campo tiene que tener al menos una letra mayúscula' }
    }
    return null
  }
}

// Object.entries({a: 1, b: 2, c: 3}) => [ ['a', 1], ['b', 2], ['c', 3] ]

export const useInputField = (initialValue, validations = {}) => {

  const inputValue = ref(initialValue)
  const erroresInput = ref([])

  watch(inputValue, (newValue) => {
    const errores = []

    Object.entries(validations).forEach(entry => {
      const [validationName, optionalData] = entry
      const error = Validations[validationName](inputValue.value, optionalData)
      if (error) {
        errores.push(error)
      }
    })

    erroresInput.value = errores
  })

  return [
    inputValue,
    erroresInput,
  ]
}