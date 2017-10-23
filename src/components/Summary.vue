<template>
  <div id="wrapper">
    <div class="chip" v-on:click="selectAll">
      <div class="key">총원</div>
      <div class="value" style="background:#212121">{{sum}}</div>
    </div>
    <template v-for="(value, key) in summary">
      <div class="chip" v-on:click="selection(key)">
        <div class="key">{{key}}</div>
        <div class="value" v-bind:style="{background: actionTable[key][1]}">{{value}}</div>  
      </div>
    </template>
</div>
</template>

<script>
  import { bus } from '../main';
  
  export default {
    props: ['mans'],
    data() {
      return {
        sum: 39,
        actionTable: {
          '대기': [0, "#558B2F"],
          '작업': [0, "#C62828"],
          '교육': [0, "#1565C0"],
          '훈련': [0, "#FF8F00"],
          '휴가': [0, "#424242"],
          '정비': [0, "#616161"],
          '외진': [0, "#757575"],
          '동문': [0, "#263238"],
          '식기': [0, "#37474F"],
          '배식': [0, "#455A64"]
        }
      }
    },
    methods: {
      selection: function(action){
        bus.$emit("summary", action)
      },
      selectAll: function(){
        bus.$emit("selectAll");
      }

    },
    computed: {
      summary: function() {

        for (let key in this.actionTable) {
          this.actionTable[key][0] = 0;
        }

        this.mans.forEach(function(v) {
          this.actionTable[v.action][0] += 1;
        }.bind(this));

        let result = {};
        for (let action in this.actionTable) {
          let count = this.actionTable[action][0];
          if (count != 0) {
            result[action] = count;
          }
        }

        return result;
      }
    },
    created() {

    }
  }
</script>

<style scoped lang="scss">
  div {
    background: #212121;
    color: #fff;
    padding: 5px;
  }

  #wrapper {
    text-align: left;
  }

  .chip {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 4px;
    padding: 2px;
    border-radius: 40px;
    background: #424242;
  }

  .key {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: none;
    padding: 3px 5px 3px 8px;
    margin: 0;
  }

  .value {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 1.85rem;
    width: 1.85rem;
    border-radius: 50%;
    text-align: center;
    vertical-align: middle;
    padding: 0;
    margin: 0;
  }
</style>
