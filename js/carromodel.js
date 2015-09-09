angular.module('carromodel', ['carroapi']);

angular.module('carromodel').factory('CarroModel', function(CarroApi){
	
	var cm = {
		buscando_informacoes: false, 
		informacoes_carro: null
	};

	cm.buscar_informacoes_do_carro = function(carro_url){
		cm.buscando_informacoes = true;

		CarroApi.get_info(carro_url).then(function(resposta){
			cm.informacoes_carro = resposta.data.query.results;
			console.log(cm.informacoes_carro);		
		}).finally(function(){
			cm.buscando_informacoes = false;			
		});
	};

	return cm;
});