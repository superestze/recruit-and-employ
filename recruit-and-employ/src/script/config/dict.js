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