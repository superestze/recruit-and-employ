'use strict'

angular.module('app').controller("companyCtrl", ['$http', '$scope', '$state', function ($http, $scope, $state) {
        $http.get("data/company.json?id=" + $state.params.id).then(function (success) {
                $scope.company = success.data;
                console.log( $scope.company);
        }, function (error) {

        })

}])