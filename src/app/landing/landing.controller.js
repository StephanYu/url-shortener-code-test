(function() {
  'use strict';
 
  angular
    .module('app.landing')
    .controller('LandingController', LandingController);

    LandingController.$inject = ['urlDataService', '$window'];
    
    function LandingController(urlDataService, $window) {
      var vm = this;
      var clicked = false;
      var shortUrl = false;
      var longUrl = false;

      vm.shortUrlPath = '';
      vm.makeShortUrl = makeShortUrl;
      vm.makeLongUrl = makeLongUrl;
      vm.appendResults = appendResults;
      vm.clicked = clicked;
      vm.shortUrl = shortUrl;
      vm.longUrl = longUrl;
      vm.goShort = goShort;
      vm.goLong = goLong;
      vm.goBack = goBack;

      //////////////////////////////////

      function makeLongUrl(urlPath) {  
        if (urlDataService.urlStorage[urlPath]) {
          $window.location.href = urlDataService.urlStorage[urlPath];
        } else {
          var request = gapi.client.urlshortener.url.get({
            'shortUrl': urlPath
          }).then(function(response) {
            appendResults(response.result.longUrl);
          }, function(reason) {
            console.log('Error: ' + reason.result.error.message);
          });
        }
      }

      function makeShortUrl(urlPath) { 
        var request = gapi.client.urlshortener.url.insert({
          'longUrl': urlPath
        }).then(function(response) {
          if (!urlDataService.urlStorage[response.result.id]) {
            urlDataService.urlStorage[response.result.id] = response.result.longUrl;
          }
          appendResults(response.result.id);
        }, function(reason) {
          console.log('Error: ' + reason.result.error.message);
        });
      }

      function appendResults(text) {
        var results = document.getElementById('results');
        results.appendChild(document.createElement('P'));
        results.appendChild(document.createTextNode(text));
      }

      function goShort() {
        vm.clicked = true;
        vm.shortUrl = true;
      }
      
      function goLong() {
        vm.clicked = true;
        vm.longUrl = true;
      }

      function goBack() {
        vm.clicked = false;
        vm.shortUrl = false;
        vm.longUrl = false;

        var results = document.getElementById('results');
        while (results.firstChild) {
          results.removeChild(results.firstChild);
        }
      }   
    }
})();