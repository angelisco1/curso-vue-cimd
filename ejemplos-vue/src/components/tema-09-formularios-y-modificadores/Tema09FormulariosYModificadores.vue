<template>
  <div>
    <h2>Formularios y modificadores</h2>

    <form @submit.prevent="signUp">
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" name="email" v-model.trim="email">
      </div>

      <div>
        <label for="edad">Edad</label>
        <input type="number" id="edad" name="edad" v-model="edad">
      </div>

      <div>
        <label for="plan">Plan</label>
        <select name="plan" id="plan" v-model="plan">
          <option value="free">Free</option>
          <option value="premium">Premium</option>
          <option value="super">Super premium</option>
        </select>
      </div>

      <div>
        <label for="temas">Temas de interes:</label>
        <input type="checkbox" id="temas" name="temas" value="tecnologia" v-model="temas">
        <input type="checkbox" id="temas" name="temas" value="ciencia" v-model="temas">
        <input type="checkbox" id="temas" name="temas" value="economia" v-model="temas">
        <input type="checkbox" id="temas" name="temas" value="politica" v-model="temas">
      </div>

      <div>
        <label for="notificaciones">Recibir notificaciones:</label>
        <input type="radio" id="notificaciones" name="notificaciones" :value="true" v-model="notificaciones">
        <input type="radio" id="notificaciones" name="notificaciones" :value="false" v-model="notificaciones">
      </div>

      <button type="submit">Sign up</button>
    </form>

    <input type="text" @keyup.up.down.left.right.enter="moverCaja">

    <div class="caja" :style="position">
    </div>

    <pre>{{JSON.stringify($data, null, 2)}}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      edad: 20,
      plan: '',
      temas: ['ciencia'],
      notificaciones: true,
      top: 0,
      left: 0,
    }
  },
  computed: {
    position() {
      return {
        top: this.top + 'px',
        left: this.left + 'px'
      }
    }
  },
  methods: {
    signUp(event) {
      // event.preventDefault()
      console.log({data: this.$data})
    },
    moverCaja(event) {
      console.log('TECLA PULSADA: ', event.code)
      switch(event.code) {
        case 'ArrowUp':
          this.top -= 5
          break
        case 'ArrowDown':
          this.top += 5
          break
        case 'ArrowLeft':
          this.left -= 5
          break
        case 'ArrowRight':
          this.left += 5
          break
        case 'Enter':
          this.top = 0
          this.left = 0
          break
      }
    }
  }
}
</script>

<style>
.caja {
  height: 50px;
  width: 50px;
  background-color: black;
  position: absolute;
}
</style>