<template>
  <p style="color:red">{{ $t('language') }}</p>
</template>

<script>
export default {
  name: 'HelloI18n',
  mounted(){
    console.log(this.$i18n.locale )
  }
}
</script>
