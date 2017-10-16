<template>
  <div class="has-ripple" v-bind:class="{ selected: isSelected }" v-bind:style="{background: color}" v-on:click="selected">
    <img v-bind:src="getGradeURL(manData.grade)"></img>
    <span class="name">{{manData.name}}</span>
    <p class="action-location"> {{manData.action}} / {{manData.location}}</p>
    <p class="detail"> {{manData.detail}} </p>
  </div>
</template>

<script>
  import { bus } from '../main';

  export default {
    props: ['manData', 'manAppendedData'],
    data() {
      return {
        isSelected: false,
      }
    },
    methods: {
      selected: function() {

        this.isSelected = !this.isSelected;
        bus.$emit('selected', this.manData)
      },
      getGradeURL: function(n) {
        return "../src/assets/" + n.toString() + ".png";
      },
      unSelected: function() {
        this.isSelected = false;
      }

    },
    computed: {
      color: function() {
        this.manAppendedData.isSelected = this.isSelected;
        switch (this.manData.action) {

          case '대기':
            return this.isSelected ? "#8BC34A" : "#558B2F";

          case '작업':
            return this.isSelected ? "#F44336" : "#C62828";
          case '교육':
            return this.isSelected ? "#2196F3" : "#1565C0";
          case '훈련':
            return this.isSelected ? "#FFCA28" : "#FF8F00";

          case '휴가':
            return this.isSelected ? "#9E9E9E" : "#424242";
          case '정비':
            return this.isSelected ? "#BDBDBD" : "#616161";
          case '외진':
            return this.isSelected ? "#E0E0E0" : "#757575";
            
          case '동문':
            return this.isSelected ? "#607D8B" : "#263238";
          case '식기':
            return this.isSelected ? "#78909C" : "#37474F";
          case '배식':
            return this.isSelected ? "#90A4AE" : "#455A64";
            
          default:
            return "crimson"
        }
      }
    },
    created() {
      this.manData.unSelected = this.unSelected;
      this.manData.selected = this.selected;
    }
  }
</script>

<style scoped lang="scss">
  div {
    border-radius: 5px;
    padding: 3px;
    cursor: pointer;
  }

  p {
    margin: 0;
  }


  .name {
    font-size: 1.0em;
  }

  .action-location {
    font-size: 1.0em;
  }

  .detail {
    font-size: 1.0em;
  }

  img {
    display: inline-block;
    height: 0.8em;
    width: 0.8em;
  }

  .selected {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
</style>
