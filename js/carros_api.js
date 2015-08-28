angular.module('carrosapi', ['ajax']);

angular.module('carrosapi').factory('CarrosApi', function(Ajax){
	return {
        get_info: function(){
            var url="https://query.yahooapis.com/v1/public/yql?q=use%20%22http%3A%2F%2Fyql-tables.surge.sh%2Fcarrosaojose.com.br%2Frevenda.xml%22%20as%20revenda%3B%20select%20*%20from%20revenda%20where%20id%20%3D%20%223639%22%3B&format=json&diagnostics=true&callback=";
            return Ajax.get(url);
        }
	}
});