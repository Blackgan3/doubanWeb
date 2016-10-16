/**
 * Created by Administrator on 2016/9/27.
 */
(function(){
    var doubanApp = angular.module('doubanApp',['ngRoute','doubanApp.listModule','doubanApp.detailModule','doubanApp.service']);
    doubanApp.config(['$routeProvider',function($routeProvider){
        $routeProvider.

            when('/search/:subject/:id',{
                templateUrl:'detail/detail.html',
                controller  :'detailController'
            }).
            when('/:category/:page?',{
                templateUrl:'list/list.html',
                controller  :'listController'
            }).
            otherwise({redirectTo:'/in_theaters'})
    }]);
})();
