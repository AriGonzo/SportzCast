angular.module('sportzCast')
  .service('SportzCastApi', function ($resource) {
  	return {

  		url: function(param){
  			return "http://sportzcast-api.azurewebsites.net/"+ param +"/"
  		},

  		get: function(baseUrl, method, parameter, limit, query, live){
  			method = method || '';
        parameter = parameter || '';
  			limit = limit || '';
        query = query || '';
        live = live || '';
  			
  			var result = $resource(baseUrl + method + parameter + limit + query + live,
      		{ callback: "JSON_CALLBACK"},
      		{ get: { method: 'JSONP'}});
  			return result.get().$promise;
  		}
  	}
  });