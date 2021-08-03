app.controller('main', [
  'Metronome', 'Cylon', 'SAudio', 'Animation', "$scope",
  function(Metronome, Cylon, SAudio, Animation, $scope) {
  const vm = this;
  vm.range = []; for(let i=0; i<= 180; i++){vm.range.push(i)};
  vm.isPlaying=false;
  vm.bpm = 0;
  vm.toggleCylon = null;
  vm.start = startButton;
  vm.stop = stopButton;
  vm.setBpm = setBpm;
  vm.animation = Animation;
  // Set Screen animation on load.
  vm.animation.setTopLevel();
  //start, stop, and set funcitons

  let metro;
  function startButton() {
    stopButton();
    if (vm.bpm == 0) {
      return
    }
    vm.isPlaying=true;
    vm.mySound = new Audio(SAudio.getFavoriteSound().location);
    metro = Metronome(vm.bpm, function() {
      vm.mySound.play();
      Cylon();
    });
    metro.run()
  }

  function stopButton() {
    vm.isPlaying=false;
    if (!metro) {
      return
    }
    metro.stop();
    vm.mySound.pause();
    metro = null;
  }

  function setBpm(bpm) {
    vm.bpm = bpm;
  }

  // Set previous page for option animation;

  $scope.$on('$routeChangeStart', function(event, next, current) {
     if (current) {
       vm.animation.setPreviousPage(current.$$route.originalPath)
     } else {
       vm.animation.setPreviousPage("")
     }
  })



}])
