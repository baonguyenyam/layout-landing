angular.module('statistic.router', []).config(_statisticRoute)

function _statisticRoute($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('statistic', {
			url: '/statistic',
			data: {
				pageTitle: 'Về chúng tôi'
			},
			views: {
				"@": {
					controller: 'StatisticController',
					templateUrl: '/views/content.html',
				},
				"menu@": {
					controller: 'MenuController',
					templateUrl: '/views/menu.html'
				}
			}
		});
}
