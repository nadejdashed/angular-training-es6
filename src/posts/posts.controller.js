let $state,
	$ngRedux;

class PostsController {
	constructor(postsService, $injector, $scope){
		$state = $injector.get('$state');
		$ngRedux = $injector.get('$ngRedux');
		
		this.text = 'AAAAAAAAAA';
		this.list = postsService.getData();

		let unsubscribe = $ngRedux.subscribe(() => {
			let state = $ngRedux.getState();
			this.paymentType = state.paymentType;
		});

		$scope.$on('$destroy', unsubscribe);
	}

	selectPost(post){
		$ngRedux.dispatch({
			type: 'CHANGE_PAYMENT_TYPE',
			newVal: post.id
		});
		//$state.go('postdetails', {id: post.id});
	}

	increaseClicks(post){
		post.click = (post.click + 1) || 1;
	}
}

export default PostsController;
