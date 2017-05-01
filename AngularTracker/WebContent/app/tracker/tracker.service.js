angular.module('trackerModule')
.factory('trackerService', function($http, $filter) {
	
	var BASE_URL = 'http://localhost:8080/AngularTracker/api/';
	
	var service = {};

	service.index = function(id) {
		return $http({
		      method : 'GET',
		      url : BASE_URL + 'gas'
		    })
	};
	
	service.show = function(id) {
		console.log(id);
		return $http({
		      method : 'GET',
		      url : BASE_URL + 'gas/' + id
		    })
	};

	service.create = function(todo) {
		return $http({
		      method : 'POST',
		      url : BASE_URL + 'gas',
		      headers : {
		        'Content-Type' : 'application/json'
		      },
		      data : todo
		    })
		  };
	
	service.destroy = function(id) {
		return $http({
		      method : 'DELETE',
		      url : BASE_URL + 'gas/' + id,
		    })
		  };
	
	service.update = function(gasLog) {
		return $http({
		      method : 'PUT',
		      url : BASE_URL + 'gas/' + gasLog.id,
		      headers : {
		        'Content-Type' : 'application/json'
		      },
		      data : gasLog
		    })
		  };

	return service;
})