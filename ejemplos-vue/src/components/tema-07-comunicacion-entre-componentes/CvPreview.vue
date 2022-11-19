<template>
  <div>
    <h4>CV de {{nombre}}</h4>
    <p>Email: {{email}}</p>
  </div>
</template>

<script>
export default {
  props: ['nombre', 'email']
}
</script>

<style>

</style>