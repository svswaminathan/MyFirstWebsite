'use strict';
var rashmi = angular.module('rashmi', ['ngRoute', 'ui.bootstrap', 'ngTouch'])
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
    $routeProvider.when('/gyn', {
        templateUrl: 'app/templates/gyn.html',
        controller: 'ent'
    });
    $routeProvider.when('/oph', {
        templateUrl: 'app/templates/oph.html',
        controller: 'ent'
    });
    $routeProvider.when('/baby', {
        templateUrl: 'app/templates/baby.html',
        controller: 'ent'
    });
    $routeProvider.when('/cashless', {
        templateUrl: 'app/templates/cashless.html',
        controller: 'about'
    });
    $routeProvider.otherwise({ redirectTo: '/home' });
}]);