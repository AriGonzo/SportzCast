angular.module('sportzCast')
  .service('SportzCastApi', function ($resource) {
  	return {

  		url: function(param){
  			return "http://sportzcast-api.azurewebsites.net/"+ param +"/"
  		},

  		get: function(baseUrl, region){
  			var result = $resource(baseUrl + region,
      		{ callback: "JSON_CALLBACK"},
      		{ get: { method: 'JSONP'}});
  			return result.get().$promise;
  		}
  	}
  })