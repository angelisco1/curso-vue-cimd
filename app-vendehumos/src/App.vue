<template>
  <div>
    <h1>App vendehumos</h1>
    <Header></Header>

    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>

<style>

</style>