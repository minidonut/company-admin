<template>
  
  <div id="wrapper">
    <div id="details">
      <span>
        <p>위치</p>
        <input type="text" v-model="location" name="" v-bind:placeholder="locationPlaceholder"/>
      </span>
      <span>
        <p>세부내용</p>
        <input type="text" v-model="detail" name="" v-bind:placeholder="detailPlaceholder"/>
      </span>
      <div id="confirm" v-on:click="confirm">완료</div>
      <div id="cancel">취소</div>
    </div>
    <div id="btn-wrapper">
      <div class="btn" v-on:click="actionBtn('대기')" style="grid-column:1/2; grid-row:1/2; background: #558B2F">대기</div>
      
      <div class="btn" v-on:click="actionBtn('작업')" style="grid-column:2/3; grid-row:1/2; background: #C62828">작업</div>
      <div class="btn" v-on:click="actionBtn('교육')" style="grid-column:2/3; grid-row:2/3; background: #1565C0">교육</div>
      <div class="btn" v-on:click="actionBtn('훈련')" style="grid-column:2/3; grid-row:3/4; background: #9E9D24">훈련</div>
      
      <div class="btn" v-on:click="actionBtn('휴가')" style="grid-column:4/5; grid-row:1/2; background: #263238">휴가</div>
      <div class="btn" v-on:click="actionBtn('정비')" style="grid-column:4/5; grid-row:2/3; background: #263238">정비</div>
      <div class="btn" v-on:click="actionBtn('외진')" style="grid-column:4/5; grid-row:3/4; background: #263238">외진</div>
      
      <div class="btn" v-on:click="actionBtn('동문')" style="grid-column:3/4; grid-row:1/2; background: #263238">동문</div>
      <div class="btn" v-on:click="actionBtn('식기')" style="grid-column:3/4; grid-row:2/3; background: #263238">식기</div>
      <div class="btn" v-on:click="actionBtn('배식')" style="grid-column:3/4; grid-row:3/4; background: #263238">배식</div>
    </div>
  </div>
</template>

<script>
  import { bus } from '../main';

  export default {
    components: {

    },
    data() {
      return {
        locationPlaceholder: "--",
        detailPlaceholder: "--",
        location: "",
        detail: "",
        action: ""
      }
    },
    methods: {
      confirm: function() {
        console.log(this.manData);
        this.location = "";
        this.detail = "";
      },
      actionBtn: function(type) {
        this.action = type;
        bus.$emit("btn", this.manData);
        this.location = "";
        this.detail = "";
      }
    },
    computed: {
      manData: function() {
        return {
          action: this.action,
          location: this.locationComputed,
          detail: this.detailComputed
        }
      },
      locationComputed: function() {
        return (this.location == "") ? this.locationPlaceholder : this.location
      },
      detailComputed: function() {
        return (this.detail == "") ? this.detailPlaceholder : this.detail
      }
    },
    created() {

    }
  }
</script>

<style scoped lang="scss">
  #wrapper {
    background: #212121;
    color: #fff;
    padding: 10px;

  }

  #btn-wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
  }

  #details {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    margin: 0 0 10px 0;
  }

  input {
    color: #fff;
    width: 100%;
    background: none;
    outline: none;
    resize: none;
    border: 0;
    transition: all .3s;
    border-bottom: 1px solid #bebed2;
    padding: 3px;
  }

  input:focus {
    border-bottom: 2px solid #78788c
  }

  p {
    margin: 0 0 5px 0;
    content: attr(type);
    display: block;
    text-align: left;
    color: #DDD
  }

  #confirm {
    color: #00E676;
    cursor: pointer;
    font-weight: bold;
    font-size: 1.2em;
    padding: 10px
  }

  #cancel {
    color: #B71C1C;
    cursor: pointer;
    font-weight: bold;
    font-size: 1.2em;
    padding: 10px
  }

  .btn {
    cursor: pointer;
    background: #424242;
    padding: 10px;
    text-align: center;
    border-radius: 3px;
  }
</style>
