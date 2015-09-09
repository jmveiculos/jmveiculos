angular.module('revendamodel', ['revendaapi']);

angular.module('revendamodel').factory('RevendaModel', function(RevendaApi, $q){
	
	var jm = {
		buscar_informacoes_da_revenda: false, 
		informacoes_revenda: null
	};

	jm.buscar_informacoes_da_revenda = function(user){
		var deferred = $q.defer();

		jm.buscar_informacoes_da_revenda = true;

		RevendaApi.get_info().then(function(resposta){
			jm.informacoes_revenda = resposta.data.query.results.revenda;
			console.log(jm.informacoes_revenda);
			deferred.resolve(resposta);		
		}).finally(function(){
			jm.buscar_informacoes_da_revenda = false;			
		});

		return deferred.promise;
	};

	return jm;
});