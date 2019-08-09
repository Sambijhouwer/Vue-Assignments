new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods:{
            alertnow: function(){
                alert("Hi");
            },
            change: function(event){
                this.value = event.target.value
            }

        }
    });