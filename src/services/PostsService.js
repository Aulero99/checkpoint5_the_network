import { AppState } from "../AppState.js"
import { Post } from "../models/Post.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class PostsService {
    async getPostsFromApi(){
        const res = await api.get('api/posts')
        this.saveData(res)
    }

    async changePage(value){
        const res = await api.get(value)
        this.saveData(res)
    }

    saveData(res){
        AppState.posts = res.data.posts.map(p => new Post(p))
        logger.log('the posts are', AppState.posts)
        AppState.postPage = res.data.page
        AppState.postTotalPage = res.data.totalPages
        AppState.postNextPage = res.data.newer
        AppState.postPrevPage = res.data.older      
    }

}

export const postsService = new PostsService()