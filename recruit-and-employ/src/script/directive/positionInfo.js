'use strict';
angular.module("app").directive("appPositionInfo", [function(){
        return {
                restrict:'A',
                replace:true,  //用了true，要保证指令的模板有一个根元素
                templateUrl:"view/template/positionInfo.html",
                scope:{
                        isActive:'=',
                        isLogin:'=',
                        pos:'='
                },
                link: function($scope){
                        $scope.imagePath=$scope.isActive?"image/star-active.png": "image/star.png";
                }
        }

}])