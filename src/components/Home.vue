<template>
  <div class="home">
    
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  },
  mounted(){
      
  },
  methods:{
      getViewJson(){
          this.$axios.post('http://mock.in.songguo7.com/mock/5e816dc7246e9c1ac04b733a/pandora/viewList')
          .then(({data})=>{
              let prams = data.view;
              console.log(prams)
          })
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home{

}
</style>
