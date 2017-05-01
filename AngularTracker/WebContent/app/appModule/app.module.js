angular.module('appModule', [ 'trackerModule', 'ngRoute'])
.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		template : '<home>loading home...</home>'
	})
});
