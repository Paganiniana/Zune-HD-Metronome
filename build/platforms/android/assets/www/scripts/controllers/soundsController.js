app.controller('soundsCon', [
    "SAudio", "Animation", "$scope",
  function(SAudio, Animation, $scope) {
    const vm = this;
    vm.soundOptions = SAudio.soundOptions;
    vm.setFavoriteSound = SAudio.setFavoriteSound;
    vm.animation = Animation; //Make animation control available to template

    //set animation style on entry
    vm.animation.setBottomLevel();

    // Set last page for option animation

    $scope.$on('$routeChangeStart', function(event, next, current) {
       if (current) {
         vm.animation.setPreviousPage(current.$$route.originalPath)
       } else {
         vm.animation.setPreviousPage("")
       }
    })

  }]);
