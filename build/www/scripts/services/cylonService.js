app.service('Cylon', [
  '$document',
  function($document) {
    let body = angular.element(document).find('body')
    return function() {
      if(angular.element(body).hasClass('pulse-left-right')) {
        angular.element(body).removeClass('pulse-left-right');
        angular.element(body).addClass('pulse-right-left');
      } else {
        angular.element(body).addClass('pulse-left-right');
        angular.element(body).removeClass('pulse-right-left');
      }
    }
  }
]);
