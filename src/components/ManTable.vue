<template>
  <div id="table-wrapper">
    <div v-for="n in 4" class="cols">
        <man v-for="manData in mans[n-1]" v-bind:manData="manData" v-bind:colorList="colorList" v-bind:key="manData.id" v-on:selected="selected($event)"></man>
    </div>
  </div>
</template>

<script>
    import man from './Man.vue';

    export default {
        components: {
            'man': man
        },
        props:['isButtonClicked', 'buttonType'],
        data() {
            return {
                mans: [],
                selectedList: [],
                colorList: {
                    base: ["#3cb878", "#aae3c6"],
                    work: ["#E53935", "#f6bebd"],
                    education: ["#FFB300", "#ffe199"],
                    duty: ["#039BE5", "#84d6fd"],
                    vacation: ["#BDBDBD", "white"],
                    training: ["#FB8C00", "#ffd095"],
                    hospital: ["#757575", "#c2c2c2"]
                }
            }
        },
        methods: {
            selected: function(manData) {
                if (this.selectedList.includes(manData)) {
                    this.selectedList.pop(manData);
                }
                else {
                    this.selectedList.push(manData);
                }
                console.log(this.selectedList.length);
            }
        },
        computed: {

        },
        created() {
            this.$http.get('https://app-minidonut-web.firebaseio.com/platoon.json').then(function(data) {
                return data.json()
            }).then(function(data) {
                this.mans = data[Object.keys(data)[0]];
            });
        }
    }
</script>

<style scoped lang="scss">
    #table-wrapper {
        display: grid;
        background: #222;
        grid-template-columns: repeat(4, 1fr);
        grid-auto-rows: minmax(150px, auto);
        grid-gap: 10px;
        padding: 10px;
    }

    .cols {
        color: #fff;
        text-align: center;
    }
</style>
