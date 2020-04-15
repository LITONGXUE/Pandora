<template>
  <div class="hello">
    <div class="test"></div>
    <h3>Installed CLI Plugins</h3>
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
<style scoped lang="scss">
.test{
  background: red;
  width: 300px;
  height: 300px;
}
</style>
