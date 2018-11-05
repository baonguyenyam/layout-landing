const baoNguyenApp = {
	// API hệ thống 
	API: {
		URL: "./db/menu.json",
	},
	// Bật loadding 
	loading: (i) => {
		i && 1 == i ? $("#loading").removeClass("done").removeClass("finished") : (setTimeout(() => {
			$("#loading").addClass("done")
		}, 200), setTimeout(() => {
			$("#loading").removeClass("done").addClass("finished")
		}, 1e3))
	},
	// Load dữ liệu & xử lý
	fetch: (e, o, n) => {
		baoNguyenApp.loading(!0), $.ajax({
			url: e,
			type: o,
			dataType: "json",
			cache: !0,
			complete: (e) => {
				n(e), baoNguyenApp.loading(!1)
			}
		})
	},
	// Khởi tạo app
	init: () => {
		// Chạy các hàm jquery mặc định
	}
}

// Canh Cam Code
$(document).ready(() => {
	baoNguyenApp.init()
});

$(window).resize(() => {});

const s3AWS = {
	bucketRootName: 'ldbwebcomponents',
	maxKeys: 1000,
	delimiter: '/',
	baseURL: 'http://ldbwebcomponents.s3.amazonaws.com/',
	prefixes: {
		alert: 'alert/'
	}
}

AWS.config.region = 'ap-southeast-1'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
	IdentityPoolId: 'ap-southeast-1:344a47a4-be9d-4489-9899-ecbbc4e0ac22',
});
