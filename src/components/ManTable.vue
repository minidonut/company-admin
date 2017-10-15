<template>
  <div id="table-wrapper">
    <man v-for="manData in mans" v-bind:manData="manData" v-bind:style="cols(manData)" v-bind:key="manData.id"></man>
  </div>
</template>

<script>
    import { bus } from '../main';
    import man from './Man.vue';

    export default {
        components: {
            'man': man
        },
        data() {
            return {
                dataModel: [],
                mans: [],
                manArray: [],
                selected: new Set(),
            }
        },
        methods: {
            cols: function(man) {
                let numSquad = String(man.id)[1];
                console.log(numSquad + "/" + String((parseInt(numSquad) + 1)));
                return {
                    "grid-column": numSquad + "/" + String((parseInt(numSquad) + 1))
                };
            }

        },
        computed: {

        },
        created() {
            this.$http.get('https://app-minidonut-web.firebaseio.com/platoon.json').then(function(data) {
                return data.json()
            }).then(function(data) {
                this.mans = data[Object.keys(data)[0]];
                // this.mans.forEach(function(value) {
                //     let numSquad = value.id.toString()[1];

                // });
            });

            //event register
            bus.$on('btn', function(data) {
                this.selected.forEach(function(value) {
                    value.action = data.action;
                    value.location = data.location;
                    value.detail = data.detail;
                    value.unSelected();
                })
                this.selected.clear();

            }.bind(this));

            bus.$on('selected', function(man) {
                if (this.selected.has(man)) {
                    this.selected.delete(man);
                }
                else {
                    this.selected.add(man);
                }
            }.bind(this));
        }
    }
</script>




<style scoped lang="scss">
    #table-wrapper {
        display: grid;
        background: #212121;
        grid-template-columns: repeat(4, 1fr);
        grid-auto-rows: minmax(50px, auto);
        grid-column-gap: 10px;
        grid-row-gap: 5px;
        padding: 10px;
        color: #fff;
        text-align: center;
    }
</style>
