<template>
  <div class="home">
    {{count}}
    <li v-for="item in todoSort">{{item.id}}</li>
    <input type="text" v-model="changeNum">
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
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
      ...mapState(["count","num"]),
      ...mapGetters(["todoSort"]),
      changeNum:{
         get(){
             return this.num
         },
         set(value){
            return this.upNum({num:value})
         }
      }
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
        this.increment({amount:10})
        this.incrementAsync({amount:1})
  },
  methods:{
      ...mapActions(['incrementAsync']),
      ...mapMutations(['increment','upNum']),
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
