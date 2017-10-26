<template>
  <div>

    <div class='row'>
        <p style="text-align:center"> 개발예정 </p>
    </div>
    
    <hr>  
    <div class='row'>
        <P class='left'>
            2중대
        </P>
        <P class='right'>
            {{sum}} 명
        </P>
    </div>
    
    <hr>
    <div class='row'>
        <P class='left'>
            작업
        </P>
        <P class='right'>
            35 명
        </P>
    </div>
    
    <hr>
    <div class='row'>
        <P class='left'>
            교육
        </P>
        <P class='right'>
            60 명
        </P>
    </div>
    
    
    <hr>
    <div class='row'>
        <P class='left'>
            대기
        </P>
        <P class='right'>
            5 명
        </P>
    </div>
    
    <hr>
    <div class='row'>
        <P class='left'>
            배식
        </P>
        <P class='right'>
            4 명
        </P>
    </div>
    
    <hr>
    <div class='row'>
        <P class='left'>
            식기
        </P>
        <P class='right'>
            4 명
        </P>
    </div>
    
    <hr>
    <div class='row'>
        <P class='left'>
            동문
        </P>
        <P class='right'>
            6 명
        </P>
    </div>
    
    
    
    <hr>
    <div class='row'>
        <P class='left'>
            휴가
        </P>
        <P class='right'>
            8 명
        </P>
    </div>
    
        

</div>
</template>

<script>
    export default {
        props: ['platoons'],
        data() {
            return {
                companyArray: []
            };
        },
        methods: {
            sortByLocation: function(arr) {
                //     let temp = {};
                //     for (let i = 0; i < this.sum; i++) {

                //         if (temp.hasOwnProperty('arr[i]')) {
                //             temp.arr[i] += 1;
                //         }
                //         else {
                //             temp.arr[i] = 1;
                //         }
                //     }
                //     let result = Object.keys(temp).map(function(key) {
                //         return [String(key), temp[key]];
                //     })
                //     return result;
                // },
                // sortByAction: function(arr) {
                //     return;
                // }
                // accumulate: function(arr){
                //     for(let i=0; i<arr.length; i++){
                //         if (arr[i])
                //     }
                //     return 
                // }
                return 0;
            }
        },
        computed: {
            sum: function() {
                return 111;
            },
            sorted: function() {

                return [];
            }
        },
        created() {

            // if (this.platoons.length == 3) {
            //     for (let i = 0; i < 3; i++) {
            //         for (let j = 0; j < this.platoons[i].length; j++) {
            //             this.companyArray.push(this.platoons[i][j]);
            //         }
            //     }
            // }
        }
    }
</script>

<style scoped lang="scss">
    .row {
        background: #212121;
        color: #fff;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
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
</style>
