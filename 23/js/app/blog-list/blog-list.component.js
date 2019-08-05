'use strict';

angular.module('blogList')
    .component('blogList',{
        controller: [
            '$scope',
            '$routeParams',
            '$http',
            '$rootScope',
            '$location',
            function(
                $scope
                ,$routeParams
                ,$http
                ,$rootScope
                ,$location
            ){
                $http.get('//localhost:8080/json/items.json')
                    .then(response =>{
                        $scope.items = response.data;
                    })
                    .catch(response => {
                        $location.path("/404");
                    });
                $scope.goToItem = function(item){
                    $rootScope.$apply(function(){
                        $location.path('/blog/'+item.id);
                    });
                };
            }],
        templateUrl: '/templates/blog-list.html'
    });
