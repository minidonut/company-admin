<template>
  <div id="btns-wrapper">
    <div class="btn" v-for="buttonType in buttons" v-on:click="handleButton(buttonType)">{{buttonType}}</div>
  </div>
</template>

<script>
    export default {

        components: {

        },
        data() {
            return {
                buttons: ["work", "rest", "maintenance", "education", "dish", "food", "guard", "hospital", "vacation", "training"]
            }
        },
        methods: {
            handleButton: function(buttonType){
                this.$emit("handleButton", buttonType);
            }
        },
        computed: {
            
        },
        created() {

        }
    }
</script>

<style scoped lang="scss">
    #btns-wrapper {
        display: grid;
        background: crimson;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 5px;
        padding: 5px;
    }


    .btn {
        background: #333;
        border-radius: 5px;
        text-align: center;
        cursor: pointer;
        color: #fff;
        padding: 10px;
    }
</style>
