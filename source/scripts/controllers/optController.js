app.controller('optCon', [
  'Theme', "Animation","$location","$scope",
  function(Theme, Animation, $location, $scope) {
      const vm = this;
      vm.theme = Theme.getTheme()
      vm.animation = Animation;
      vm.goBack = goBack;


      if (vm.animation.previousPage == "/") {
        vm.animation.setRightLeft();
      } else {
        vm.animation.setLeftRight();
      }

      function goBack() {
          animation.setLeftRight();
      }

  }])
