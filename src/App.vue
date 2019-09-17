<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <p>
        If iView is successfully added to this project, you'll see an
        <code v-text="'<Button>'"></code>
        below
      </p>
      <Button type="primary">Button</Button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <HelloI18n />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HelloI18n from './components/HelloI18n.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    HelloI18n
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
