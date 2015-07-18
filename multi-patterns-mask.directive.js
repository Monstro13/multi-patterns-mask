"use strict";

(function() {
  angular.module("mpm", []).directive("mpm", mpm);

  function mpm() {
    return {
      restrict: "A",
      scope: {
        patterns: "=",
        mpMask: "="
      },
      link: function(scope, elem, attrs) {
        elem.bind("keypress", function(e) {
          var value = elem[0].value + String.fromCharCode(e.which);
          if (value.length > scope.mpMask.length) {
            e.preventDefault();
            return false;
          } else {
            for (var i = 0; i < value.length; i++) {
              var currentMask = scope.patterns[scope.mpMask[i]];
              var tel = value[i]
              if (!currentMask.test(tel)) {
                e.preventDefault();
                return false;
              }
            }
          }
        });
      }
    };
  }
}());
