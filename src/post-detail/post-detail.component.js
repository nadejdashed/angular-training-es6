class PostDetailComponent {
	constructor (){
		this.templateUrl = '/src/post-detail/post-detail.html';
		this.controllerAs = 'postDetail';
		this.bindings = {
			post: '<', //oneway
			//post: '=',
			//post: '@',
			postClick: '&' //function
		};
	}
}
export default PostDetailComponent;