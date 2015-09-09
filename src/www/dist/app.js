(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

document.addEventListener('deviceready', bootstrap, false);
function bootstrap() {
  var span = document.querySelector('span');
  setTimeout(function () {
    span.textContent = 'ready, go!';
  }, 500);
  console.warn('oh yeah, gotcha.');
}

var _module = ons.bootstrap('donuts', ['onsen']);

_module.controller('AppController', ['$scope', function ($scope) {
  //
}]);
_module.controller('PageController', ['$scope', function ($scope) {
  ons.ready(function () {
    // Init code here
  });
}]);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvc29maXNoL2dpdGh1Yi9kb251dHMvd3d3L2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDM0QsU0FBUyxTQUFTLEdBQUc7QUFDbkIsTUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMxQyxZQUFVLENBQUMsWUFBVztBQUNwQixRQUFJLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQztHQUNqQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ1IsU0FBTyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0NBQ2xDOztBQUVELElBQUksT0FBTSxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzs7QUFFaEQsT0FBTSxDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBUyxNQUFNLEVBQUU7O0NBRTlELENBQUMsQ0FBQyxDQUFDO0FBQ0osT0FBTSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFTLE1BQU0sRUFBRTtBQUM5RCxLQUFHLENBQUMsS0FBSyxDQUFDLFlBQVc7O0dBRXBCLENBQUMsQ0FBQztDQUNKLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RldmljZXJlYWR5JywgYm9vdHN0cmFwLCBmYWxzZSk7XG5mdW5jdGlvbiBib290c3RyYXAoKSB7XG4gIHZhciBzcGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3BhbicpO1xuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIHNwYW4udGV4dENvbnRlbnQgPSAncmVhZHksIGdvISc7XG4gIH0sIDUwMCk7XG4gIGNvbnNvbGUud2Fybignb2ggeWVhaCwgZ290Y2hhLicpO1xufVxuXG52YXIgbW9kdWxlID0gb25zLmJvb3RzdHJhcCgnZG9udXRzJywgWydvbnNlbiddKTtcblxubW9kdWxlLmNvbnRyb2xsZXIoJ0FwcENvbnRyb2xsZXInLCBbJyRzY29wZScsIGZ1bmN0aW9uKCRzY29wZSkge1xuICAvL1xufV0pO1xubW9kdWxlLmNvbnRyb2xsZXIoJ1BhZ2VDb250cm9sbGVyJywgWyckc2NvcGUnLCBmdW5jdGlvbigkc2NvcGUpIHtcbiAgb25zLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgIC8vIEluaXQgY29kZSBoZXJlXG4gIH0pO1xufV0pOyJdfQ==
