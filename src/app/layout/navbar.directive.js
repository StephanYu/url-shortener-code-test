(function() {
  'use strict';

  angular
    .module('app.layout')
    .directive('usNavbar', usNavbar);

    function usNavbar() {
      return {
        templateUrl: 'app/layout/navbar.html',
        restrict: 'E',
        scope: {},
        controller: NavbarController,
        controllerAs: 'vm'
      };
    }

    NavbarController.$inject = [];
    function NavbarController() {
      var vm = this;

    }

})();