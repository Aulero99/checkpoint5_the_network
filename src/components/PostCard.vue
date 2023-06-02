<template>
  <div class="post-card elevation-2 d-flex flex-column">
    <div class="profile">
        <div class="profile-info">
            <div class="img-container">
                <img :src="post.creatorImg" alt="Profile Image">
            </div>
            <h5>{{ post.creatorName }}</h5>
        </div>
        <div class="profile-controls">
            controls
        </div>
    </div>
    
    <p>{{ post.body }}</p>
    <img :src="post.img" alt="Post Image">
  </div>
</template>
  
<script>
import { Post } from '../models/Post'

  export default {
    props:{
        post: { type: Post, required: true }
    },
    setup() {
      return {
  
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
}
.img-container{
    height: 2rem;
    aspect-ratio: 1/1;
    border-radius: 50%;
    object-fit: cover;
    overflow: hidden;
    margin-right: 0.5rem;
}
.img-container img{
    width: 100%;
}
</style>