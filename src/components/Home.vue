<template>
  <div class="home">
    {{count}}
    <li v-for="item in todoSort">{{item.id}}</li>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: 'Home',
  props: {

    msg: String
  },
  data(){
      return {
          countPlus: this.count
      }
  },
  computed:{
      ...mapState(["count"]),
      ...mapGetters(["todoSort"])
    //   listSort(){
    //       console.log(this.$store.getters.todoSort)
    //       return this.$store.getters.todoSort
    //   }
  }
  ,
  mounted(){
      console.log(this.count)
      this.countPlus = 2
      console.log(this.countPlus)
  },
  methods:{
      getViewJson(){
          this.$axios.post('http://mock.in.liwenyang.com/mock/5e816dc7246e9c1ac04b733a/pandora/viewList')
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
