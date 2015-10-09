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

if(!window.JM){
    window.JM = {};
}
if(!JM.angular_dependencies){
  JM.angular_dependencies = [];
}

JM.loja_id = '3639';
JM.revenda_url = 'http://yql-tables.surge.sh/carrosaojose.com.br/revenda.xml';
JM.carro_url = 'http://yql-tables.surge.sh/carrosaojose.com.br/carro.xml';

angular.module("jmapp", ['revendamodel', 'carromodel']);

console.log('criou o jmapp');

angular.module("jmapp").config(function($interpolateProvider, $httpProvider){
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');

    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];





});