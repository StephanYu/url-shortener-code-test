(function() {
  'use strict'

  angular
    .module('app', [
      // Angular modules
      'ngRoute',
      
      // Custom modules
      'app.core',
      'app.landing',
      'app.layout'
    ])
    .config(configFunction);

    configFunction.$inject = ['$routeProvider'];

    function configFunction($routeProvider) {
      $routeProvider.otherwise({
        redirectTo: '/'
      });
    }

})();