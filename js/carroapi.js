angular.module('carroapi', []);

angular.module('carroapi').factory('CarroApi', function($http){
	return {
        get_info: function(carro_url){
            return $http.jsonp('http://query.yahooapis.com/v1/public/yql', {
			    params: {
			        q: 'use "'+Global.carro_url+'" as carro; select * from carro where url = "'+carro_url+'";',
			        format: 'json',
			        callback: 'JSON_CALLBACK'
			    }
			});
        }
	}
});