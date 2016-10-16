/**
 * Created by Administrator on 2016/9/28.
 */

var listApp = angular.module('doubanApp.listModule',[]);
listApp.controller('listController',['$scope','jsonpService','$window','$routeParams','$rootScope','$route',
    function($scope,jsonpService,$window,$routeParams,$rootScope,$route){

    // $scope.movieList=moviewList.subjects;
  //  $scope.category;

        $rootScope.category = $routeParams.category;
    //这里是搜索框的函数
    $rootScope.search   = function(){


        //因为当前的路由没有改变,所以加一个q:$rootScope.input
        $route.updateParams({category:'search',p:$rootScope.input});
    };
        var count = 10;
        //currentPage是当前传入进来的参数或者是1即为首页
        var currentPage =parseInt($routeParams.page || 1);
        var start = (currentPage-1)*10;//每一页开始读取数据的位置



    jsonpService.jsonp('https://api.douban.com//v2/movie/'+$routeParams.category,{count:count,start:start,q:$rootScope.input},function(res){
        //res为整个的数据戳

        $scope.currentPage = currentPage;
        $scope.res = res;
        //movieList为查到的电影数据戳
        $scope.movieList = res.subjects;
        //当前的页面总数
        $scope.totalPage = Math.ceil(res.total/count);
        $scope.$apply();
        $scope.changeData = function(page){
            $scope.changePage = Math.min(Math.max(page,1),$scope.totalPage);
            $route.updateParams({page:$scope.changePage});
        }
    });

}]);
