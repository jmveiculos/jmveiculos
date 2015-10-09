angular.module('revendaapi', []);

angular.module('revendaapi').factory('RevendaApi', function($http){
	return {
        get_info: function(){
            return $http.jsonp('http://query.yahooapis.com/v1/public/yql', {
			    params: {
			        q: 'use "'+JM.revenda_url+'" as revenda; select * from revenda where id = "'+JM.loja_id+'";',
			        format: 'json',
			        callback: 'JSON_CALLBACK',
			    }
			});
        },
        get_urls: function(){
        	return $http.jsonp('http://query.yahooapis.com/v1/public/yql', {
        		params: {
        			q: 'use "'+JM.revenda_url+'" as revenda; select carros.carro.href from revenda where id ="'+JM.loja_id+'";',
        			format: 'json',
        			callback: 'JSON_CALLBACK',
        		}
        	});
        }
	}
});