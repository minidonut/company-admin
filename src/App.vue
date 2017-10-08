<template>
  <div id="app">
    <man-table></man-table>
    <action-button v-on:handleButton="handleButton($event)"></action-button>
  </div>
</template>

<script>
  import manTable from './components/ManTable.vue';
  import actionButton from './components/ActionButton.vue';


  export default {
    components: {
      'man-table': manTable,
      'action-button': actionButton
    },
    data() {
      return {
        isButtonClicked: false,
        buttonType: ""
      }
    },
    methods: {
      handleButton: function(buttonType){
        this.buttonType = buttonType;
        this.isButtonClicked = true;
      }
    },
    computed: {

    },
    created() {

    }
  }
</script>

<style lang="scss">
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

  .has-ripple {
    position: relative;
    overflow: hidden;
    cursor: pointer;
  }

  .ripple {
    background: #e0e0e0;
    position: absolute;
    opacity: 0.5;
    animation: ripple 1.8s cubic-bezier(0.23, 1, 0.32, 1);
    border-radius: 50%;
    backface-visibility: hidden;
    pointer-events: none;
  }

  @keyframes ripple {
    0% {
      transform: translateX(-50%) translateY(-50%) scale(1);

    }
    80% {
      transform: translateX(-50%) translateY(-50%) scale(3);
    }
    100% {
      transform: translateX(-50%) translateY(-50%) scale(3);
      opacity: 0;
    }
  }
</style>
