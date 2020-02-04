<template>
  <div id="app">
      <Header></Header>
      <BrilliantThing
      />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header'
import BrilliantThing from './components/BrilliantThing'

export default {
  name: 'app',
  components: {
    Header,
    BrilliantThing
  }
}
</script>
<style>
@import url('http://fonts.googleapis.com/css?family=Just+Another+Hand');
@import url('https://fonts.googleapis.com/css?family=Gloria+Hallelujah&display=swap');

#app {
  /* font-family: 'Just Another Hand', Helvetica, sans-serif; */
  font-family: 'Gloria Hallelujah', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #41403E;
  height: 100%;
}
html {
  height: 100%;
  background-image: url('./assets/notebook-wallpaper.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}

</style>
