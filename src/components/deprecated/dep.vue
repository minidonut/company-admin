<script>
    created() {
        this.$http.get('https://app-minidonut-web.firebaseio.com/platoon.json').then(function(data) {
            return data.json()
        }).then(function(data) {


            this.dataModel = data[Object.keys(data)[0]];

            this.dataModel.forEach(function(value, index) {

                Object.keys(value).forEach(function(key, subIndex) {
                    let man = value[key];
                    man.selected = false;
                    this.mans[index][subIndex] = man;
                    this.colorTable[man.id] = "#424242";

                }.bind(this))
            }.bind(this))

            console.log(this.colorTable);
            console.log(this.mans);
        });

        //event register
        bus.$on('btn', function(id) {
            console.log(id);
        })
    }
</script>
