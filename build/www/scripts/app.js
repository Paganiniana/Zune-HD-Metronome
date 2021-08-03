const app = angular.module('app', ["ngRoute", "ngAnimate"])
app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl:"views/main.html",
  })
  .when("/options", {
    templateUrl:"views/options.html",
  })
  .when("/sounds", {
    templateUrl:"views/sounds.html",
  })
  .when("/themes", {
    templateUrl:"views/themes.html",
  })

})
