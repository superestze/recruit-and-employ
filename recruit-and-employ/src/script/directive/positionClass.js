'use strict'
angular.module("app").directive("appPositionClass", [function(){
                                
        return {
                restrict:'A',
                replace:true,
                scope:{
                  com:'='      
                },
                templateUrl:"view/template/positionClass.html",
                link:function($scope){
                       
                        $scope.showPositionList=function(idx){
                              
                                $scope.positionList=$scope.com.positionClass[idx].positionList;
                                $scope.isActive=idx;
                        }

                        $scope.$watch('com', function(newValue){
                                if(newValue){
                                        $scope.showPositionList(0);
                                }
                        })
                       
                      
                }
        };
}]);