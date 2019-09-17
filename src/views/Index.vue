<template>
  <div class="index-page">
    <Layout>
        <Header>Header</Header>

        <Content>
          <router-view/>
        </Content>

        <Footer>Footer</Footer>

    </Layout>
  </div>
</template>

<script>
export default {
  name: 'index',
}
</script>

<style lang="less">
.index-page {
  height: 100%;
  .ivu-layout {
    height: 100%;
  }
}
</style>
