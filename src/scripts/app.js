var app = angular.module("canhCamApp", ["ui.bootstrap"]);
// Config
app.config([
	"$compileProvider",
	function($compileProvider) {
		$compileProvider.aHrefSanitizationWhitelist(
			/^\s*(https?|ftp|mailto|file|javascript):/
		);
	}
]);
// Filter
app.filter("html", [
	"$sce",
	function($sce) {
		return function(val) {
			return $sce.trustAsHtml(val);
		};
	}
]);
// Main Controller
app.controller("mainControl", function($scope, $http, $rootScope) {
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
		url:
			baoNguyenApp.API.URL
	}).then(
		function(response) {
			baoNguyenApp.loading(!1)
			$scope.settings = eval(response.data.settings);
		},
		function(error) {
			console.log("Lỗi Data: " + error);
		}
	);

	
});
