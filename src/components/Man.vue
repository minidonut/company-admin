<template>
   <div class="has-ripple" v-bind:class="{ selected: isSelected }" v-bind:style="styleObject" v-on:click="selected(manData)">
    <img v-bind:src="getGradeURL(manData.grade)"></img>
    <span class="name">{{manData.name}}</span>
    <p class="action-location"> {{manData.action}} / {{manData.location}}</p>
    <p class="detail"> {{manData.detail}} </p>
  </div>
</template>

<script>
    export default {
        props: ['manData', 'colorList'],
        data() {
            return {
                isSelected: false,
                styleObject: { background: "#fff" }
            }
        },
        methods: {
            selected: function(manData) {
                this.$emit('selected', manData);
                this.isSelected = !this.isSelected;
            },
            getGradeURL: function(n) {
                return "src/assets/" + n.toString() + ".png";
            },
            getColor: function() {
                switch (this.manData.action) {
                    case ('정비'):
                        this.styleObject.background = this.colorList["base"][0];
                    default:
                        break;
                }
            }
        },
        computed: {

        },
        created() {
            this.getColor();
        }
    }
</script>

<style scoped lang="scss">
    div {
        background: #555;
        margin: 0 0 5px 0;
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
        font-size: 0.8em;
    }

    img {
        display: inline-block;
        height: 0.8em;
        width: 0.8em;
    }

    .selected {
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
        background: #777;
    }
</style>
