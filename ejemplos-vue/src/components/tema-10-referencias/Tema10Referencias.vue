<template>
  <div>
    <h2>Referencias</h2>
    <video src="@/assets/video.mp4" width="200" ref="videoRef"></video>
    <button type="button" @click="play">Play</button>
    <button type="button" @click="pause">Pause</button>
    <input type="range" min="0" max="1" step="0.01" @input="changeVolumen">
    <button type="button" @click="setFullScreen">Full screen</button>

    <input type="text" ref="nombreRef" @input="muestraNombre">
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    play(event) {
      this.$refs.videoRef.play()
    },
    pause(event) {
      this.$refs.videoRef.pause()
    },
    changeVolumen(event) {
      this.$refs.videoRef.volume = Number(event.target.value)
    },
    setFullScreen() {
      this.$refs.videoRef.requestFullscreen()
    },
    muestraNombre() {
      console.log(this.$refs.nombreRef.value)
    }
  }
}
</script>

<style>

</style>