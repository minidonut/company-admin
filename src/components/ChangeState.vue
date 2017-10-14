<template>
  <div id="btn-wrapper">
    <div class="btn" v-on:click="wait">WAIT</div>
    <div class="btn" v-on:click="work">WORK</div>
    <div class="btn" v-on:click="educ">EDUC</div>
    <div class="btn" v-on:click="vaca">VACA</div>
  </div>
</template>

<script>
import {bus} from '../main';

export default {
  components:{
      
  },
  data () {
    return {
      
    }
  },
  methods:{
      wait: function(){
        bus.$emit('btn', 0)
      },
      work: function(){
        bus.$emit('btn', 1)
      },
      educ: function(){
        bus.$emit('btn', 2)
      },
      vaca: function(){
        bus.$emit('btn', 3)
      }
  },
  computed:{
      
  },
  created(){
      
  }
}
</script>

<style scoped lang="scss">
#btn-wrapper{
    background: #212121;
    color: #fff;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 10px;
}
.btn{
  cursor: pointer;
  background: #424242;
  padding: 10px;
  text-align:center;
  border-radius:3px;
}
</style>
