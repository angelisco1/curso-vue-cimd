<template>
  <div class="sugus" :style="{backgroundColor: color}">
    <p>{{sabor}}</p>
  </div>
</template>

<script>
export default {
  // props: ['color', 'sabor']
  props: {
    color: {
      type: String,
      // required: true,
      default: 'yellow',
      validator: (color) => {
        if (['red', 'yellow', 'orange', 'blue'].includes(color)) {
          return true
        }
        return false
      }
    },
    sabor: String,
  }
  // data() {
  //   return {
  //     sabor: 'limón',
  //     color: 'yellow'
  //   }
  // }
}
</script>

<style>
.sugus {
  border: 1px solid black;
  width: 100px;
  height: 100px;
  border-radius: 5px;
  color: white;
  position: relative;
  margin: 10px;
  overflow: hidden;
}

.sugus > p {
  text-align: center;
  transform-origin: center center;
  transform: rotate(-45deg);
  position: absolute;
  top: 25px;
  left: 30px;
  text-shadow: 60px 0px 0px, -60px 0px 0px, -25px 30px 0px, 25px -30px 0px, 30px 30px 0px, -30px -30px 0px, 0px 60px 0px, 0px -60px 0px;
}
</style>