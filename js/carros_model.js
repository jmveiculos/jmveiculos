angular.module('carrosmodel', ['carrosapi']);

angular.module('carrosmodel').factory('CarrosModel', function(CarrosApi){
	
	var jm = {
		buscando_informacoes: false
	};

	jm.buscar_informacoes = function(user){
		jm.buscando_informacoes = true;
		CarrosApi.get_info().success(function(result){
			console.log(result);
		}).finally(function(){
			jm.buscando_informacoes = false;			
		});
	};

	return jm;
});