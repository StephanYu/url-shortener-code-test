(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('urlDataService', urlDataService);

  function urlDataService() {
    
    var urlStorage = {};
    
    var service = {
      urlStorage: urlStorage
    };

    return service;
  }
})();