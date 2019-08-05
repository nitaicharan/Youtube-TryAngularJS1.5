'use strict';

angular.module('blogDetail')
    .component('blogDetail',{
        controller: [
            '$scope',
            '$routeParams',
            '$location',
            '$http',
            function(
                $scope
                ,$routeParams
                ,$location
                ,$http
            ){
                $http.get('//localhost:8080/json/items.json')
                    .then(response =>{
                        angular.forEach(response.data,item=>{
                            if(item.id == $routeParams.id){
                                $scope.item = item;
                            }
                        });
                    })
                    .catch(response => {
                        $location.path("/404");
                    });
            }],
        templateUrl: '/templates/blog-detail.html'
    });
