'use strict';
var rashmi = angular.module('rashmi', ['ngRoute', 'ui.bootstrap'])
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
    $routeProvider.when('/gallery', {
        templateUrl: 'app/templates/gallery.html',
        controller: 'gallery'
    });
    $routeProvider.when('/ent', {
        templateUrl: 'app/templates/ent.html',
        controller: 'ent'
    });
    $routeProvider.otherwise({ redirectTo: '/home' });
}]);