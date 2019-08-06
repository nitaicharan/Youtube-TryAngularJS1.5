'use strict';

angular.module('try')
    .config([
        '$locationProvider',
        '$routeProvider'
        ,function(
            $locationProvider,
            $routeProvider
        ){
            $locationProvider.html5Mode({
                enabled:true
            });
            $routeProvider
                .when('/',{
                    template: '<blog-list></blog-list>'
                })
                .when('/blog/:id',{
                    template: '<blog-detail></blog-detail>'
                })
                .when('/blog/about',{
                    templateUrl: '/templates/about.html'
                })
                .otherwise({
                    template: 'Not Found'
                });
        }]);
