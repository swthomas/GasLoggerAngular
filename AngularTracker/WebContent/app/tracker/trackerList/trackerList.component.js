angular.module('trackerModule').component('trackerList', {
	templateUrl : 'app/tracker/trackerList/trackerList.component.html',

	controller : function(trackerService) {
		
		var vm = this;
		vm.list = [];
		
		vm.selected = null;
		vm.showTable = true;
		
		trackerService.index().then(function(res) {
			vm.list = res.data;
		})

		vm.add = function(gasLog) {
			trackerService.create(gasLog).then(function(res) {
				vm.reload();
			});
		}
		
		vm.destroy = function(gasLog) {
			trackerService.destroy(gasLog).then(function(res) {
				vm.reload();
			})
		}

		vm.updateGasLog = function(gasLog) {
			return trackerService.update(gasLog)
				.then(function(res) {
					vm.reload();
				})
		}

		vm.displayGasLog = function(gasLog) {
			vm.showTable = false;
			vm.selected = gasLog;
			console.log(vm.selected);
		}

		vm.displayTable = function() {
			vm.showTable = true;
			vm.selected = null;
		}

		vm.reload = function() {
			vm.list = trackerService.index().then(function(res) {
				vm.list = res.data;
			});
		}
	},

	controllerAs : 'vm'
})