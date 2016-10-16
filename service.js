/**
 * Created by Administrator on 2016/9/28.
 */
(function(){
   var serviceModule =  angular.module('doubanApp.service',[]);
    serviceModule.service('jsonpService',['$window',function($window){
        this.jsonp = function (url,params,callback){
            //1,先需要拼接参数
            var queryString = '?';
            for(key in params){
                queryString+= key+'='+params[key]+'&&';
            }
            //用事件戳搞一个函数名,用来作为回调函数名,避免污染全局空间
            var funName = "my_callback"+new Date().getTime();
            queryString+='callback'+'='+funName;
            //先挂在函数
            $window[funName] = function(res){
                $window.document.body.removeChild(script);
                callback(res);
            };
            //要向页面添加script标签
            var script =  document.createElement('script');
            script.src=url+queryString;
            document.body.appendChild(script);
            console.log(script.src);
        };
    }])
})();
