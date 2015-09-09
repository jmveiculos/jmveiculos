angular.module('jmapp').controller('indexCtrl', function ($scope, RevendaModel){
  var jm = $scope.jm = RevendaModel;
  
  $scope.getRevendaInformation = function(){
  	jm.buscar_informacoes();
  };
  
});