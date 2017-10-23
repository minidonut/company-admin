<template>
  <div id="app">
    <ca-header></ca-header>
    <hr>
    <man-table></man-table>
    <hr>
    <change-state></change-state>
    <hr>
    <ca-footer></ca-footer>
    
  </div>
</template>

<script>
import ManTable from './components/ManTable.vue';
import ChangeState from './components/ChangeState.vue';

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

  export default {
    name: 'app',
    components:{
      'man-table' : ManTable,
      'change-state': ChangeState,
      'ca-header': Header,
      'ca-footer': Footer
    },
    data() {
      return {

      }
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    max-width: 425px;
    margin: 0 auto;
  }

  @media (max-width: 960px) {
    html {
      font-size: 16px;
    }
  }

  @media (max-width: 480px) {
    html {
      font-size: 12px;
    }
  }
  hr{
    background: #212121;
    border: 0;
    height: 0;
    margin: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}
  
  
</style>
