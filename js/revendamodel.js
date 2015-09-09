angular.module('revendamodel', ['revendaapi']);

angular.module('revendamodel').factory('RevendaModel', function(RevendaApi){
	
	var jm = {
		buscando_informacoes: false, 
		informacoes_revenda: null
	};

	jm.buscar_informacoes = function(user){
		jm.buscando_informacoes = true;

		RevendaApi.get_info().then(function(resposta){
			jm.informacoes_revenda = resposta.data.query.results.revenda;
			console.log(jm.informacoes_revenda);		
		}).finally(function(){
			jm.buscando_informacoes = false;			
		});
	};

	return jm;
});