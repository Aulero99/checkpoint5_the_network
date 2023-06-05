import { AppState } from "../AppState.js"
import { Post } from "../models/Post.js"
// import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class PostsService {

    async getPostsBySearch(search){
        const res = await api.get('api/posts', { params: { query: search } })
            // logger.log(res.data)
        this.saveData(res)
    }

    async deletePost(id){
        const res = await api.delete(`/api/posts/${id}`)
            // logger.log(res)
        AppState.posts = AppState.posts.filter(p=> p.id != id)
    }

    async newPost(formData){
        const res = await api.post('api/posts',{...formData})
        const newPost = new Post(res.data)
            // logger.log(newPost)
        AppState.posts.splice(0,0, newPost)
    }

    async getPostsFromApi(){
        const res = await api.get('api/posts')
            // logger.log(res.data)
        this.saveData(res)
    }
    async getPostsByUserId(id){
        const res = await api.get(`api/profiles/${id}/posts`) 
        this.saveData(res)
    }

    async changePage(value){
        const res = await api.get(value)
        this.saveData(res)
    }

    async getPageAndPush(value){
        const res = await api.get(value)
        const newPosts = res.data.posts.map(p => new Post(p))
        AppState.postPage = res.data.page
        AppState.postTotalPage = res.data.totalPages
        AppState.postNextPage = res.data.newer
        AppState.postPrevPage = res.data.older   
        let posts = AppState.posts
            // logger.log('the new posts are:',newPosts)
            // logger.log('the posts in the appstate are:',posts)
        newPosts.forEach(n => posts.push(n))
        AppState.buffer = false
    }

    async likePost(id){
        const res = await api.post(`/api/posts/${id}/like`)
        const postIndex = AppState.posts.findIndex(p =>p.id == res.data.id)
        AppState.posts[postIndex].likeIds = res.data.likeIds


    }

    saveData(res){
        AppState.posts = res.data.posts.map(p => new Post(p))
            // logger.log('the posts are', AppState.posts)
        AppState.postPage = res.data.page
        AppState.postTotalPage = res.data.totalPages
        AppState.postNextPage = res.data.newer
        AppState.postPrevPage = res.data.older      
    }

}

export const postsService = new PostsService()