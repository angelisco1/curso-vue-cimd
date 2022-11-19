<template>
  <div>
    <h1>Curso de Vue</h1>
    <!-- <componente-local></componente-local>
      <cmp-global></cmp-global> -->
    <!-- <tema02-datos-y-metodos></tema02-datos-y-metodos> -->
    <!-- <tema03-data-binding></tema03-data-binding> -->
    <!-- <tema04-propiedades></tema04-propiedades> -->
    <!-- <tema05-computed-y-watch></tema05-computed-y-watch> -->
    <!-- <tema-06-directivas></tema-06-directivas> -->
    <!-- <tema-07-comunicacion-entre-componentes></tema-07-comunicacion-entre-componentes> -->
    <!-- <tema-08-slots-y-template></tema-08-slots-y-template> -->
    <!-- <tema-09-formularios-y-modificadores></tema-09-formularios-y-modificadores> -->
    <tema-10-referencias></tema-10-referencias>
  </div>
</template>

<script>
import ComponenteLocal from '@/components/ComponenteLocal.vue'
import Tema02DatosYMetodos from '@/components/tema-02-datos-y-metodos/Tema02DatosYMetodos.vue'
import Tema03DataBinding from '@/components/tema-03-data-binding/Tema03DataBinding.vue'
import Tema04Propiedades from '@/components/tema-04-propiedades/Tema04Propiedades.vue'
import Tema05ComputedYWatch from './components/tema-05-computed-y-watch/Tema05ComputedYWatch.vue'
import Tema06Directivas from './components/tema-06-directivas/Tema06Directivas.vue'
import Tema07ComunicacionEntreComponentes from './components/tema-07-comunicacion-entre-componentes/Tema07ComunicacionEntreComponentes.vue'
import Tema08SlotsYTemplate from './components/tema-08-slots-y-template/Tema08SlotsYTemplate.vue'
import Tema09FormulariosYModificadores from './components/tema-09-formularios-y-modificadores/Tema09FormulariosYModificadores.vue'
import Tema10Referencias from './components/tema-10-referencias/Tema10Referencias.vue'

export default {
  name: 'App',
  components: {
    // 'componente-local': ComponenteLocal
    ComponenteLocal,
    Tema02DatosYMetodos,
    Tema03DataBinding,
    Tema04Propiedades,
    Tema05ComputedYWatch,
    Tema06Directivas,
    Tema07ComunicacionEntreComponentes,
    Tema08SlotsYTemplate,
    Tema09FormulariosYModificadores,
    Tema10Referencias,
  }
}
</script>