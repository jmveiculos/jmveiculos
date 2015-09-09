//Bizu do stackoverflow
//http://stackoverflow.com/questions/646628/how-to-check-if-a-string-startswith-another-string
if (typeof String.prototype.startsWith != 'function') {
  String.prototype.startsWith = function (str){
	return this.slice(0, str.length) == str;
  };
}
if (typeof String.prototype.endsWith != 'function') {
  String.prototype.endsWith = function (str){
	return this.slice(-str.length) == str;
  };
}

if(!window.Global){
    window.Global = {};
}
if(!Global.angular_dependencies){
  Global.angular_dependencies = [];
}

Global.loja_id = '3639';
Global.revenda_url = 'http://yql-tables.surge.sh/carrosaojose.com.br/revenda.xml';
Global.carro_url = 'http://yql-tables.surge.sh/carrosaojose.com.br/carro.xml';

angular.module("jmapp", ['revendamodel']);

console.log('criou o jmapp');

angular.module("jmapp").config(function($interpolateProvider){
	$interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});