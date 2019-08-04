'use strict';

angular.module('blogList')
    .component('blogList',{
        controller: function($scope){
            $scope.title = 'Hi there!';
            $scope.clicks = 0;

            var blogItems = [
                {title: "Some Title", id: 1, description: "This is a book", publishDate: "2016-09-11"},
                {title: "Title", id: 2, description: "This is a book"},
                {title: "Tea", id: 3, description: "This is a book"},
                {title: "Lite", id: 4, description: "This is a book"},
                {title: "About", id: 'about', description: "This is a book"},
            ]

            $scope.items = blogItems;


            $scope.someClickTest = function(){
                $scope.clicks += 1;
                $scope.title = 'Clicked '+$scope.clicks+' times';
            };
        },
        templateUrl: '/templates/blog-list.html'
    });
