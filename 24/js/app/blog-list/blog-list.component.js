'use strict';

angular.module('blogList')
    .component('blogList',{
        controller: [
            '$scope',
            '$routeParams',
            '$http',
            '$rootScope',
            '$location',
            'Post',
            function(
                $scope
                ,$routeParams
                ,$http
                ,$rootScope
                ,$location
                ,Post
            ){
                $scope.posts = Post.query();
                $scope.goToItem = function(post){
                    $rootScope.$apply(function(){
                        $location.path('/blog/'+post.id);
                    });
                };
            }],
        templateUrl: '/templates/blog-list.html'
    });
