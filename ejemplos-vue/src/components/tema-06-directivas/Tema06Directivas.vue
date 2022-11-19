<template>
  <div>
    <h2>Directivas</h2>
    <p v-text="texto"></p>
    <div v-html="html"></div>

    <p v-if="isAuth">Bienvenido a nuestra aplicación</p>
    <p v-else>Logueaté</p>

    <sugus
      v-for="(sugus, index) in listaSugus"
      :key="index"
      :color="sugus.color"
      :sabor="sugus.sabor"
    ></sugus>

    <p
      v-for="(value, key) in serie"
      :key="value"
    >{{key}}: {{value}}</p>

    <input type="color" v-model="blue">
    <input type="text" v-focus2>

    <p v-colorear="blue">Este párrafo tiene el fondo azul</p>
    <p v-colorear="'orange'">Este párrafo tiene el fondo naranja</p>

  </div>
</template>

<script>
import Sugus from '../tema-04-propiedades/Sugus.vue'
export default {
  components: { Sugus },
  data() {
    return {
      listaSugus: [
        { color: 'yellow', sabor: 'limón' },
        { color: 'red', sabor: 'fresa' },
      ],
      serie: {
        titulo: 'The walking dead',
        temporadas: 11,
        finalizada: false
      },
      texto: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime magnam, asperiores iure beatae recusandae doloremque reprehenderit ratione vitae quisquam unde ipsa quam repellat vel ab. Illum officiis ipsam ut veritatis.',
      html: '<button onclick="alert(\'hola mundo\')">Hola</button>',
      isAuth: true,
      blue: '#0000ff',
    }
  },
  directives: {
    colorear(el, binding) {
        console.log({binding})
        el.addEventListener('mouseover', () => {
          el.style.backgroundColor = binding.value
        })

        el.addEventListener('mouseout', () => {
          el.style.backgroundColor = null
        })
      },
    // colorear: {
    //   mounted(el, binding) {
    //     console.log({binding})
    //     el.addEventListener('mouseover', () => {
    //       el.style.backgroundColor = binding.value
    //     })

    //     el.addEventListener('mouseout', () => {
    //       el.style.backgroundColor = null
    //     })
    //   },
    //   updated(el, binding) {
    //     console.log({binding})
    //     el.addEventListener('mouseover', () => {
    //       el.style.backgroundColor = binding.value
    //     })

    //     el.addEventListener('mouseout', () => {
    //       el.style.backgroundColor = null
    //     })
    //   }
    // },
    focus: {
      mounted(el) {
        console.log({el})
        el.focus()
      }
    }
  }
}
</script>

<style>

</style>