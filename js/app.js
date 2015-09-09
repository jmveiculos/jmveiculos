angular.module('jmapp').controller('indexCtrl', function ($scope, RevendaModel, CarroModel){
  var jm = $scope.jm = RevendaModel;
  var cm = $scope.cm = CarroModel;
  
  $scope.getRevendaInformation = function(){
  	jm.buscar_informacoes_da_revenda().then(function(buscar_informacoes_da_revenda){
  	});
  };

  $scope.getCarroInfomation = function(carro_url) {
  	cm.buscar_informacoes(carro_url);
  };
  
});