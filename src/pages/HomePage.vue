<template>
  <div class="posts-container">
      <CreatePostCard />
    <div v-for="p in posts" :key="p.id">
      <PostCard :post="p"/>
    </div>
    <div v-if="!posts">
      <Spinner/>
    </div>
  </div>

  <div v-if="posts">
    <InfiniteScroll/>
  </div>

</template>

<script>

import Pop from '../utils/Pop'
import { postsService } from '../services/PostsService.js'
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'

export default {
  setup() {
    async function getPostsFromApi() {
      try { await postsService.getPostsFromApi() } 
      catch (error) { Pop.error(error, '[HomePage: getPostsFromApi()]') }
    }

    onMounted(() => {
      AppState.profile = null
      AppState.posts = null
      getPostsFromApi()
    })

    return { posts: computed(() => AppState.posts) }
  }
}
</script>

<style scoped lang="scss">
.posts-container{
  padding: 0.5rem 0 0 0.5rem;
}
@media (max-width: 768px) { 
  .posts-container{
  padding: 0.5rem 0;
}
}
</style>
