<template>
  <div>
      <div id="tab-wrapper">
          <div id="tab1" class='tab' v-bind:class='{activeTab : isActive(0)}' v-on:click='changeTab(0)'>전체</div>
          <div id="tab2" class='tab' v-bind:class='{activeTab : isActive(1)}' v-on:click='changeTab(1)'>1소대</div>
          <div id="tab3" class='tab' v-bind:class='{activeTab : isActive(2)}' v-on:click='changeTab(2)'>2소대</div>
          <div id="tab4" class='tab' v-bind:class='{activeTab : isActive(3)}' v-on:click='changeTab(3)'>3소대</div>
      </div>
      <hr>
      <div v-show='currentTab==0'>
          <company v-bind:platoons='platoons'></company>
      </div>
      <div v-show='currentTab==1'>
      <ca-summary v-bind:mans="platoon1"></ca-summary>
      <hr>
      <div id="table-wrapper">
        <man    v-for="(manData, index) in platoon1" 
                v-bind:manData="manData" 
                v-bind:style="platoonsArray[0][index].gridStyle" 
                v-bind:manAppendedData='platoonsArray[0][index]' 
                v-bind:key="manData.id">
        </man>
      </div>
      </div>
      <div v-show='currentTab==2'>
      <ca-summary v-bind:mans="platoon2"></ca-summary>
      <hr>
      <div id="table-wrapper">
        <man    v-for="(manData, index) in platoon2" 
                v-bind:manData="manData" 
                v-bind:style="platoonsArray[1][index].gridStyle" 
                v-bind:manAppendedData='platoonsArray[1][index]' 
                v-bind:key="manData.id">
        </man>
      </div>
      </div>
      <div v-show='currentTab==3'>
      <ca-summary v-bind:mans="platoon3"></ca-summary>
      <hr>
      <div id="table-wrapper">
        <man    v-for="(manData, index) in platoon3" 
                v-bind:manData="manData" 
                v-bind:style="platoonsArray[2][index].gridStyle" 
                v-bind:manAppendedData='platoonsArray[2][index]' 
                v-bind:key="manData.id">
        </man>
      </div>
      </div>
  </div>
</template>


<script>
    import { bus } from '../main';
    import Man from './Man.vue';
    import Summary from './Summary.vue';
    import Company from './Company.vue';

    export default {
        components: {
            'man': Man,
            'ca-summary': Summary,
            'company': Company
        },
        data() {
            return {
                dataModel: [],
                mans: [],
                manArray: [],
                selected: new Set(),
                platoons: [],
                platoonsArray: [
                    [],
                    [],
                    []
                ],
                platoon1: [],
                platoon2: [],
                platoon3: [],
                currentTab: 1
            };
        },
        methods: {
            updateDB: function() {
                console.log("updateDB");
                this.$http.put('https://app-minidonut-web.firebaseio.com/platoon.json', {
                    '-Kw_Jmf_mpYutB5ZL9X2': this.platoons[0],
                    '-KxDXl_r3GGv5p3AyX-0': this.platoons[1],
                    '-KxIsk9_Z5mvGp7fqzEQ': this.platoons[2]

                }).then(function(data) {
                    console.log(data);
                });
            },
            selectAll: function() {
                this.platoons[this.currentTab - 1].forEach(function(v) {
                    this.selected.add(v);
                    v.doSelected();
                }.bind(this));
            },
            clearAll: function() {
                this.platoons[this.currentTab - 1].forEach(function(v) {
                    this.selected.clear();
                    v.unSelected();
                }.bind(this));
            },
            test: function() {

            },
            changeTab: function(tab) {
                if (this.currentTab != 0) {
                    this.clearAll();
                }
                this.currentTab = tab;
            },
            isActive: function(tab) {
                return this.currentTab == tab;
            }
        },
        computed: {

        },
        created() {



            this.$http.get('https://app-minidonut-web.firebaseio.com/platoon.json').then(function(data) {
                return data.json();
            }).then(function(data) {

                this.platoon1 = data[Object.keys(data)[0]];
                this.platoon2 = data[Object.keys(data)[1]];
                this.platoon3 = data[Object.keys(data)[2]];

                this.platoons[0] = this.platoon1;
                this.platoons[1] = this.platoon2;
                this.platoons[2] = this.platoon3;


                for (let j = 0; j < 3; j++) {
                    for (let i = 0; i < this.platoons[j].length; i++) {
                        this.platoonsArray[j][i] = {};
                    }

                    let count = 0,
                        squad = 1;

                    this.platoons[j].forEach(function(value, index) {

                        //assign value of ths squad of the man from mans data
                        this.platoonsArray[j][index].squad = String(value.id)[1];
                        count += 1;
                        if (squad != this.platoonsArray[j][index].squad) {
                            squad = this.platoonsArray[j][index].squad;
                            count = 1;
                        }

                        //generate CSS grid style and put it into manArray's property
                        this.platoonsArray[j][index].gridStyle = {
                            'grid-column': this.platoonsArray[j][index].squad + "/" + String(parseInt(this.platoonsArray[j][index].squad) + 1),
                            'grid-row': count
                        };
                    }.bind(this));
                }
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

            bus.$on('summary', function(action) {
                
                let result = this.platoons[this.currentTab - 1].filter(function(man) {
                    
                    return man.action == action;
                });
                result.forEach(function(man) {
                    this.selected.add(man);
                    man.doSelected();
                }.bind(this));
            }.bind(this));

            bus.$on('selectAll', function() {
                this.selectAll();
            }.bind(this));

            bus.$on('clearAll', function() {
                this.clearAll();
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
        grid-auto-columns: max-content;
        grid-column-gap: 10px;
        grid-row-gap: 5px;
        padding: 10px;
        color: #fff;
        text-align: center;
    }

    #tab-wrapper {
        display: grid;
        background: #212121;
        grid-template-columns: repeat(4, 1fr);
        color: #777;
        text-align: center;
    }

    .tab {
        font-size: 1.4em;
        padding: 15px;
        cursor: pointer;
    }

    .activeTab {
        color: #fff;
        border-width: 2px;
        border-bottom: 2px white solid;
    }
</style>
