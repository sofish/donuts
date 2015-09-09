document.addEventListener('deviceready', bootstrap, false);
function bootstrap() {
  var span = document.querySelector('span');
  setTimeout(function() {
    span.textContent = 'ready, go!';
  }, 500);
  console.warn('oh yeah, gotcha.');
}

var module = ons.bootstrap('donuts', ['onsen']);

module.controller('AppController', ['$scope', function($scope) {
  //
}]);
module.controller('PageController', ['$scope', function($scope) {
  ons.ready(function() {
    // Init code here
  });
}]);