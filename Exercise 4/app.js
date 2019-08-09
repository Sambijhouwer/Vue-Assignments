new Vue({
  el: '#exercise',
  data: {
    interval: false,
    Userinput: '',
    Isvisible: false,
    teststyle: {
      width: '100px',
      height: '100px',
      backgroundColor: 'white'
    },
    bar2: {
      width: '0px',
      backgroundColor: 'red'
    }
  },
  methods: {
    startEffect: function() {
      var vm = this;
      setInterval(function(){
        vm.interval = !vm.interval;
      }, 2000)
    },
    StartProgress: function(){
      var vm = this;
      var width = 0
      setInterval(function(){
        width = width + 10;
        vm.bar2.width = width + 'px';
      },1000)
    }
  }
});
