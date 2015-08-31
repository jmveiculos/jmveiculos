angular.module('jmapp').controller('indexCtrl', function ($scope, CarrosModel){
  var jm = $scope.jm = CarrosModel;
  
  $scope.getRevendaInformation = function(){
  	jm.buscar_informacoes();
  };
  
});