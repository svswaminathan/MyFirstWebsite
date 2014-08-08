'use strict';
rashmi.controller('ent', function ent($scope, $location, utility) {

    //$(window).scroll(function () {
    //    alert("scroll is true");
    //});
    $scope.goToTop = function (elementId) {     
        $location.hash('top');
        utility.scrollTo(elementId);
    }
});