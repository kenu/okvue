<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/credit">Credit</router-link></li>
    </ul>
    <transition name="fade" mode="out-in" v-if="isTrans">
      <router-view></router-view>
    </transition>
    <transition v-else>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      isTrans: true
    }
  },
  beforeUpdate() {
    this.isTrans = (location.hash === '#/')
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .12s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
