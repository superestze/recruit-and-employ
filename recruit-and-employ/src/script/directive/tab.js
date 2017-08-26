'use strict'
angular.module('app').directive('appTab', [function(){
        return {
                restrice:"A",
                replace:true,
                templateUrl:"view/template/tab.html",
                scope:{
                        list:'=',
                        tabClick:'&'
                },
                link:function($scope){
                        $scope.click= function(tab){
                                $scope.selectId= tab.Id;
                                $scope.tabClick(tab);
                        }
                }
        }
}])