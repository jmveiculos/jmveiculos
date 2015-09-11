angular.module('carromodel', ['carroapi']);

angular.module('carromodel').factory('CarroModel', function(CarroApi){
	
	var cm = {
		createModel: function(){ return new carroModel },
	};

	function carroModel(){
		this.nome = undefined;
		this.ano = undefined;
		this.fotos = undefined;
		this.valor = undefined; 
		this.cor = undefined;
		this.combustivel = undefined;
		this.opcionais = undefined;
		this.observacoes = undefined;
		this.opcionais = undefined;
		this.quilometragem = undefined;
	};

	return cm;
});