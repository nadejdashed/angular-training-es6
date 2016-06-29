import angular from 'angular';
import 'angular-mocks';

angular.module('app-mock', ['ngMockE2E'])
	.run(($httpBackend) => {
		let data = [{
			"id": 1,
			"text": "111"
		}, {
			"id": 2,
			"text": "222"
		}];

		$httpBackend.whenGET(/\.html/).passThrough();
		$httpBackend.whenGET(/\.json/).passThrough();

		$httpBackend.whenGET('/data').respond(data);

		$httpBackend.whenGET(/data\/\w+$/).respond(function (method, url, params) {
			var result = data[0];
			return [200, result];
		});
	});

angular.module('app').requires.push('app-mock');