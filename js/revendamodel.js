angular.module('revendamodel', ['revendaapi', 'carroapi']);

angular.module('revendamodel').factory('RevendaModel', function(RevendaApi, CarroApi, $q){
	
	var jm = {
		buscar_informacoes_da_revenda: false, 
		buscando_informacoes_do_carro: false, 
		buscando_informacoes_da_lista_de_carros: false, 
		buscando_urls_carros: false, 
		informacoes_revenda: null,
		carros_url: new Array(),
		informacoes_carro: null,
		encontrou_carros_url: false,
		carros: new Array(),
	};

	jm.buscar_informacoes_da_revenda = function(){
		var deferred = $q.defer();
		jm.buscar_informacoes_da_revenda = true;
		RevendaApi.get_info().then(function(resposta){
			jm.informacoes_revenda = resposta.data.query.results.revenda;
			deferred.resolve(resposta);		
		}).finally(function(){
			jm.buscar_informacoes_da_revenda = false;			
		});

		return deferred.promise;
	};

	jm.buscar_url_carros_da_revenda = function(){
		jm.buscando_urls_carros = true;
		RevendaApi.get_urls().then(function(resultado){
			var carros_url = resultado.data.query.results.revenda;			
			jm.carros_url = [];
			for (var i=0; i< carros_url.length; i++){
				var href_carro = carros_url[i].carros.carro.href;
				jm.carros_url.push(href_carro);
			};
			
			jm.encontrou_carros_url = true;

			}).finally(function(){
				jm.buscando_urls_carros = false;
		});
	};
	
	jm.buscar_detalhes_lista_carros = function(){
		jm.buscando_informacoes_da_lista_de_carros = true;
		var deferred = $q.defer();

		for (var i=0;i< jm.carros_url.length; i++) {
			CarroApi.get_info(jm.carros_url[i]).then(function(resultado){
				jm.carros.push(resultado.data.query.results.carro);
			}).finally(function(){
				jm.buscando_informacoes_da_lista_de_carros = false;				
			});			
		}
		return deferred.promise;
	};



	return jm;
});