angular.module('jmapp').controller('indexCtrl', function ($scope, CarrosModel){
  var jm = $scope.jm = CarrosModel;
  console.log(jm);
});