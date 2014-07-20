'use strict';
rashmi.controller('gallery', function gallery($scope) {  
    $scope.myInterval = 2000;
    var slides = $scope.slides = [];
    $scope.addSlide = function (imageNumber) {        
        var newWidth = 600 + slides.length;
        slides.push({
            image: 'images/' + imageNumber + '.jpg',
            text: ['Facade', 'Reception', 'Corridor', 'Consulting Room'][slides.length % 4]
        });
    };
    for (var i = 1; i < 5; i++) {
        $scope.addSlide(i);
    }
});