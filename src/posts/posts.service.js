let PostResource;

class PostsService {
	constructor($resource){
		PostResource = $resource('/data/:id');
	}
	
	getData(){
		return PostResource.query();
	}
	
	getOneObject(id){
		return PostResource.get({id: id});
	}
}

export default PostsService;