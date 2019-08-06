'use strict';

angular.module('blogDetail')
    .component('blogDetail',{
        controller: [
            '$scope',
            '$routeParams',
            '$location',
            '$http',
            'Post',
            function(
                $scope
                ,$routeParams
                ,$location
                ,$http
                ,Post
            ){
                Post.query(function(data){
                    $scope.notFound = true
                    angular.forEach(data, function(post){
                        if (post.id == $routeParams.id){
                            $scope.notFound = false;
                            $scope.post = post;
                            resetReply();
                        }
                    })
                })

                $scope.addReply = function(){
                    $scope.post.comments.push($scope.reply);
                    resetReply();
                };

                function resetReply(){
                    $scope.reply = {
                        'id': $scope.post.comments.length + 1,
                        'text':''
                    };
                }

                if ($scope.notFound) {
                    $location.path("/")
                }
            }],
        templateUrl: '/templates/blog-detail.html'
    });
