'use strict';

angular.module('blogDetail')
    .component('blogDetail',{
        controller: [
            '$scope',
            '$routeParams',
            '$location',
            function(
                $scope
                ,$routeParams
                ,$location
            ){
                var blogItems = [
                    {title: "Blog detail", id: '1', description: "Item 1"},
                ]

                $scope.title = 'Blog '+$routeParams.id+' Nitai Charan';
                $scope.notFound = true;

                angular.forEach(blogItems,function(item){
                    if(item.id = $routeParams.id){
                        $scope.notFound = false; 
                        $scope.item = item;
                    }
                });

                if($scope.notFound){
                    $location.path("/404");
                }
            }],
        templateUrl: '/templates/blog-detail.html'
    });
