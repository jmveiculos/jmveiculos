angular.module('jmapp').controller('indexCtrl', function ($scope, RevendaModel, CarroModel){
  var jm = $scope.jm = RevendaModel;
  
  $scope.getUrls = function(){
  	jm.buscar_url_carros_da_revenda();
  };
  
});