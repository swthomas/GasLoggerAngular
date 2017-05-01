angular.module('trackerModule').component('trackerEdit', {
	templateUrl : 'app/tracker/trackerEdit/trackerEdit.component.html',
	controller : function($routeParams, trackerService, $location) {
		var vm = this;

		vm.editMode = false;
		vm.editGasLog = null;
		
		if (!vm.gasLog && parseInt($routeParams.id)) {
			trackerService.show($routeParams.id).then(function(res){
				console.log(res);
				if (!res.data) {
					$location.path('/notfound');
				}
				vm.gasLog = res.data;
			}).catch(function(){
				$location.path('/notfound');
			});
		}
		
		vm.setEditGasLog = function() {
			vm.editMode = true;
			vm.editGasLog = angular.copy(vm.gasLog);
		}
		
		vm.save = function() {
			console.log("onupdate")
			vm.onUpdate({gasLog: vm.editGasLog})
			vm.editGasLog = null;
			vm.editMode = false;
			
		}
		
		vm.cancel = function() {
			vm.editMode = false;
			vm.editGasLog = null;
		}
		
		vm.backButton = function() {
			if ($routeParams.id){
				$location.path('/todo');
			}
			else {
				vm.goBack();
			}
		}
		
	},
	
	controllerAs : 'vm',
	
	bindings : {
		gasLog : '<',
		goBack : '&',
		onUpdate : '&'
	}
	
})