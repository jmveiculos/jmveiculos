angular.module('carrosapi', []);

angular.module('carrosapi').factory('CarrosApi', function($http){
	return {
        get_info: function(){
            return $http.jsonp('http://query.yahooapis.com/v1/public/yql', {
			    params: {
			        q: 'use "http://yql-tables.surge.sh/carrosaojose.com.br/revenda.xml" as revenda; select * from revenda where id = "3639";',
			        format: 'json',
			        callback: 'JSON_CALLBACK'
			    }
			}).then(function (result) {
			    // result.data contains the 
			    // the response from Yahoo
			    console.log(result.data);
			});


        }
	}
});