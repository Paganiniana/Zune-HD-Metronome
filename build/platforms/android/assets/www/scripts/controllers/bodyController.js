app.controller('bodyCon', [
  'Theme', 'Animation', "$scope","$routeParams",
  function(Theme, Animation, $scope) {
    const vm = this;

    vm.themeClass = theme.getTheme(); //set body theme to chosen theme

     $scope.$on('$routeChangeStart', function(event, next, current) {
        console.log(current, next)
     })
    function setAnimationClass(className) {
        vm.animationClass = Animation.getCurrentClass();
    }
    Animation.setSetter(setAnimationClass);
  }]);
