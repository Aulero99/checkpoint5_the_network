<template>
  <div class="post-card elevation-2 d-flex flex-column" @click="userIdInPostLikeArray(post)">
    
    <div class="profile">

        <router-link :to="{name: 'Profile', params:{ id:post.creatorId }}">
          <div class="profile-info">
              <div class="img-container">
                  <img :src="post.creatorImg" alt="Profile Image">
              </div>
              <h5>{{ post.creatorName }}</h5>
          </div>
        </router-link>

        <div class="profile-controls" v-if="user.id == post.creatorId">
          <div title="Delete Post" class="delete" @click="deletePost(post.id)">
            <i class="mdi mdi-delete"></i>
          </div>
        </div>

    </div>
    
    <p class="post-body">{{ post.body }}</p>
    <img :src="post.img" alt="Post Image" v-if="post.img">
    <div title="Like Post" class="post-like">
      <div class="updated">
        {{ post.updatedAt }}
      </div>
      <div v-if="user.isAuthenticated" class="post-click auth" @click="likePost(post.id)">
        <div class="number">
        {{ post.likeNum }}
      </div>
      <div class="icon">
        <i class="mdi mdi-heart" v-if="userIdInPostLikeArray(post)"></i>
        <i class="mdi mdi-heart-outline" v-else></i>
      </div>
      </div>
      <!-- NOTE this is what is displayed if the user is not logged in, and cannot be clicked -->
      <div v-if="!user.isAuthenticated" class="post-click">
        <div class="number">
        {{ post.likeNum }}
      </div>
      <div class="icon">
        <i class="mdi mdi-heart-outline"></i>
      </div>
      </div>      
    </div>
  </div>
</template>
  
<script>
import { AppState } from '../AppState'
import { Post } from '../models/Post'
import { postsService } from '../services/PostsService'
import Pop from '../utils/Pop'
import { computed } from 'vue'


  export default {
    props:{ post: { type: Post, required: true } },
    setup() {
      return {

        user: computed(()=>AppState.user),

        async likePost(id){
          try { await postsService.likePost(id) } 
          catch (error) { Pop.error(error, '[PostCard: likePost()]') }
        },

        userIdInPostLikeArray(post){
          const userId = AppState.user.id
          const postLiked = post.likeIds.findIndex(p => p == userId)
          if(postLiked == -1){ return false}
          return true
        },

        async deletePost(id){
          try {
            if(await Pop.confirm('Do you want to delete this post?')){
              await postsService.deletePost(id)
            }
          } catch (error) {
            Pop.error(error, '[PostCard: deletePost()]')
          }
        }
      }
    }
  }
</script>

<style scoped>
.post-card{
    border: solid 1px #a9a9a9;
    background-color: #fff;
    margin-bottom: 1rem;
    border-radius: 0.15rem;
}
.post-body{
  padding: 0 0.45rem;
}
.post-like{
  padding: 0.45rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 1.5rem;
}
.post-click:hover{
  color: red;
}
.post-click{
  display: flex;
  flex-direction: row;
  transition: all 100ms;
}
.auth{
  cursor: pointer;
}
.icon{
  line-height: 164%;
}
.number{
  margin-right: 0.35rem;
}
.profile{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.45rem;
}
.profile-info{
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.img-container{
    height: 2.7rem;
    aspect-ratio: 1/1;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 0.5rem;
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}
.img-container img{
    height: 100%;
}
.delete{
  cursor: pointer;
  font-size: 1.5rem;
  transition: all 100ms;
}
.delete:hover{
  color: red;
}
</style>