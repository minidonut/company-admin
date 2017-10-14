<template>
  <div id="table-wrapper">
    <div v-for="n in 4" class="cols">
        <man v-for="manData in mans[n-1]" v-bind:manData="manData" v-bind:color="colorTable[manData.id]" v-bind:key="manData.id"></man>
    </div>
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
                colorTable: {40:"#fff"}
            }
        },
        methods: {

        },
        computed: {

        },
        created() {
            this.$http.get('https://app-minidonut-web.firebaseio.com/platoon.json').then(function(data) {
                return data.json()
            }).then(function(data) {

                let tmp = [[],[],[],[]];
                console.log(this.dataModel);
                console.log(this.colorTable);
                this.dataModel = data[Object.keys(data)[0]];
                console.log(this.dataModel);
                this.dataModel.forEach(function(value, index) {

                    Object.keys(value).forEach(function(key, subIndex) {
                        let man = value[key];
                        man.selected = false;
                        console.log(this.colorTable);
                        tmp[index][subIndex] = man;

                    })
                })

                this.mans = tmp;
            });

            //event register
            bus.$on('btn', function(id) {
                console.log(id);
            })
        }
    }
</script>




<style scoped lang="scss">
    #table-wrapper {
        display: grid;
        background: #212121;
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




