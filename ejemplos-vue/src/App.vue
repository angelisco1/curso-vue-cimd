<template>
  <div>
    <h1>Curso de Vue</h1>
    <!-- <componente-local></componente-local>
      <cmp-global></cmp-global> -->
    <!-- <tema02-datos-y-metodos></tema02-datos-y-metodos> -->
    <!-- <tema03-data-binding></tema03-data-binding> -->
    <tema04-propiedades></tema04-propiedades>
  </div>
</template>

<script>
import ComponenteLocal from '@/components/ComponenteLocal.vue'
import Tema02DatosYMetodos from '@/components/tema-02-datos-y-metodos/Tema02DatosYMetodos.vue'
import Tema03DataBinding from '@/components/tema-03-data-binding/Tema03DataBinding.vue'
import Tema04Propiedades from '@/components/tema-04-propiedades/Tema04Propiedades.vue'

export default {
  name: 'App',
  components: {
    // 'componente-local': ComponenteLocal
    ComponenteLocal,
    Tema02DatosYMetodos,
    Tema03DataBinding,
    Tema04Propiedades,
  }
}
</script>