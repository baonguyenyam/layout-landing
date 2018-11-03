angular.module('main.controller', []).controller("MainController", _mainController)

function _mainController($scope, $http, $rootScope, $resource) {
	$scope.lang = {
		loading: "Đang tải dữ liệu...",
		pattern: "Mẫu",
		back: "Trở về",
		share: "Chia sẻ",
		done: "Hoàn thành",
		booking: "Đặt hàng",
		save: "Lưu ảnh",
		itempage: "Số mẫu/trang",
		noitem: "Danh sách màu phối!",
		notice: "Vui lòng chọn danh mục bên cạnh để thực hiện phối màu",
		material: "Danh mục chất liệu"
	};
	$http({
		method: "GET",
		url: baoNguyenApp.API.URL
	}).then(
		function (response) {
			baoNguyenApp.loading(!1)
			$scope.menuData = eval(response.data);
		},
		function (error) {
			console.log("Lỗi Data: " + error);
		}
	);

	$scope.getClick = function (e) {
		$http({
			method: "GET",
			url: './uploads/' + e
		}).then(
			function (response) {
				console.log(response)
			},
			function (error) {
				console.log("Lỗi Files: " + error);
			}
		);
	}
}
