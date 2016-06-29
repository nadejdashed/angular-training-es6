import angular from 'angular';
import 'angular-resource';
import 'angular-ui-router';
import AppController from './app.controller';
import PostsComponent from './posts/posts.component';
import PostDetailComponent from './post-detail/post-detail.component';
import PostsService from './posts/posts.service';

import ngRedux from 'ng-redux';
import reducers from './redux_dir/reducers';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

angular.module('app', ['ngResource', 'ui.router', ngRedux])
	.controller('appController', AppController)
	.component('posts', PostsComponent.createInstance())
	.component('postDetail', new PostDetailComponent())
	.service('postsService', PostsService)
	.config(($stateProvider, $urlRouterProvider) => {

		$urlRouterProvider.otherwise("/");

		$stateProvider.state('postlist', {
			url: "/",
			template: "<posts></posts>"
		}).state('postdetails', {
			url: "/post/:id",
			template: "<post-detail post='post'></post-detail>",
			controller: ($scope, postsService, $stateParams) => {
				$scope.post = postsService.getOneObject($stateParams.id);
			}
		});
	})
	.config(($ngReduxProvider) => {
		$ngReduxProvider.createStoreWith(reducers, [thunk, createLogger()]);
	});