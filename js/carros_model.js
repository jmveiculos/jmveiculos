angular.module('carrosmodel', ['carrosapi']);

angular.module('carrosmodel').factory('CarrosModel', function(CarrosApi){
	
	var jm = {
		buscando_informacoes: false, 
		informacoes_revenda: null
	};

	jm.buscar_informacoes = function(user){
		jm.buscando_informacoes = true;

		CarrosApi.get_info().then(function(resposta){
			jm.informacoes_revenda = resposta.data.query.results.revenda;
			console.log(jm.informacoes_revenda);		
		}).finally(function(){
			jm.buscando_informacoes = false;			
		});
	};

	return jm;
});