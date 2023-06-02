<template>
  <div class="card">
    <img :src="post.img" alt="Post Image">
    <p>{{ post.body }}</p>
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

</style>