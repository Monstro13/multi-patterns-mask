# multi-patterns-mask
## angulars directive for check entered characters
##
## live demo http://output.jsbin.com/fesusu/1
### Installation
#### Bower
`bower install multi-patterns-mask --save`

#### Modules
##### mpm - module must have injected
`var app = angular.module("example", ['mpm']);`

### Usage
#### app.js

```
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
```

#### index.html

```
<div style="padding:20px;">
        Year example: Validate mask [1,2] [9,0] [0-9] [0-9]
</div>
<input class="form-control" mpm patterns="patterns" mp-mask="mpMask" type="text" placeholder="Enter any character">

<div style="padding:20px;">
        Names example: Validate mask [I,S] [v, a] [a, m] [n]
</div>
<input class="form-control" mpm patterns="namesPatterns" mp-mask="nameMask" type="text" placeholder="Enter any character">
```
