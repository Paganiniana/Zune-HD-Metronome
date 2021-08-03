app.controller('themeCon', [
  'Theme', "Animation", "$scope",
  function(Theme, Animation, $scope) {
    const vm = this;
    vm.themeList = Theme.list;
    vm.setTheme = setTheme;
    vm.animation = Animation;

    vm.animation.setBottomLevel();

    function setTheme(name) {
      Theme.setTheme(name);
      location.reload()
    }

    // Set previous page for Option animation

    $scope.$on('$routeChangeStart', function(event, next, current) {
       if (current) {
         vm.animation.setPreviousPage(current.$$route.originalPath)
       } else {
         vm.animation.setPreviousPage("")
       }
    })

  }
])
