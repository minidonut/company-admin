<template>
  <div>
    <div id='detail' v-on:click='close' v-if='isModalOn'>
        <div id='black'></div>
        <div id='modal'>
            <p id='p-details'>{{currentKey}}: {{modalDetail}}</p>
            <hr>
            <p id='p-personels'>{{modalPeople}}</p>
        </div>
    </div>
    <div class='row'>
        <P class='left'>
            전체
        </P>
        <P class='right'>
            {{sum}} 명
        </P>
    </div>
    <template v-for="(value, key) in sorted">
        <hr>
        <div class='row' v-on:click='detail(key)'>
            <P class='left'>
                {{key}}
            </P>
            <P class='right'>
                {{value}} 명
            </P>
        </div>
    </template>
</div>
</template>

<script>
    export default {
        props: ['platoon1','platoon2','platoon3', 'platoons'],
        data() {
            return {
                companyArray: [],
                actionTable: {
                    '대기': [0, false],
                    '작업': [0, false],
                    '교육': [0, false],
                    '훈련': [0, false],
                    '휴가': [0, false],
                    '정비': [0, false],
                    '외진': [0, false],
                    '동문': [0, false],
                    '식기': [0, false],
                    '배식': [0, false]
                },
                isModalOn: false,
                modalDetail: '',
                modalPeople: '',
                currentKey: '',
            };
        },
        methods: {
            detail: function(key) {
                let filtered = [];
                for (let i = 0; i < 3; i++) {
                    let arr = this.platoons[i].filter(function(man) {
                        return man.action === key;
                    });
                    filtered = filtered.concat(arr);
                }
                let dt = new Set();
                let people = new Set();
                for(let i=0; i<filtered.length; i++){
                    dt.add(filtered[i].detail);
                    people.add(filtered[i].name);
                }
                this.modalDetail = Array.from(dt).join(', ');
                this.modalPeople = Array.from(people).join(', ');
                this.currentKey = key;
                this.isModalOn = true;

            },
            close: function(){
                this.isModalOn = false;
            }
        },
        computed: {
            sum: function() {
                return 111;
            },
            sorted: function() {
                for (let key in this.actionTable) {
                    this.actionTable[key][0] = 0;
                }
                this.platoon1.forEach(function(v) {
                    this.actionTable[v.action][0] += 1;
                }.bind(this));
                
                this.platoon2.forEach(function(v) {
                    this.actionTable[v.action][0] += 1;
                }.bind(this));
                
                this.platoon3.forEach(function(v) {
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
    .row {
        background: #212121;
        color: #fff;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        cursor: pointer;
    }

    p {
        display: inline-block;
        padding: 0 10px 0 10px;
    }

    .left {
        text-align: left
    }

    .right {
        text-align: right;
    }
    #detail{
        position:absolute;
        top:0px;
        left:0px;
        width:100%;
        height:100%;
        
    }
    
    #black{
        position:absolute;
        top:0px;
        left:0px;
        width:100%;
        height:100%;
        background:#000;
        opacity: 0.7;
        cursor:pointer;
    }
    
    #modal{
        position:relative;
        background:#212121;
        width:60%;
        margin:100px auto;
        opacity: 1.0;
        border-radius: 10px;
        white-space:normal;
        word-break:normal;
        color:#fff;
    }
    
    #p-personels{
        color:#fff;
        display:inline-block;
        word-break: break-all;
        
    }
    
    #p-details{
        color:#fff;
        display:inline-block;
        word-break: break-all;
        
    }
</style>
