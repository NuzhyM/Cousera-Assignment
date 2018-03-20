(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){

	$scope.message = "";
	$scope.noOfLunchItems = 0;

	
	$scope.countItem = function(){
		var noOfItem = calculateItem($scope.lunchItem);
		console.log(noOfItem);
		$scope.noOfLunchItems = noOfItem;
		var msg = displayMessage(noOfItem);
		$scope.message = msg;
	};

	function displayMessage(items){
		var message = "";
		if (items <= 3 && items >= 0)
			message = "Enjoy!";
		else if (items > 3)
			message = "Too much!";
		else
			message = "Please enter data first";

		return message;

	};

	function calculateItem(stringToSplit){
		if(stringToSplit.length != 0)
		{
			var arrayOfItems = stringToSplit.split(',');
			return arrayOfItems.length;
		}
		else
			return -1;
	}
}

})();
