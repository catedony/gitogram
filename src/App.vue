<template>
  <Feeds />
</template>

<script>
import Feeds from './pages/feeds/Feeds.vue'

export default {
  name: 'App',
  components: {
    Feeds
  }
}
</script>

<style lang="scss">
html,
body {
  height: 100%;
}
body {
  margin: 0;
}
p {
  margin: 0;
}
ul {
  padding: 0;
  margin: 0;
  list-style: none;
  }
#app {
  height: 100px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
