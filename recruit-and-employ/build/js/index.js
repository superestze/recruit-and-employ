'use strict'

angular.module('app', ['ui.router']);


'use strict'
angular.module('app').value('dict', {}).run(['dict','$http', function(dict,$http){
        $http.get('data/city.json').then(function(success){
                dict.city=success.data;
        });
        $http.get('data/salary.json').then(function(success){
                dict.city=success.data;
        });
        $http.get('data/scale.json').then(function(success){
                dict.city=success.data;
        })
}])
'use strict';
angular.module('app').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
        $stateProvider.state('main',{
                url:'/main',
                templateUrl:'view/main.html',
                controller:'mainCtrl'
        }).state("position",{
                url:'/position:id',
                templateUrl:'view/position.html',
                controller:"positionCtrl"
        }).state('company', {
                url:'/company/:id',
                templateUrl:'view/company.html',
                controller:'companyCtrl'
        }).state('search', {
                url:'/search',
                templateUrl:'view/search.html',
                controller:'searchCtrl'
        }).state('login', {
                url:'/login',
                templateUrl:'view/login.html',
                controller:'loginCtrl'
        }).state('register', {
                url:'/register',
                templateUrl:'view/register.html',
                controller:'registerCtrl'
        }).state('me', {
                url:'/me',
                templateUrl:'view/me.html',
                controller:'meCtrl'
        }).state('post', {
                url:'/post',
                templateUrl:'view/post.html',
                controller:'postCtrl'
        }).state('favoriate', {
                url:'/favoriate',
                templateUrl:'view/favoriate.html',
                controller:'favoriateCtrl'
        });
        $urlRouterProvider.otherwise('/main');
}])
'use strict'

angular.module('app').controller("companyCtrl", ['$http', '$scope', '$state', function ($http, $scope, $state) {
        $http.get("data/company.json?id=" + $state.params.id).then(function (success) {
                $scope.company = success.data;
                console.log( $scope.company);
        }, function (error) {

        })

}])
'use strict';

angular.module('app').controller('favoriateCtrl', ['$http','$scope', function($http, $scope){
       
}]);
'use strict';

angular.module('app').controller('loginCtrl', ['$http','$scope', function($http, $scope){
       
       

       
}]);
'use strict';

angular.module('app').controller('mainCtrl', ['$http','$scope', function($http, $scope){
       
        $http.get('/data/positionList.json').then(function(success){
               
                $scope.list=success.data;
        }, function(error){
                console.log("获取数据失败")
        });

        // $scope.list=[{
        //         id:'1',
        //         name:'销售',
        //         imgSrc:"image/company-3.png",
        //         companyName:"千度",
        //         city:"上海",
        //         industry:'互联网',
        //         time:'2016-06-01 11:05'
        // },{
        //          id:'2',
        //         name:'前端',
        //         imgSrc:"image/company-1.png",
        //         companyName:"慕课网",
        //         city:"北京",
        //         industry:'互联网',
        //         time:'2016-01-05 11:05'
        // }];
}]);
'use strict';

angular.module('app').controller('meCtrl', ['$http','$scope', function($http, $scope){
       
       

       
}]);
'use strict';

angular.module('app').controller('positionCtrl', ['$q', '$http', '$state', '$scope', function ($q ,$http, $state, $scope) {
        $scope.isLogin = false;

        function getPosition() {
                var def = $q.defer();
                $http.get('/data/position.json?id=' + $state.params.id).then(function (success) {
                        $scope.position = success.data;
                        def.resolve(success.data);
                }, function (error) {
                        def.reject(err);
                });
                return def.promise;
        };

        function getCompany(id){
                $http.get('data/company.json?id='+id).then(function(success){
                        $scope.company=success.data;
                        
                }, function(error){

                })
        }

        getPosition().then(function(obj){
               getCompany(obj.companyId)
                
        }, function(){

        });



}]);
'use strict';

angular.module('app').controller('postCtrl', ['$http','$scope', function($http, $scope){
       
       

       
}]);
'use strict';

angular.module('app').controller('rigesterCtrl', ['$http','$scope', function($http, $scope){
       
      
}]);

angular.module('app').controller('searchCtrl',  ['dict', '$http','$scope', function( dict, $http, $scope){
        $scope.name='';
       $scope.search=function(){
                $http.get('data/positionList.json?name='+$scope.name).then(
                        function(success){
                                        $scope.positionList=success.data;
                        },
                        function(error){

                        });
       }

       $scope.search();
       $scope.sheet={};
       $scope.tabList=[{
               id:'city',
               name:'城市'
       },{
                id: 'salary',
                name: '薪水'
       },{
               id:'scale',
               name:'公司规模'
       }];
       $scope.filterObj={};
       var tabId='';
       $scope.tClick=function(id, name){
               tabId=id;
               $scope.sheet.list=dict[id];
               $scope.sheet.visible=true;
       };

       $scope.sClick=function(id, name){
               if(id){
                        angular.forEach($scope.tabList, function(item){
                                if(item.id===tabId){
                                        item.name=name;
                                }
                        });
                        $scope.filterObj[tabId+'Id']=id;
               }else{
                       delete $scope.filterObj[tabId + 'Id'];
                        angular.forEach($scope.tabList, function(item){
                                if(item.id===tabId){
                                        switch(itemId){
                                                case 'ctiy':
                                                        item.name='城市';
                                                        break;

                                                case 'salary':
                                                        item.name='薪水';
                                                        break;

                                                case 'scale':
                                                        item.name='公司规模';
                                                        break; 

                                                default:
                                        }
                                }
                        });
               }
       }

}]);
'use strict'
angular.module('app').directive('appCompany', [function(){
        return {
                restrict:'A',
                replace: true,
                scope:{
                        com:"="
                },
                templateUrl:'view/template/appCompany.html'
        }
}])
'use strict';
angular.module('app').directive('appFoot', [function(){
        return{
                restrict:'A',
                replace: true,
                templateUrl: '../view/template/foot.html'
        }
      
}]);
'use strict'
angular.module('app').directive('appHead', [function(){
        return {
                restrict:'A',
                replace: true,
                templateUrl:'view/template/head.html'
        }
}])
'use strict';

angular.module('app').directive("appHeadBar", [function(){
        return {
                restrict:'A',
                replace:true,
                templateUrl:'view/template/headBar.html',
                scope:{
                        text:'@'
                },
                link:function($scope){
                        $scope.back=function(){
                                window.history.back();
                        }
                }
        };
}]);
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
'use strict'

angular.module('app').directive('appPositionList', [function(){
        return {
                restrict:'A',
                replace:true,
                templateUrl:'view/template/positionList.html',
                scope:{
                        data:'=',
                        filterObj:"="
                }
        };
}]);
'use strict'

angular.module('app').directive('appSheet', [function(){
        return {
                restrict:'A',
                replace:true,
                scope:{
                        list:"=",
                        visible:"=",
                        select:'&'
                },
                templateUrl:'view/template/sheet.html',
                
        
        };
}]);
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
'use strict'
angular.module('app').filter('filterByObj', [function(){
        return function(list, obj){
                var result=[];
                angular.forEach(list, function(item){
                        var isEqual=true;
                        for( var e in obj){
                                if(item[e]!==obj[e]){
                                        isEqual=false;
                                }
                        }
                        if(isEqual){
                                result.push(item);
                        }
                });
                return result;
        };
}]);