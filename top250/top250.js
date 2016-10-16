/**
 * Created by Administrator on 2016/9/28.
 */
var top250App = angular.module('doubanApp.top250App',[]);
top250App.controller('top250Controller',['$scope','jsonpService','$window','$routeParams',function($scope,jsonpService,$window,$routeParams){
   // $scope.movieList=moviewList.subjects;
    var count = 10;
    //currentPage是当前传入进来的参数或者是1即为首页
    var currentPage =parseInt($routeParams.page||1);
    $scope.currentPage = currentPage;
    var start = (currentPage-1)*10;//每一页开始读取数据的位置

    jsonpService.jsonp('https://api.douban.com//v2/movie/in_theaters',{count:count,start:start},function(res){
        //res为整个的数据戳
        $scope.res = res;
        //movieList为查到的电影数据戳
        $scope.movieList = res.subjects;
        //当前的页面总数
        $scope.totalPage = Math.ceil(res.total/count);
        $scope.$apply();
        $scope.changeData = function(page){
            $scope.changePage = Math.min(Math.max(page,1),$scope.totalPage);
        }
    });

}]);
