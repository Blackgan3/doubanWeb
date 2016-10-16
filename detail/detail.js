/**
 * Created by Administrator on 2016/9/28.
 */
var detailModule = angular.module('doubanApp.detailModule',[]);
detailModule.controller('detailController',['$route','$scope','jsonpService','$routeParams','$rootScope',
    function($route,$scope,jsonpService,$routeParams,$rootScope){
        $rootScope.search   = function(){


            //因为当前的路由没有改变,所以加一个q:$rootScope.input
            $route.updateParams({subject:'',id:''});

        };
    //执行跨域请求
        var currentPage =parseInt($routeParams.page||1);
        $scope.currentPage = currentPage;
        var start = (currentPage-1)*10;//每一页开始读取数据的位置
    jsonpService.jsonp('https://api.douban.com//v2/movie/'+$routeParams.subject+'/'+$routeParams.id,
        {count:10,start:0,q:$rootScope.input},function(res){
        //res为整个的数据戳

            //console.log($route);
            $scope.movie = res;
            //console.log($scope.movie.title);
            $scope.$apply();
        });
}]);
