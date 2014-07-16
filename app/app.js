'use strict';
var rashmi = angular.module('rashmi', ['ngRoute'])
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'app/templates/home.html',
        controller: 'home'
    });
    $routeProvider.when('/about', {
        templateUrl: 'app/templates/about.html',
        controller: 'about'
    });
    $routeProvider.when('/consultants', {
        templateUrl: 'app/templates/consultants.html',
        controller: 'about'
    });
    $routeProvider.when('/facilities', {
        templateUrl: 'app/templates/facilities.html',
        controller: 'about'
    });
    $routeProvider.when('/location', {
        templateUrl: 'app/templates/location.html',
        controller: 'about'
    });
    $routeProvider.otherwise({ redirectTo: '/home' });
}]);