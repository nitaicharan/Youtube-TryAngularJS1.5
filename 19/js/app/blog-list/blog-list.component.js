'use strict';

angular.module('blogList')
    .component('blogList',{
        controller: [
            '$scope',
            '$routeParams',
            function(
                $scope
                ,$routeParams
            ){
                $scope.title = 'Hi there!';
                $scope.clicks = 0;

                var blogItems = [
                    {title: "Blog List", id: '1', description: "First item"},
                    {title: "About", id: 'about', description: "About us"},
                ]

                $scope.items = blogItems;


                $scope.someClickTest = function(){
                    $scope.clicks += 1;
                    $scope.title = 'Clicked '+$scope.clicks+' times';
                };
            }],
        templateUrl: '/templates/blog-list.html'
    });
