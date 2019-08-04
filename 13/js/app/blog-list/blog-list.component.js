'use strict';

angular.module('blogList')
    .component('blogList',{
        controller: function($scope){
            $scope.title = 'Hi there!';
            $scope.clicks = 0;

            $scope.someClickTest = function(){
                $scope.clicks += 1;
                $scope.title = 'Clicked '+$scope.clicks+' times';
            };
        },
        templateUrl: '/templates/blog-list.html'
    });
