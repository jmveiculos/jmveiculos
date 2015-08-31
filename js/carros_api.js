angular.module('carrosapi', []);

angular.module('carrosapi').factory('CarrosApi', function($http){
	return {
        get_info: function(){
            return $http.jsonp('http://query.yahooapis.com/v1/public/yql', {
			    params: {
			        q: 'use "'+Global.revenda_url+'" as revenda; select * from revenda where id = "'+Global.loja_id+'";',
			        format: 'json',
			        callback: 'JSON_CALLBACK'
			    }
			});
        }
	}
});