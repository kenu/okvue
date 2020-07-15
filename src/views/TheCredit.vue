<template>
  <div>
    <h1>Credit</h1>
    <article>
      허광남 : <a href="https://okdevtv.com">https://okdevtv.com/</a>
    </article>
    <ul>
      <li><router-link to="/">Home</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    console.log('created')
  },
  mounted() {
    console.log('mounted')
  },
  destroyed() {
    console.log('destroyed')
  }
}
</script>

<style>

</style>
