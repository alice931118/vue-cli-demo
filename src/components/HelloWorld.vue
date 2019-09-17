<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p style="color:red">{{ $t('language') }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
