var editPro = angular.module('edit-app', ['ngMaterial']);

editPro.controller('design-controller', function($scope, $mdSidenav, $mdMedia) {
	$scope.search_info = [];//搜索结果
	
	//获得所有基因
	$scope.getAllGene = function(){
		$http.get("/home/getAllGene").success(function(data) {
			if (data.isSuccessful) {
				var gene_info = data.gene_info;
				for(var i = 0;i < gene_info.length;i++){
					$scope.search_info.push({
						img: gene_info[i].img,
						name: gene_info[i].name
					});
				}
			}
		});
	};

	//侧边栏方法
  	$scope.openLeftMenu = function() {
    	$mdSidenav('left').toggle();
  	};
  	
  	//添加功能标签按钮事件方法
  	$scope.addFunctionTags = function(ev) {
	    $mdDialog.show({
	      	controller: addFunctionTagsController,
	      	templateUrl: './html/new_function_tags.tmp.html',
	      	parent: angular.element(document.body),
	      	targetEvent: ev,
	      	clickOutsideToClose:true,
	    })
	    .then(function(result) {
	      // return
	    }, function() {
	      //return
	    });
  	};
  	
  	//页面初始化时显示所有基因
  	$scope.getAllGene();
});

function addFunctionTagsController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
}