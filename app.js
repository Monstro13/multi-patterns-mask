angular.module("example", ['mpm']).controller("exampleCtrl", function($scope) {

  $scope.patterns = {
    a: /[1,2]/,
    b: /[9,0]/,
    c: /[0-9]/
  }

  $scope.mpMask = "abcc";

  $scope.namesPatterns = {
    n: /[I,S]/,
    a: /[v,a]/,
    m: /[a,m]/,
    e: /[n]/
  }

  $scope.nameMask = "name"

});
