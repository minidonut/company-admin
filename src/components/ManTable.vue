<template>
  <div id="table-wrapper">
    <man    v-for="(manData, index) in mans" 
            v-bind:manData="manData" 
            v-bind:style="manArray[index].gridStyle" 
            v-bind:manAppendedData='manArray[index]' 
            v-bind:key="manData.id">
    </man>
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
                key: ''
            }
        },
        methods: {
            updateDB: function() {
                console.log("updateDB");
                this.$http.put('https://app-minidonut-web.firebaseio.com/platoon.json', {
                    '-Kw_Jmf_mpYutB5ZL9X2': this.mans
                }).then(function(data) {
                    console.log(data);
                });
            }
        },
        computed: {

        },
        created() {
            this.$http.get('https://app-minidonut-web.firebaseio.com/platoon.json').then(function(data) {
                return data.json()
            }).then(function(data) {
                this.key = Object.keys(data)[0]

                this.mans = data[this.key];
                //initialize array of empty object

                for (let i = 0; i < 39; i++) {
                    this.manArray[i] = {};
                }
                
                let count = 0,
                    squad = 1;
                    
                this.mans.forEach(function(value, index) {
                    
                    this.manArray[index].squad = String(value.id)[1];
                    
                    count += 1;
                    if (squad != this.manArray[index].squad) {
                        squad = this.manArray[index].squad;
                        count = 1;
                    }

                    this.manArray[index].gridStyle = {
                        'grid-column': this.manArray[index].squad + "/" + String(parseInt(this.manArray[index].squad) + 1),
                        'grid-row': count
                    }
                }.bind(this));
            });

            //register event
            
            //Event from ChangeState.vue
            bus.$on('btn', function(data) {
                this.selected.forEach(function(value) {
                    value.action = data.action;
                    value.location = data.location;
                    value.detail = data.detail;
                    value.unSelected();
                })
                this.selected.clear();
                this.updateDB();
                
            }.bind(this));
            
            //Event from Man.vue
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
